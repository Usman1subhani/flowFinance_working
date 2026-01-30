import React, { useState } from 'react';
import { useTransactions, Transaction } from '../../context/TransactionContext';
import { Check, Trash2, ArrowRight } from 'lucide-react';
import { useAccounts } from '../../context/AccountContext';
import { useCategories } from '../../context/CategoryContext';

const FutureTransactionList = () => {
    const { futureTransactions, removeFutureTransaction, submitFutureTransactions } = useTransactions();
    const { accounts } = useAccounts();
    const { categories } = useCategories();

    // Manage selection
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    const toggleSelection = (id: string) => {
        setSelectedIds(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    const handleSubmit = () => {
        if (selectedIds.length === 0) return;
        submitFutureTransactions(selectedIds);
        setSelectedIds([]);
    };

    const getAccountName = (id: string) => accounts.find(a => a.id === id)?.name || 'Unknown';
    const getCategoryName = (id?: string) => categories.find(c => c.id === id)?.name || 'Uncategorized';

    if (futureTransactions.length === 0) {
        return (
            <div className="text-center py-10">
                <p className="text-slate-400 font-medium">No future transactions yet.</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Drafts ({futureTransactions.length})</h4>
                {selectedIds.length > 0 && (
                    <button
                        onClick={() => setSelectedIds([])}
                        className="text-xs font-bold text-indigo-500 hover:text-indigo-600"
                    >
                        Deselect All
                    </button>
                )}
            </div>

            <div className="space-y-3">
                {futureTransactions.map((tx) => {
                    const isSelected = selectedIds.includes(tx.id);
                    return (
                        <div
                            key={tx.id}
                            className={`relative p-4 rounded-2xl border transition-all cursor-pointer group ${isSelected
                                    ? 'bg-indigo-50 border-indigo-200'
                                    : 'bg-white border-slate-100 hover:border-indigo-100'
                                }`}
                            onClick={() => toggleSelection(tx.id)}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-3">
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${isSelected
                                            ? 'bg-indigo-500 border-indigo-500'
                                            : 'border-slate-300'
                                        }`}>
                                        {isSelected && <Check size={12} className="text-white" />}
                                    </div>
                                    <h5 className="font-bold text-slate-800">{tx.title}</h5>
                                </div>
                                <span className={`font-black ${tx.type === 'income' ? 'text-emerald-500' : 'text-rose-500'}`}>
                                    {tx.type === 'income' ? '+' : '-'}${tx.amount.toLocaleString()}
                                </span>
                            </div>

                            <div className="flex items-center justify-between text-xs text-slate-500 pl-8">
                                <div className="flex gap-2">
                                    <span className="bg-slate-100 px-2 py-1 rounded-md font-semibold text-slate-600">
                                        {getAccountName(tx.accountId)}
                                    </span>
                                    {tx.type === 'expense' && tx.categoryId && (
                                        <span className="bg-slate-100 px-2 py-1 rounded-md font-semibold text-slate-600">
                                            {getCategoryName(tx.categoryId)}
                                        </span>
                                    )}
                                </div>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeFutureTransaction(tx.id);
                                    }}
                                    className="p-1 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                                >
                                    <Trash2 size={14} />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {selectedIds.length > 0 && (
                <div className="fixed bottom-0 px-6 py-4 bg-white border-t border-slate-100 w-full left-0 z-10">
                    <button
                        onClick={handleSubmit}
                        className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
                    >
                        <span>Submit {selectedIds.length} Transaction{selectedIds.length > 1 ? 's' : ''}</span>
                        <ArrowRight size={18} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default FutureTransactionList;
