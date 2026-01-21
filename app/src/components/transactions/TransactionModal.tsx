'use client';

import React, { useState, useEffect } from 'react';
import { X, Calendar, ChevronDown, Image as ImageIcon, FileText, Repeat } from 'lucide-react';
import { useAccounts } from '../../context/AccountContext';
import { useCategories } from '../../context/CategoryContext';
import { Transaction } from '../../context/TransactionContext';

interface TransactionModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (transaction: Omit<Transaction, 'id'>) => void;
    onUpdate: (id: string, updates: Partial<Transaction>) => void;
    editingTransaction: Transaction | null;
    initialType?: 'income' | 'expense';
}

const TransactionModal: React.FC<TransactionModalProps> = ({
    isOpen,
    onClose,
    onSave,
    onUpdate,
    editingTransaction,
    initialType = 'expense',
}) => {
    const { accounts } = useAccounts();
    const { categories } = useCategories();

    const [type, setType] = useState<'income' | 'expense'>(initialType);
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [accountId, setAccountId] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [note, setNote] = useState('');
    const [recurrence, setRecurrence] = useState('None');

    useEffect(() => {
        if (editingTransaction) {
            setType(editingTransaction.type);
            setTitle(editingTransaction.title);
            setAmount(editingTransaction.amount.toString());
            setAccountId(editingTransaction.accountId);
            setCategoryId(editingTransaction.categoryId || '');
            setDate(editingTransaction.date);
            setNote(editingTransaction.note || '');
            setRecurrence(editingTransaction.recurrence || 'None');
        } else {
            setTitle('');
            setAmount('');
            setAccountId(accounts[0]?.id || '');
            setCategoryId('');
            setDate(new Date().toISOString().split('T')[0]);
            setNote('');
            setRecurrence('None');
            setType(initialType);
        }
    }, [editingTransaction, isOpen, accounts, initialType]);

    if (!isOpen) return null;

    const handleSubmit = () => {
        const txData: Omit<Transaction, 'id'> = {
            title,
            amount: parseFloat(amount) || 0,
            type,
            accountId,
            categoryId: type === 'expense' ? categoryId : undefined,
            date,
            note,
            recurrence: type === 'income' ? recurrence : undefined,
        };

        if (editingTransaction) {
            onUpdate(editingTransaction.id, txData);
        } else {
            onSave(txData);
        }
        onClose();
    };

    const isIncome = type === 'income';

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md transition-all duration-300">
            <div
                className={`bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300 border-t-8 ${isIncome ? 'border-emerald-500' : 'border-rose-500'
                    }`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="p-8 pb-4 flex items-center justify-between">
                    <div>
                        <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                            {editingTransaction ? 'Edit' : 'New'} {isIncome ? 'Income' : 'Expense'}
                        </h3>
                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">
                            {isIncome ? 'Recording Incoming Funds' : 'Recording Outgoing Funds'}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-8 space-y-5 overflow-y-auto max-h-[70vh]">
                    {/* Title Input */}
                    <div className="space-y-2">
                        <label className="text-[11px] font-black text-slate-700 uppercase tracking-widest px-1">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="e.g., Monthly salary, Grocery shopping"
                            className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 font-semibold placeholder:text-slate-300 focus:outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500 transition-all"
                        />
                    </div>

                    {/* Amount Input */}
                    <div className="space-y-2">
                        <label className="text-[11px] font-black text-slate-700 uppercase tracking-widest px-1">Amount</label>
                        <div className="relative">
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="0.00"
                                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 font-black text-2xl placeholder:text-slate-200 focus:outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500 transition-all text-slate-900"
                            />
                            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 font-bold">USD</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Account Selection */}
                        <div className="space-y-2">
                            <label className="text-[11px] font-black text-slate-700 uppercase tracking-widest px-1">Account</label>
                            <div className="relative">
                                <select
                                    value={accountId}
                                    onChange={(e) => setAccountId(e.target.value)}
                                    className="w-full appearance-none px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all cursor-pointer text-slate-900"
                                >
                                    {accounts.map((acc) => (
                                        <option key={acc.id} value={acc.id}>{acc.name}</option>
                                    ))}
                                </select>
                                <ChevronDown size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                            </div>
                        </div>

                        {/* Category (Expense) or Recurrence (Income) */}
                        <div className="space-y-2">
                            <label className="text-[11px] font-black text-slate-700 uppercase tracking-widest px-1">
                                {isIncome ? 'Recurrence' : 'Category'}
                            </label>
                            <div className="relative">
                                <select
                                    value={isIncome ? recurrence : categoryId}
                                    onChange={(e) => isIncome ? setRecurrence(e.target.value) : setCategoryId(e.target.value)}
                                    className="w-full appearance-none px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all cursor-pointer text-sm"
                                >
                                    {isIncome ? (
                                        <>
                                            <option value="None">None</option>
                                            <option value="Daily">Daily</option>
                                            <option value="Weekly">Weekly</option>
                                            <option value="Monthly">Monthly</option>
                                            <option value="Yearly">Yearly</option>
                                        </>
                                    ) : (
                                        <>
                                            <option value="" disabled>Select Category</option>
                                            {categories.map((cat) => (
                                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                                            ))}
                                        </>
                                    )}
                                </select>
                                <ChevronDown size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Date Selection */}
                    <div className="space-y-2">
                        <label className="text-[11px] font-black text-slate-700 uppercase tracking-widest px-1">Date</label>
                        <div className="relative">
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-slate-900"
                            />
                            <Calendar size={20} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        </div>
                    </div>

                    {!isIncome && (
                        <div className="space-y-2">
                            <label className="text-[11px] font-black text-slate-700 uppercase tracking-widest px-1">Photo (Optional)</label>
                            <div className="relative">
                                <label className="flex items-center gap-3 w-full px-6 py-4 bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl text-slate-500 font-bold cursor-pointer hover:bg-slate-100 hover:border-indigo-300 transition-all">
                                    <ImageIcon size={20} />
                                    <span>Choose File</span>
                                    <input type="file" className="hidden" />
                                </label>
                            </div>
                        </div>
                    )}

                    {/* Note Input */}
                    <div className="space-y-2">
                        <label className="text-[11px] font-black text-slate-700 uppercase tracking-widest px-1">Note (Optional)</label>
                        <div className="relative">
                            <textarea
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                placeholder="Add any additional details..."
                                rows={3}
                                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all resize-none text-slate-900"
                            />
                        </div>
                    </div>
                </div>

                {/* Footer Action */}
                <div className="p-8 pt-0">
                    <button
                        onClick={handleSubmit}
                        className={`w-full py-5 rounded-[1.5rem] font-bold text-[15px] uppercase tracking-widest text-white shadow-xl transition-all active:scale-[0.98] mt-4 ${isIncome
                            ? 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-200'
                            : 'bg-rose-500 hover:bg-rose-600 shadow-rose-200'
                            }`}
                    >
                        {editingTransaction ? 'Update' : 'Create'} {isIncome ? 'Income' : 'Expense'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TransactionModal;
