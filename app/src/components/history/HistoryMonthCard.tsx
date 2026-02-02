'use client';

import React from 'react';
import { Eye, Trash2, TrendingUp, TrendingDown, Wallet } from 'lucide-react';
import { ClosedMonth } from '../../context/HistoryContext';
import HistoryAccountCard from './HistoryAccountCard';

interface HistoryMonthCardProps {
    month: ClosedMonth;
    onViewDetail: (id: string) => void;
    onDelete: (id: string) => void;
}

const HistoryMonthCard: React.FC<HistoryMonthCardProps> = ({ month, onViewDetail, onDelete }) => {
    return (
        <div className="space-y-6 md:space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">{month.monthName}</h3>
                    <p className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-widest mt-0.5">{month.periodStart} — {month.periodEnd}</p>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => onViewDetail(month.id)}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all text-xs font-black uppercase tracking-widest shadow-lg shadow-indigo-100 active:scale-95"
                    >
                        <Eye size={14} strokeWidth={3} />
                        View Report
                    </button>
                    <button
                        onClick={() => onDelete(month.id)}
                        className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 border border-slate-100 rounded-xl transition-all"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
            </div>

            {/* Summary Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6">
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-100 flex items-center justify-between group hover:border-emerald-200 transition-colors">
                    <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Income</p>
                        <h4 className="text-lg md:text-xl font-black text-emerald-500 tracking-tight">${month.totals.income.toLocaleString()}</h4>
                    </div>
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-50 text-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <TrendingUp size={24} />
                    </div>
                </div>

                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-100 flex items-center justify-between group hover:border-rose-200 transition-colors">
                    <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Expenses</p>
                        <h4 className="text-lg md:text-xl font-black text-rose-500 tracking-tight">${month.totals.expenses.toLocaleString()}</h4>
                    </div>
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-rose-50 text-rose-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <TrendingDown size={24} />
                    </div>
                </div>

                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-100 flex items-center justify-between group hover:border-indigo-200 transition-colors">
                    <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Net Balance</p>
                        <h4 className="text-lg md:text-xl font-black text-indigo-500 tracking-tight">${month.totals.net.toLocaleString()}</h4>
                    </div>
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-50 text-indigo-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Wallet size={24} />
                    </div>
                </div>
            </div>

            {/* Account Grid */}
            <div>
                <h5 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4 px-1">Detailed Accounts</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {month.accounts.map((acc, idx) => (
                        <HistoryAccountCard key={acc.id + idx} {...acc} />
                    ))}
                </div>
            </div>

            <div className="h-px bg-slate-100 !mt-12 opacity-50"></div>
        </div>
    );
};

export default HistoryMonthCard;
