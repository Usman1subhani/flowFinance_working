import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useTransactions } from '../../context/TransactionContext';
import { useCategories } from '../../context/CategoryContext';

const RecentTransactions = () => {
    const { transactions } = useTransactions();
    const { categories } = useCategories();

    // Show only the latest 4-5 transactions
    const displayTransactions = transactions.slice(0, 5);

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm grow flex flex-col">
            <h3 className="heading-2 mb-6">Recent Transactions</h3>

            <div className="space-y-4 flex-1 overflow-auto pr-1">
                {displayTransactions.map((t) => {
                    const category = categories.find(c => c.id === t.categoryId);

                    return (
                        <div key={t.id} className="flex items-center justify-between group cursor-pointer hover:bg-slate-50 p-2 rounded-xl transition-all -mx-2">
                            <div className="flex items-center gap-3.5">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${t.type === 'income' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
                                    } transition-colors`}>
                                    {t.type === 'income' ? <TrendingUp size={18} /> : <TrendingDown size={18} />}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 text-[14px] tracking-tight">{t.title}</h4>
                                    <div className="flex items-center gap-2 mt-0.5">
                                        <span className="text-[11px] font-medium text-slate-500">
                                            {new Date(t.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </span>
                                        {category && (
                                            <span
                                                className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider"
                                                style={{ backgroundColor: `${category.color}15`, color: category.color }}
                                            >
                                                {category.name}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={`font-bold text-[15px] tracking-tight ${t.type === 'income' ? 'text-emerald-500' : 'text-rose-500'
                                }`}>
                                {t.type === 'income' ? '+' : '-'}${t.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                            </div>
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
