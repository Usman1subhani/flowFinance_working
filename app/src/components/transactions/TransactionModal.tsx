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
    const [attachment, setAttachment] = useState<string | null>(null);

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
            setAttachment(editingTransaction.attachment || null);
        } else {
            setTitle('');
            setAmount('');
            setAccountId(accounts[0]?.id || '');
            setCategoryId('');
            setDate(new Date().toISOString().split('T')[0]);
            setNote('');
            setRecurrence('None');
            setAttachment(null);
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
            attachment: attachment || undefined,
        };

        if (editingTransaction) {
            onUpdate(editingTransaction.id, txData);
        } else {
            onSave(txData);
        }
        onClose();
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAttachment(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const isIncome = type === 'income';

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md transition-all duration-300">
            <div
                className={`bg-white w-[90%] h-[90%] max-w-lg rounded-[1.5rem] shadow-2xl overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300 border-t-8 flex flex-col ${isIncome ? 'border-emerald-500' : 'border-rose-500'
                    }`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="p-6 pb-4 flex items-center justify-between border-b border-slate-50">
                    <div>
                        <h3 className="text-xl font-black text-slate-900 tracking-tight">
                            {editingTransaction ? 'Edit' : 'New'} {isIncome ? 'Income' : 'Expense'}
                        </h3>
                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-0.5">
                            {isIncome ? 'Recording Incoming Funds' : 'Recording Outgoing Funds'}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                    {/* Title Input */}
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="e.g., Monthly salary, Grocery shopping"
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-slate-900 font-semibold placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-sm"
                        />
                    </div>

                    {/* Amount Input */}
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">Amount</label>
                        <div className="relative">
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="0.00"
                                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-10 rounded-xl text-slate-900 font-black text-sm placeholder:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xs uppercase tracking-wider">USD</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Account Selection */}
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">Account</label>
                            <div className="relative">
                                <select
                                    value={accountId}
                                    onChange={(e) => setAccountId(e.target.value)}
                                    className="w-full appearance-none px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all cursor-pointer text-sm"
                                >
                                    {accounts.map((acc) => (
                                        <option key={acc.id} value={acc.id}>{acc.name}</option>
                                    ))}
                                </select>
                                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                            </div>
                        </div>

                        {/* Category (Expense) or Recurrence (Income) */}
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">
                                {isIncome ? 'Recurrence' : 'Category'}
                            </label>
                            <div className="relative">
                                <select
                                    value={isIncome ? recurrence : categoryId}
                                    onChange={(e) => isIncome ? setRecurrence(e.target.value) : setCategoryId(e.target.value)}
                                    className="w-full appearance-none px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all cursor-pointer text-sm"
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
                                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Date Selection */}
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">Date</label>
                        <div className="relative">
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full pl-12 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-sm"
                            />
                            <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">Attachment (Optional)</label>
                        <div className="space-y-3">
                            {attachment ? (
                                <div className="relative group/img w-full h-32 rounded-xl overflow-hidden border border-slate-100 bg-slate-50">
                                    <img src={attachment} alt="Attachment" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                        <button
                                            type="button"
                                            onClick={() => setAttachment(null)}
                                            className="p-2 bg-rose-500 text-white rounded-lg hover:scale-110 transition-transform"
                                        >
                                            <X size={16} />
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <label className="flex items-center gap-3 w-full px-4 py-3 bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl text-slate-500 font-bold cursor-pointer hover:bg-slate-100 hover:border-indigo-300 transition-all text-xs">
                                    <ImageIcon size={18} />
                                    <span>Add an image for this transaction</span>
                                    <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                                </label>
                            )}
                        </div>
                    </div>

                    {/* Note Input */}
                    <div className="space-y-1.5 pb-2">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">Note (Optional)</label>
                        <textarea
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            placeholder="Add any additional details..."
                            rows={2}
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all resize-none text-sm"
                        />
                    </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 bg-slate-50/50 border-t border-slate-100">
                    <button
                        onClick={handleSubmit}
                        className={`w-full py-3.5 rounded-xl font-black text-[13px] uppercase tracking-widest text-white shadow-xl transition-all active:scale-[0.98] ${isIncome
                            ? 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/20'
                            : 'bg-rose-500 hover:bg-rose-600 shadow-rose-500/20'
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
