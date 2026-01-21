'use client';

import React from 'react';
import { Plus, Edit2, Trash2, Target } from 'lucide-react';
import { useBudgets, Budget } from '../../context/BudgetContext';
import { useCategories } from '../../context/CategoryContext';

interface CategoryBudgetsProps {
    onAddClick: () => void;
}

const CategoryBudgets: React.FC<CategoryBudgetsProps> = ({ onAddClick }) => {
    const { budgets, deleteBudget } = useBudgets();
    const { categories } = useCategories();

    return (
        <div className="bg-white p-5 rounded-[0.5rem] border border-slate-100 shadow-sm ">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
                        <Target size={20} />
                    </div>
                    <h3 className="text-md font-bold text-slate-900">Category Budgets</h3>
                </div>
                <button
                    onClick={onAddClick}
                    className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-95"
                >
                    <Plus size={18} />
                </button>
            </div>

            <div className="space-y-6">
                {budgets.map((budget) => {
                    const category = categories.find((c) => c.id === budget.categoryId);
                    const percentUsed = Math.min((budget.spent / budget.amount) * 100, 100);

                    return (
                        <div key={budget.id} className="group">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">{category?.name || 'Unknown'}</h4>
                                    <p className="text-[11px] font-bold text-slate-400">
                                        ${budget.spent.toLocaleString()} of ${budget.amount.toLocaleString()}
                                    </p>
                                </div>
                                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="p-1.5 text-slate-300 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-all">
                                        <Edit2 size={14} />
                                    </button>
                                    <button
                                        onClick={() => deleteBudget(budget.id)}
                                        className="p-1.5 text-slate-300 hover:text-rose-500 hover:bg-slate-50 rounded-lg transition-all"
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            </div>
                            <div className="relative h-2.5 w-full bg-slate-50 rounded-full overflow-hidden">
                                <div
                                    className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000"
                                    style={{
                                        width: `${percentUsed}%`,
                                        backgroundColor: category?.color || '#6366f1'
                                    }}
                                />
                                {percentUsed >= 100 && (
                                    <div className="absolute top-0 left-0 w-full h-full bg-rose-500/20 animate-pulse" />
                                )}
                            </div>
                            <div className="flex items-center justify-between mt-2">
                                <span className={`text-[10px] font-black uppercase tracking-widest ${percentUsed >= 100 ? 'text-rose-500' : 'text-slate-400'}`}>
                                    {percentUsed.toFixed(0)}% used
                                </span>
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                    ${(budget.amount - budget.spent).toLocaleString()} left
                                </span>
                            </div>
                        </div>
                    );
                })}

                {budgets.length === 0 && (
                    <div className="text-center py-8 px-6 border-2 border-dashed border-slate-100 rounded-[1rem]">
                        <p className="text-slate-500 text-[11px] font-bold">No budgets set</p>
                        <button
                            onClick={onAddClick}
                            className="text-indigo-600 text-[10px] font-black uppercase tracking-widest hover:underline"
                        >
                            Set your first budget
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryBudgets;
