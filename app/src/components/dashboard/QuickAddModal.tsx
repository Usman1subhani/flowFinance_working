import React, { useState } from 'react';
import { X, Calendar, ChevronDown } from 'lucide-react';
import { useAccounts } from '../../context/AccountContext';
import { useCategories } from '../../context/CategoryContext';
import { useTransactions } from '../../context/TransactionContext';

interface QuickAddModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const QuickAddModal: React.FC<QuickAddModalProps> = ({ isOpen, onClose }) => {
    const { accounts } = useAccounts();
    const { categories } = useCategories();
    const { addTransaction } = useTransactions();

    const [activeTab, setActiveTab] = useState<'expense' | 'income'>('expense');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [accountId, setAccountId] = useState(accounts[0]?.id || '');
    const [categoryId, setCategoryId] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

    if (!isOpen) return null;

    const handleAdd = () => {
        addTransaction({
            title,
            amount: parseFloat(amount) || 0,
            type: activeTab,
            accountId,
            categoryId: activeTab === 'expense' ? categoryId : undefined,
            date,
        });

        // Reset and close
        setTitle('');
        setAmount('');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-all duration-300">
            <div
                className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl shadow-indigo-200/50 overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="p-8 pb-4 flex items-center justify-between">
                    <h3 className="text-[18px] font-bold text-slate-900">Quick Add Transaction</h3>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Tabs */}
                <div className="px-8 mb-4">
                    <div className="bg-slate-50 p-1.5 rounded-2xl flex gap-1">
                        <button
                            onClick={() => setActiveTab('expense')}
                            className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all ${activeTab === 'expense'
                                ? 'bg-white text-slate-900 shadow-sm'
                                : 'text-slate-500 hover:text-slate-700'
                                }`}
                        >
                            Expense
                        </button>
                        <button
                            onClick={() => setActiveTab('income')}
                            className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all ${activeTab === 'income'
                                ? 'bg-white text-slate-900 shadow-sm'
                                : 'text-slate-500 hover:text-slate-700'
                                }`}
                        >
                            Income
                        </button>
                    </div>
                </div>

                {/* Form Content */}
                <div className="px-8 pb-8 space-y-2">
                    <div className="space-y-2">
                        <label className="text-[12px] font-bold text-slate-900 uppercase tracking-wider px-1">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="e.g., Grocery shopping"
                            className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[12px] font-bold text-slate-900 uppercase tracking-wider px-1">Amount</label>
                        <div className="relative">
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="0.00"
                                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 font-bold text-[15px] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-[12px] font-bold text-slate-900 uppercase tracking-wider px-1">Account</label>
                            <div className="relative">
                                <select
                                    value={accountId}
                                    onChange={(e) => setAccountId(e.target.value)}
                                    className="w-full appearance-none px-6 py-4 bg-slate-50 border border-slate-100 text-[13px] rounded-2xl text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all cursor-pointer text-slate-900"
                                >
                                    {accounts.map((account) => (
                                        <option key={account.id} value={account.id}>
                                            {account.name}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                            </div>
                        </div>

                        {activeTab === 'expense' && (
                            <div className="space-y-2">
                                <label className="text-[12px] font-bold text-slate-900 uppercase tracking-wider px-1">Category</label>
                                <div className="relative">
                                    <select
                                        value={categoryId}
                                        onChange={(e) => setCategoryId(e.target.value)}
                                        className="w-full appearance-none px-6 py-4 bg-slate-50 border border-slate-100 text-[13px] rounded-2xl text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all cursor-pointer text-slate-900"
                                    >
                                        <option value="" disabled>Select Category</option>
                                        {categories.map((category) => (
                                            <option key={category.id} value={category.id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="text-[12px] font-bold text-slate-900 uppercase tracking-wider px-1">Date</label>
                        <div className="relative">
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full px-12 py-4 bg-slate-50 border text-[15px] border-slate-100 rounded-2xl text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900"
                            />
                            <Calendar size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        </div>
                    </div>

                    <button
                        onClick={handleAdd}
                        className="w-full py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-[1rem] font-black text-[13px] uppercase tracking-widest hover:opacity-90 active:scale-[0.98] transition-all shadow-xl shadow-indigo-100 mt-3"
                    >
                        Add {activeTab === 'expense' ? 'Expense' : 'Income'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuickAddModal;
