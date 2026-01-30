import React, { useState } from 'react';
import { useAccounts } from '../../context/AccountContext';
import { useCategories } from '../../context/CategoryContext';
import { useTransactions } from '../../context/TransactionContext';
import { ChevronDown, Calendar } from 'lucide-react';

const FutureTransactionForm = () => {
    const { accounts } = useAccounts();
    const { categories } = useCategories();
    const { addFutureTransaction } = useTransactions();

    const [activeTab, setActiveTab] = useState<'expense' | 'income'>('expense');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [accountId, setAccountId] = useState(accounts[0]?.id || '');
    const [categoryId, setCategoryId] = useState('');

    const handleAdd = () => {
        if (!title || !amount) return;

        addFutureTransaction({
            title,
            amount: parseFloat(amount) || 0,
            type: activeTab,
            accountId,
            categoryId: activeTab === 'expense' ? categoryId : undefined,
            date: 'Future',
        });

        // Reset fields
        setTitle('');
        setAmount('');
        // Keep account/category as convenient defaults or reset them if preferred
    };

    return (
        <div className="space-y-6">
            {/* Tabs */}
            <div className="bg-slate-100 p-1 rounded-xl flex">
                <button
                    onClick={() => setActiveTab('expense')}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-bold transition-all ${activeTab === 'expense'
                            ? 'bg-white text-rose-600 shadow-sm'
                            : 'text-slate-500 hover:text-slate-700'
                        }`}
                >
                    Expense
                </button>
                <button
                    onClick={() => setActiveTab('income')}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-bold transition-all ${activeTab === 'income'
                            ? 'bg-white text-emerald-600 shadow-sm'
                            : 'text-slate-500 hover:text-slate-700'
                        }`}
                >
                    Income
                </button>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
                <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g. Future Rent"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-medium"
                    />
                </div>

                <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.00"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-bold"
                    />
                </div>

                <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Account</label>
                    <div className="relative">
                        <select
                            value={accountId}
                            onChange={(e) => setAccountId(e.target.value)}
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all appearance-none font-medium"
                        >
                            {accounts.map((acc) => (
                                <option key={acc.id} value={acc.id}>{acc.name}</option>
                            ))}
                        </select>
                        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                </div>

                {activeTab === 'expense' && (
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Category</label>
                        <div className="relative">
                            <select
                                value={categoryId}
                                onChange={(e) => setCategoryId(e.target.value)}
                                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all appearance-none font-medium"
                            >
                                <option value="" disabled>Select Category</option>
                                {categories.map((cat) => (
                                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                                ))}
                            </select>
                            <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        </div>
                    </div>
                )}
            </div>

            {/* Action Button */}
            <button
                onClick={handleAdd}
                className={`w-full py-4 rounded-xl font-bold text-white shadow-lg shadow-indigo-200 transition-all hover:opacity-90 active:scale-[0.98] ${activeTab === 'expense'
                        ? 'bg-gradient-to-r from-rose-500 to-pink-600'
                        : 'bg-gradient-to-r from-emerald-500 to-teal-600'
                    }`}
            >
                Add to Future List
            </button>
        </div>
    );
};

export default FutureTransactionForm;
