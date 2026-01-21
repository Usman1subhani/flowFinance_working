'use client';

import React, { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { useAccounts } from '../../context/AccountContext';

interface NewAccountModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const colors = [
    '#6366f1', // Indigo
    '#8b5cf6', // Violet
    '#ec4899', // Pink
    '#f43f5e', // Rose
    '#f59e0b', // Amber
    '#10b981', // Emerald
    '#06b6d4', // Cyan
    '#3b82f6', // Blue
];

const NewAccountModal: React.FC<NewAccountModalProps> = ({ isOpen, onClose }) => {
    const { addAccount } = useAccounts();
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [name, setName] = useState('');
    const [currency, setCurrency] = useState('USD');
    const [startingBalance, setStartingBalance] = useState('0');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) return;

        addAccount({
            name,
            currency,
            startingBalance: `$${parseFloat(startingBalance).toLocaleString()}`,
            color: selectedColor,
        });

        // Reset and Close
        setName('');
        setStartingBalance('0');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-all duration-300">
            <div
                className="bg-white w-full max-w-lg rounded-2xl shadow-xl shadow-indigo-200/20 overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="p-6 md:p-8 pb-4 flex items-center justify-between">
                    <h3 className="heading-2">New Account</h3>
                    <button
                        onClick={onClose}
                        className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Form Content */}
                <form onSubmit={handleSubmit} className="px-6 md:px-8 pb-8 space-y-5">
                    <div className="space-y-2">
                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">Account Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g., Personal, Business"
                            className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-xl text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-sm"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">Currency</label>
                            <div className="relative">
                                <select
                                    value={currency}
                                    onChange={(e) => setCurrency(e.target.value)}
                                    className="w-full appearance-none px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-xl text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all cursor-pointer text-sm"
                                >
                                    <option>USD</option>
                                    <option>EUR</option>
                                    <option>GBP</option>
                                    <option>PKR</option>
                                </select>
                                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">Starting Balance</label>
                            <input
                                type="number"
                                value={startingBalance}
                                onChange={(e) => setStartingBalance(e.target.value)}
                                placeholder="0"
                                className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-xl text-slate-900 font-semibold text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-3 pb-2">
                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">Color Theme</label>
                        <div className="flex flex-wrap gap-2.5">
                            {colors.map((color) => (
                                <button
                                    key={color}
                                    type="button"
                                    onClick={() => setSelectedColor(color)}
                                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${selectedColor === color ? 'ring-2 ring-offset-2 ring-indigo-500 scale-105' : 'hover:scale-105'
                                        }`}
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn-primary w-full py-4 rounded-xl text-sm font-semibold tracking-normal mt-2"
                    >
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewAccountModal;
