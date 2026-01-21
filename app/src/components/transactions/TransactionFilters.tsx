'use client';

import React from 'react';
import { Search, ChevronDown, Filter, X } from 'lucide-react';
import { useAccounts } from '../../context/AccountContext';
import { useCategories } from '../../context/CategoryContext';

interface TransactionFiltersProps {
    onSearchChange: (value: string) => void;
    onAccountChange: (value: string) => void;
    onCategoryChange: (value: string) => void;
    onDateFromChange: (value: string) => void;
    onDateToChange: (value: string) => void;
    onMinAmountChange: (value: string) => void;
    onMaxAmountChange: (value: string) => void;
}

const TransactionFilters: React.FC<TransactionFiltersProps> = ({
    onSearchChange,
    onAccountChange,
    onCategoryChange,
    onDateFromChange,
    onDateToChange,
    onMinAmountChange,
    onMaxAmountChange,
}) => {
    const { accounts } = useAccounts();
    const { categories } = useCategories();

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm mb-8">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <Filter size={18} className="text-slate-400" />
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight">Filters</h3>
                    <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-md text-[10px] font-black uppercase tracking-wider">
                        1 Active
                    </span>
                </div>
                <button
                    onClick={() => {
                        onSearchChange('');
                        onAccountChange('all');
                        onCategoryChange('all');
                        onDateFromChange('');
                        onDateToChange('');
                        onMinAmountChange('');
                        onMaxAmountChange('');
                    }}
                    className="flex items-center gap-2 text-[11px] font-black text-slate-400 hover:text-rose-500 transition-colors uppercase tracking-widest"
                >
                    <X size={14} />
                    Clear All
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Search */}
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-slate-700 uppercase tracking-widest px-1">Search</label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search transactions..."
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="w-full pl-12 pr-6 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all"
                        />
                        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    </div>
                </div>

                {/* Account */}
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-slate-700 uppercase tracking-widest px-1">Account</label>
                    <div className="relative">
                        <select
                            onChange={(e) => onAccountChange(e.target.value)}
                            className="w-full appearance-none px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all cursor-pointer"
                        >
                            <option value="all">All Accounts</option>
                            {accounts.map((acc) => (
                                <option key={acc.id} value={acc.id}>{acc.name}</option>
                            ))}
                        </select>
                        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                </div>

                {/* Category */}
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-slate-700 uppercase tracking-widest px-1">Category</label>
                    <div className="relative">
                        <select
                            onChange={(e) => onCategoryChange(e.target.value)}
                            className="w-full appearance-none px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all cursor-pointer"
                        >
                            <option value="all">All Categories</option>
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                </div>

                {/* Attachment placeholder - matching the design image */}
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-slate-700 uppercase tracking-widest px-1">Attachment</label>
                    <div className="relative">
                        <select className="w-full appearance-none px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all cursor-pointer">
                            <option value="any">Any</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                </div>

                {/* Date From */}
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-slate-700 uppercase tracking-widest px-1">Date From</label>
                    <div className="relative">
                        <input
                            type="date"
                            onChange={(e) => onDateFromChange(e.target.value)}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all"
                        />
                    </div>
                </div>

                {/* Date To */}
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-slate-700 uppercase tracking-widest px-1">Date To</label>
                    <div className="relative">
                        <input
                            type="date"
                            onChange={(e) => onDateToChange(e.target.value)}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all"
                        />
                    </div>
                </div>

                {/* Min Amount */}
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-slate-700 uppercase tracking-widest px-1">Min Amount</label>
                    <input
                        type="number"
                        placeholder="0.00"
                        onChange={(e) => onMinAmountChange(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all"
                    />
                </div>

                {/* Max Amount */}
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-slate-700 uppercase tracking-widest px-1">Max Amount</label>
                    <input
                        type="number"
                        placeholder="0.00"
                        onChange={(e) => onMaxAmountChange(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all"
                    />
                </div>
            </div>
        </div>
    );
};

export default TransactionFilters;
