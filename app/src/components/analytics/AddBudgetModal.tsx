'use client';

import React, { useState } from 'react';
import { X, Target, ChevronDown } from 'lucide-react';
import { useCategories } from '../../context/CategoryContext';
import { useBudgets } from '../../context/BudgetContext';

interface AddBudgetModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddBudgetModal: React.FC<AddBudgetModalProps> = ({ isOpen, onClose }) => {
    const { categories } = useCategories();
    const { addBudget, budgets } = useBudgets();

    const [categoryId, setCategoryId] = useState('');
    const [amount, setAmount] = useState('');

    if (!isOpen) return null;

    // Filter categories that don't have a budget yet
    const availableCategories = categories.filter(
        (cat) => !budgets.some((b) => b.categoryId === cat.id)
    );

    const handleSubmit = () => {
        if (!categoryId || !amount) return;

        addBudget({
            categoryId,
            amount: parseFloat(amount),
        });

        setCategoryId('');
        setAmount('');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-all duration-300">
            <div
                className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300 border-t-8 border-indigo-600"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="p-8 pb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
                            <Target size={22} />
                        </div>
                        <h3 className="text-xl font-black text-slate-900 tracking-tight">Add Budget</h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="p-8 space-y-6">
                    {/* Category Selection */}
                    <div className="space-y-2">
                        <label className="text-[11px] font-black text-slate-700 uppercase tracking-widest px-1">Category</label>
                        <div className="relative">
                            <select
                                value={categoryId}
                                onChange={(e) => setCategoryId(e.target.value)}
                                className="w-full appearance-none px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all cursor-pointer text-slate-900"
                            >
                                <option value="" disabled>Select category</option>
                                {availableCategories.map((cat) => (
                                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                                ))}
                            </select>
                            <ChevronDown size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        </div>
                    </div>

                    {/* Amount Input */}
                    <div className="space-y-2">
                        <label className="text-[11px] font-black text-slate-700 uppercase tracking-widest px-1">Budget Amount</label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="0.00"
                            className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 font-black text-xl placeholder:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-slate-900"
                        />
                    </div>

                    <button
                        onClick={handleSubmit}
                        disabled={!categoryId || !amount}
                        className="w-full py-5 bg-indigo-600 text-white rounded-[1.5rem] font-black text-[15px] uppercase tracking-widest hover:bg-indigo-700 active:scale-[0.98] transition-all shadow-xl shadow-indigo-100 mt-4 disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed"
                    >
                        Add Budget
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddBudgetModal;
