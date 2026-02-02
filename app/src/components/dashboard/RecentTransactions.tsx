'use client';

import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useTransactions } from '../../context/TransactionContext';
import { useCategories } from '../../context/CategoryContext';
import { useBudgets } from '../../context/BudgetContext';

interface RecentTransactionsProps {
    selectedAccountId?: string;
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({ selectedAccountId = 'all' }) => {
    const { transactions } = useTransactions();
    const { categories } = useCategories();
    const { budgets } = useBudgets();

    // Filter transactions based on selected account and show only the latest 5
    const displayTransactions = transactions
        .filter(t => selectedAccountId === 'all' || t.accountId === selectedAccountId)
        .slice(0, 5);

    return (
        <div className="bg-white p-4 md:p-6 lg:p-8 rounded-[0.7rem] md:rounded-[1rem] border border-black/10 shadow-sm grow flex flex-col">
            <h3 className="text-base md:text-lg lg:text-[18px] font-bold text-black mb-3 md:mb-5">Recent Transactions</h3>

            <div className="space-y-1 flex-1 overflow-auto pr-2 md:pr-5">
                {displayTransactions.map((t) => {
                    const category = categories.find(c => c.id === t.categoryId);
                    const budget = budgets.find(b => b.categoryId === t.categoryId);

                    // Calculate progress if budget exists
                    let progress = 0;
                    if (budget && budget.amount > 0) {
                        const spentInCategory = transactions
                            .filter(tx => tx.categoryId === t.categoryId && tx.type === 'expense')
                            .reduce((acc, tx) => acc + tx.amount, 0);
                        progress = (spentInCategory / budget.amount) * 100;
                    }

                    const getProgressColor = (pct: number) => {
                        if (pct > 95) return 'bg-rose-500';
                        if (pct > 50) return 'bg-amber-500';
                        return 'bg-emerald-500';
                    };

                    return (
                        <div key={t.id} className="flex flex-col gap-2 group cursor-pointer hover:bg-slate-50 p-2 md:p-3 rounded-xl md:rounded-2xl transition-all -mx-2 md:-mx-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 md:gap-4">
                                    <div className={`w-9 h-9 md:w-11 md:h-11 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-md ${t.type === 'income' ? 'bg-emerald-500 shadow-emerald-100' : 'bg-rose-500 shadow-rose-100'
                                        }`}>
                                        {t.type === 'income' ?
                                            <TrendingUp className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2.5} /> :
                                            <TrendingDown className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2.5} />
                                        }
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm md:text-[15px] tracking-tight">{t.title}</h4>
                                        <div className="flex items-center gap-2 mt-0.5">
                                            <span className="text-[10px] md:text-[12px] font-bold text-slate-400">
                                                {new Date(t.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                            </span>
                                            {category && (
                                                <span
                                                    className="px-2 py-0.5 rounded-lg text-[9px] md:text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-500"
                                                >
                                                    {category.name}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className={`font-black text-sm md:text-[16px] tracking-tight ${t.type === 'income' ? 'text-emerald-500' : 'text-rose-500'
                                    }`}>
                                    {t.type === 'income' ? '+' : '-'}${t.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                                </div>
                            </div>

                            {/* Budget Progress Bar */}
                            {t.type === 'expense' && budget && (
                                <div className="ml-[3rem] md:ml-[3.75rem] mt-1 pr-2">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Growth Budget</span>
                                        <span className="text-[9px] md:text-[10px] font-bold text-slate-500">{Math.round(progress)}%</span>
                                    </div>
                                    <div className="h-1 md:h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full transition-all duration-1000 ${getProgressColor(progress)}`}
                                            style={{ width: `${Math.min(progress, 100)}%` }}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}

                {displayTransactions.length === 0 && (
                    <div className="py-10 text-center">
                        <p className="text-slate-400 text-sm font-medium">No transactions yet</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RecentTransactions;
