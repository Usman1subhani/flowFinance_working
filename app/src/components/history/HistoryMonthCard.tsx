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
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-2xl font-black text-slate-800 tracking-tight">{month.monthName}</h3>
                    <p className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">{month.periodStart} - {month.periodEnd}</p>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => onViewDetail(month.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-all text-sm font-bold shadow-sm"
                    >
                        <Eye size={16} />
                        View Details
                    </button>
                    <button
                        onClick={() => onDelete(month.id)}
                        className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 border border-slate-100 rounded-xl transition-all shadow-sm"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
            </div>

            {/* Summary Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-emerald-50/50 p-6 rounded-3xl border border-emerald-100 flex items-center justify-between">
                    <div>
                        <p className="text-[12px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Total Income</p>
                        <h4 className="text-2xl font-black text-emerald-700">${month.totals.income.toLocaleString()}</h4>
                    </div>
                    <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                        <TrendingUp size={24} />
                    </div>
                </div>

                <div className="bg-rose-50/50 p-6 rounded-3xl border border-rose-100 flex items-center justify-between">
                    <div>
                        <p className="text-[12px] font-bold text-rose-500 uppercase tracking-widest mb-1">Total Expenses</p>
                        <h4 className="text-2xl font-black text-rose-700">${month.totals.expenses.toLocaleString()}</h4>
                    </div>
                    <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-500">
                        <TrendingDown size={24} />
                    </div>
                </div>

                <div className="bg-indigo-50/50 p-6 rounded-3xl border border-indigo-100 flex items-center justify-between">
                    <div>
                        <p className="text-[12px] font-bold text-indigo-500 uppercase tracking-widest mb-1">Net Balance</p>
                        <h4 className="text-2xl font-black text-indigo-700">${month.totals.net.toLocaleString()}</h4>
                    </div>
                    <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
                        <Wallet size={24} />
                    </div>
                </div>
            </div>

            {/* Account Grid */}
            <div>
                <h5 className="text-[14px] font-black text-slate-700 uppercase tracking-widest mb-4">Accounts</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {month.accounts.map((acc, idx) => (
                        <HistoryAccountCard key={acc.id + idx} {...acc} />
                    ))}
                </div>
            </div>

            <div className="h-px bg-slate-100 !mt-12"></div>
        </div>
    );
};

export default HistoryMonthCard;
