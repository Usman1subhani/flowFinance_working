'use client';

import React from 'react';
import { TrendingUp, TrendingDown, Edit2, Trash2, Image as ImageIcon, X } from 'lucide-react';
import { Transaction, useTransactions } from '../../context/TransactionContext';
import { useAccounts } from '../../context/AccountContext';
import { useCategories } from '../../context/CategoryContext';
import { useBudgets } from '../../context/BudgetContext';

interface TransactionItemProps {
    transaction: Transaction;
    onEdit: (transaction: Transaction) => void;
    onDelete: (id: string) => void;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction, onEdit, onDelete }) => {
    const { accounts } = useAccounts();
    const { categories } = useCategories();
    const { budgets } = useBudgets();
    const { transactions } = useTransactions();
    const [isPreviewOpen, setIsPreviewOpen] = React.useState(false);

    const account = accounts.find((acc) => acc.id === transaction.accountId);
    const category = categories.find((cat) => cat.id === transaction.categoryId);
    const budget = budgets.find(b => b.categoryId === transaction.categoryId);

    // Calculate progress if budget exists
    let progress = 0;
    let spentInCategory = 0;
    if (budget && budget.amount > 0) {
        spentInCategory = transactions
            .filter(tx => tx.categoryId === transaction.categoryId && tx.type === 'expense')
            .reduce((acc, tx) => acc + tx.amount, 0);
        progress = (spentInCategory / budget.amount) * 100;
    }

    const getProgressColor = (pct: number) => {
        if (pct > 95) return 'bg-rose-500';
        if (pct > 50) return 'bg-amber-500';
        return 'bg-emerald-500';
    };

    const getProgressTextColor = (pct: number) => {
        if (pct > 95) return 'text-rose-500';
        if (pct > 50) return 'text-amber-500';
        return 'text-emerald-500';
    };

    const formattedDate = new Date(transaction.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });

    const formattedTime = new Date(transaction.date).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });

    return (
        <>
            <div className="group border-b border-slate-100 last:border-0 px-2">
                {/* Desktop Layout (Hidden on Mobile) */}
                <div className="hidden md:flex flex-col gap-3 py-4 hover:bg-slate-50/50 transition-all px-2">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 flex-1">
                            {/* Icon Box */}
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300 ${transaction.type === 'income' ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'
                                }`}>
                                {transaction.type === 'income' ? <TrendingUp size={18} /> : <TrendingDown size={18} />}
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center gap-3">
                                    <h4 className="text-[15px] font-bold text-slate-800 tracking-tight">{transaction.title}</h4>
                                </div>

                                <div className="flex items-center flex-wrap gap-x-3 gap-y-1 mt-0.5">
                                    <span className="text-[11px] font-bold text-slate-400 capitalize">
                                        {formattedDate} {formattedTime}
                                    </span>

                                    {account && (
                                        <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md text-[10px] font-black uppercase tracking-wider">
                                            {account.name}
                                        </span>
                                    )}

                                    {category && (
                                        <span
                                            className="px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-slate-50"
                                            style={{ color: category.color, border: `1px solid ${category.color}30` }}
                                        >
                                            {category.name}
                                        </span>
                                    )}

                                    {transaction.attachment && (
                                        <button
                                            onClick={() => setIsPreviewOpen(true)}
                                            className="flex items-center gap-1.5 px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-md text-[10px] font-black uppercase tracking-wider hover:bg-indigo-100 transition-colors"
                                        >
                                            <ImageIcon size={10} />
                                            Image
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className={`text-[16px] font-black tracking-tight ${transaction.type === 'income' ? 'text-emerald-500' : 'text-slate-900'
                                }`}>
                                {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                            </div>

                            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={() => onEdit(transaction)}
                                    className="p-1.5 hover:bg-indigo-50 text-slate-400 hover:text-indigo-600 rounded-lg transition-all"
                                >
                                    <Edit2 size={16} />
                                </button>
                                <button
                                    onClick={() => onDelete(transaction.id)}
                                    className="p-1.5 hover:bg-rose-50 text-slate-400 hover:text-rose-600 rounded-lg transition-all"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Progress Bar for Expenses */}
                    {transaction.type === 'expense' && budget && (
                        <div className="ml-14 pr-24">
                            <div className="flex justify-between items-center mb-1.5">
                                <span className={`text-[10px] font-black uppercase tracking-widest ${getProgressTextColor(progress)}`}>
                                    {Math.round(progress)}% of budget
                                </span>
                                <span className="text-[10px] font-bold text-slate-400">
                                    ${spentInCategory.toLocaleString()} / ${budget.amount.toLocaleString()}
                                </span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div
                                    className={`h-full transition-all duration-1000 ${getProgressColor(progress)}`}
                                    style={{ width: `${Math.min(progress, 100)}%` }}
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Mobile Layout (Visible on Mobile) */}
                <div className="flex md:hidden flex-col gap-3 py-5">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                            {/* Icon Box */}
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${transaction.type === 'income' ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'
                                }`}>
                                {transaction.type === 'income' ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
                            </div>
                            <div>
                                <h4 className="text-[15px] font-bold text-slate-800 tracking-tight leading-tight mb-1">{transaction.title}</h4>
                                <div className="flex items-center gap-2">
                                    <span className="text-[11px] font-bold text-slate-400">
                                        {formattedDate} • {formattedTime}
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Action Buttons Always Visible on Mobile */}
                        <div className="flex items-center gap-1 pt-1">
                            <button
                                onClick={() => onEdit(transaction)}
                                className="p-1.5 text-slate-400 hover:text-indigo-600"
                            >
                                <Edit2 size={18} />
                            </button>
                            <button
                                onClick={() => onDelete(transaction.id)}
                                className="p-1.5 text-slate-400 hover:text-rose-600"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>

                    <div className="pl-[3.25rem] -mt-1 flex flex-col gap-3">
                        <div className="flex items-center flex-wrap gap-2">
                            {category && (
                                <span
                                    className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-white border"
                                    style={{ color: category.color, borderColor: `${category.color}30` }}
                                >
                                    {category.name}
                                </span>
                            )}
                            {account && (
                                <span className="px-2.5 py-1 bg-slate-50 text-slate-400 rounded-lg text-[10px] font-black uppercase tracking-wider border border-slate-100">
                                    {account.name}
                                </span>
                            )}
                        </div>

                        <div className={`text-[18px] font-black tracking-tight ${transaction.type === 'income' ? 'text-emerald-500' : 'text-rose-500'
                            }`}>
                            {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </div>

                        {/* Progress Bar for Expenses on Mobile */}
                        {transaction.type === 'expense' && budget && (
                            <div className="mt-1">
                                <div className="flex justify-between items-center mb-1.5">
                                    <span className={`text-[9px] font-black uppercase tracking-widest ${getProgressTextColor(progress)}`}>
                                        {Math.round(progress)}% of budget
                                    </span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full transition-all duration-1000 ${getProgressColor(progress)}`}
                                        style={{ width: `${Math.min(progress, 100)}%` }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Image Preview Overlay */}
            {isPreviewOpen && transaction.attachment && (
                <div
                    className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4 animate-in fade-in duration-200"
                    onClick={() => setIsPreviewOpen(false)}
                >
                    <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center gap-4">
                        <button
                            onClick={() => setIsPreviewOpen(false)}
                            className="absolute -top-12 right-0 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                        >
                            <X size={24} />
                        </button>
                        <img
                            src={transaction.attachment}
                            alt={transaction.title}
                            className="max-w-full max-h-[80vh] rounded-3xl object-contain shadow-2xl border-4 border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <div className="text-white text-center">
                            <h3 className="text-xl font-bold">{transaction.title}</h3>
                            <p className="text-white/60 text-sm mt-1">{formattedDate}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TransactionItem;
