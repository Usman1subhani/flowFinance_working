'use client';

import React from 'react';
import { TrendingUp, TrendingDown, Edit2, Trash2 } from 'lucide-react';
import { Transaction } from '../../context/TransactionContext';
import { useAccounts } from '../../context/AccountContext';
import { useCategories } from '../../context/CategoryContext';

interface TransactionItemProps {
    transaction: Transaction;
    onEdit: (transaction: Transaction) => void;
    onDelete: (id: string) => void;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction, onEdit, onDelete }) => {
    const { accounts } = useAccounts();
    const { categories } = useCategories();

    const account = accounts.find((acc) => acc.id === transaction.accountId);
    const category = categories.find((cat) => cat.id === transaction.categoryId);

    const formattedDate = new Date(transaction.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });

    return (
        <div className="flex items-center justify-between p-4 px-6 hover:bg-slate-50 transition-all group bg-white border-b border-slate-100 last:border-0 rounded-2xl mb-2">
            <div className="flex items-center gap-5 flex-1">
                {/* Icon Box */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300 ${transaction.type === 'income' ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'
                    }`}>
                    {transaction.type === 'income' ? <TrendingUp size={22} /> : <TrendingDown size={22} />}
                </div>

                <div className="flex-1">
                    <div className="flex items-center gap-3">
                        <h4 className="text-[15px] font-bold text-slate-900 tracking-tight">{transaction.title}</h4>
                    </div>

                    <div className="flex items-center flex-wrap gap-x-4 gap-y-1 mt-1">
                        <span className="text-[12px] font-medium text-slate-500">{formattedDate}</span>

                        {account && (
                            <span className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded-md text-[10px] font-bold uppercase tracking-wider">
                                {account.name}
                            </span>
                        )}

                        {category && (
                            <span
                                className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider"
                                style={{ backgroundColor: `${category.color}15`, color: category.color }}
                            >
                                {category.name}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-8">
                <div className={`text-[17px] font-black tracking-tight ${transaction.type === 'income' ? 'text-emerald-500' : 'text-rose-500'
                    }`}>
                    {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </div>

                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                        onClick={() => onEdit(transaction)}
                        className="p-2 hover:bg-indigo-50 text-slate-400 hover:text-indigo-600 rounded-xl transition-all"
                    >
                        <Edit2 size={18} />
                    </button>
                    <button
                        onClick={() => onDelete(transaction.id)}
                        className="p-2 hover:bg-rose-50 text-slate-400 hover:text-rose-600 rounded-xl transition-all"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TransactionItem;
