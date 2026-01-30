'use client';

import React, { useState } from 'react';
import { X, Calendar, DollarSign, TrendingUp, Briefcase } from 'lucide-react';

interface AddInvestmentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (investment: {
        type: 'stock' | 'mutual_fund';
        name: string;
        amount: number;
        date: string;
        note?: string;
    }) => void;
}

const AddInvestmentModal: React.FC<AddInvestmentModalProps> = ({
    isOpen,
    onClose,
    onAdd,
}) => {
    const [type, setType] = useState<'stock' | 'mutual_fund'>('stock');
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [note, setNote] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAdd({
            type,
            name,
            amount: parseFloat(amount),
            date,
            note,
        });
        // Reset form
        setType('stock');
        setName('');
        setAmount('');
        setDate(new Date().toISOString().split('T')[0]);
        setNote('');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl ring-1 ring-slate-100">
                <div className="flex items-center justify-between p-6 border-b border-slate-100">
                    <h2 className="text-xl font-bold text-slate-900">Add Investment</h2>
                    <button
                        onClick={onClose}
                        className="p-2 transition-colors rounded-full hover:bg-slate-50 text-slate-400 hover:text-slate-600"
                    >
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    {/* Investment Type Selection */}
                    <div className="grid grid-cols-2 gap-3 p-1 rounded-xl bg-slate-50 border border-slate-100">
                        <button
                            type="button"
                            onClick={() => setType('stock')}
                            className={`flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${type === 'stock'
                                ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200'
                                : 'text-slate-500 hover:text-slate-700'
                                }`}
                        >
                            <TrendingUp size={18} />
                            Stocks
                        </button>
                        <button
                            type="button"
                            onClick={() => setType('mutual_fund')}
                            className={`flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${type === 'mutual_fund'
                                ? 'bg-white text-violet-600 shadow-sm ring-1 ring-slate-200'
                                : 'text-slate-500 hover:text-slate-700'
                                }`}
                        >
                            <Briefcase size={18} />
                            Mutual Funds
                        </button>
                    </div>

                    {/* Investment Name */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1">
                            Name
                        </label>
                        <input
                            required
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder={type === 'stock' ? "e.g. Apple Inc." : "e.g. Vanguard S&P 500"}
                            className="w-full px-4 py-3 font-medium transition-all border-2 outline-none text-slate-900 rounded-xl bg-slate-50 border-slate-100 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 placeholder:text-slate-400"
                        />
                    </div>

                    {/* Amount */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1">
                            Amount Invested
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                                <DollarSign size={20} strokeWidth={2.5} />
                            </div>
                            <input
                                required
                                type="number"
                                min="0"
                                step="0.01"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="0.00"
                                className="w-full pl-11 pr-4 py-3 font-medium transition-all border-2 outline-none text-slate-900 rounded-xl bg-slate-50 border-slate-100 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 placeholder:text-slate-400"
                            />
                        </div>
                    </div>

                    {/* Date */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1">
                            Investment Date
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                                <Calendar size={20} />
                            </div>
                            <input
                                required
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 font-medium transition-all border-2 outline-none text-slate-900 rounded-xl bg-slate-50 border-slate-100 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                            />
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-3 text-sm font-bold transition-colors border-2 rounded-xl text-slate-600 border-slate-100 hover:bg-slate-50 hover:text-slate-800"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-4 py-3 text-sm font-bold text-white transition-all shadow-lg rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:shadow-indigo-500/25 hover:from-indigo-700 hover:to-violet-700 active:scale-[0.98]"
                        >
                            Add Investment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddInvestmentModal;
