'use client';

import React, { useState, useMemo } from 'react';
import { ArrowLeft, Wallet, TrendingUp, TrendingDown, Clock, Search, CreditCard, ChevronDown } from 'lucide-react';
import { ClosedMonth } from '../../context/HistoryContext';
import { useCategories } from '../../context/CategoryContext';

interface HistoryDetailViewProps {
    month: ClosedMonth;
    onBack: () => void;
}

const HistoryDetailView: React.FC<HistoryDetailViewProps> = ({ month, onBack }) => {
    const [selectedAccountId, setSelectedAccountId] = useState<string | 'all'>('all');
    const { categories } = useCategories();

    // Filter transactions based on selected account
    const filteredTransactions = useMemo(() => {
        if (selectedAccountId === 'all') return month.transactions;
        return month.transactions.filter(tx => tx.accountId === selectedAccountId);
    }, [month.transactions, selectedAccountId]);

    // Calculate Summary Data
    const summary = useMemo(() => {
        return filteredTransactions.reduce((acc, tx) => {
            if (tx.type === 'income') acc.income += tx.amount;
            else acc.expense += tx.amount;
            return acc;
        }, { income: 0, expense: 0 });
    }, [filteredTransactions]);

    const balance = summary.income - summary.expense;

    // Chart Data
    const categoryData = useMemo(() => {
        const expenses = filteredTransactions.filter(tx => tx.type === 'expense');
        const grouped = expenses.reduce((acc: Record<string, number>, tx) => {
            const catId = tx.categoryId || 'unknown';
            acc[catId] = (acc[catId] || 0) + tx.amount;
            return acc;
        }, {});

        return Object.entries(grouped)
            .map(([catId, amount]) => {
                const category = categories.find(c => c.id === catId);
                return {
                    name: category?.name || 'Uncategorized',
                    value: amount,
                    color: category?.color || '#cbd5e1'
                };
            })
            .sort((a, b) => b.value - a.value);
    }, [filteredTransactions, categories]);

    const totalCategorySpent = categoryData.reduce((acc, curr) => acc + curr.value, 0);
    let cumulativePercent = 0;

    function getCoordinatesForPercent(percent: number) {
        const x = Math.cos(2 * Math.PI * percent);
        const y = Math.sin(2 * Math.PI * percent);
        return [x, y];
    }

    return (
        <div className="animate-in fade-in slide-in-from-left-4 duration-500 max-w-6xl mx-auto space-y-6 md:space-y-8 pb-20">
            {/* Top Navigation */}
            <div className="flex items-center justify-between">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-slate-400 hover:text-indigo-600 transition-all font-bold group"
                >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white border border-slate-100 group-hover:bg-indigo-50 group-hover:border-indigo-200 transition-all shadow-sm">
                        <ArrowLeft size={16} />
                    </div>
                    <span className="hidden sm:inline">Back to History</span>
                </button>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 text-amber-600 text-[10px] font-black uppercase tracking-widest rounded-full border border-amber-100 shadow-sm">
                    <Clock size={12} />
                    <span className="hidden xs:inline">Read-Only Report</span>
                    <span className="xs:hidden">Read-Only</span>
                </div>
            </div>

            {/* Header */}
            <div className="px-1">
                <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">{month.monthName}</h1>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] md:text-[11px] mt-1">{month.periodStart} — {month.periodEnd}</p>
            </div>

            {/* Account Selector (Horizontal) */}
            <div className="flex gap-3 overflow-x-auto pb-4 -mx-1 px-1 custom-scrollbar no-scrollbar touch-pan-x">
                <div
                    onClick={() => setSelectedAccountId('all')}
                    className={`min-w-[140px] md:min-w-[180px] p-4 rounded-2xl border transition-all cursor-pointer ${selectedAccountId === 'all' ? 'bg-white border-indigo-500 shadow-xl shadow-indigo-100' : 'bg-white border-slate-100 opacity-60'}`}
                >
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white shrink-0">
                            <Wallet size={16} />
                        </div>
                        <div>
                            <h4 className="text-[11px] md:text-[12px] font-bold text-slate-900">All Accounts</h4>
                            <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">{month.accounts.length} total</p>
                        </div>
                    </div>
                </div>

                {month.accounts.map(acc => (
                    <div
                        key={acc.id}
                        onClick={() => setSelectedAccountId(acc.id)}
                        className={`min-w-[140px] md:min-w-[180px] p-4 rounded-2xl border transition-all cursor-pointer ${selectedAccountId === acc.id ? 'bg-white border-indigo-500 shadow-xl shadow-indigo-100' : 'bg-white border-slate-100 opacity-60'}`}
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white shrink-0" style={{ backgroundColor: acc.color }}>
                                <CreditCard size={16} />
                            </div>
                            <div>
                                <h4 className="text-[11px] md:text-[12px] font-bold text-slate-900 truncate max-w-[80px] md:max-w-[100px]">{acc.name}</h4>
                                <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">{acc.currency}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 md:gap-5">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center shrink-0">
                        <TrendingUp size={28} />
                    </div>
                    <div>
                        <p className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-widest mb-0.5 md:mb-1">Income</p>
                        <h4 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">${summary.income.toLocaleString(undefined, { minimumFractionDigits: 2 })}</h4>
                    </div>
                </div>

                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 md:gap-5">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center shrink-0">
                        <TrendingDown size={28} />
                    </div>
                    <div>
                        <p className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-widest mb-0.5 md:mb-1">Expenses</p>
                        <h4 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">${summary.expense.toLocaleString(undefined, { minimumFractionDigits: 2 })}</h4>
                    </div>
                </div>

                <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 md:gap-5">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0">
                        <Wallet size={28} />
                    </div>
                    <div>
                        <p className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-widest mb-0.5 md:mb-1">Balance</p>
                        <h4 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">${balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}</h4>
                    </div>
                </div>
            </div>

            {/* Detailed Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
                {/* Category Breakdown */}
                <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                    <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-8">Category Breakdown</h3>
                    <div className="flex flex-col items-center gap-8 md:gap-12">
                        <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0">
                            <svg viewBox="-1 -1 2 2" className="w-full h-full -rotate-90">
                                {categoryData.map((slice, index) => {
                                    const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
                                    cumulativePercent += slice.value / totalCategorySpent;
                                    const [endX, endY] = getCoordinatesForPercent(cumulativePercent);
                                    const largeArcFlag = slice.value / totalCategorySpent > 0.5 ? 1 : 0;
                                    const pathData = [
                                        `M ${startX} ${startY}`,
                                        `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
                                        `L 0 0`,
                                    ].join(' ');

                                    return <path key={index} d={pathData} fill={slice.color} className="hover:opacity-80 transition-opacity" />;
                                })}
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 md:w-44 md:h-44 bg-white rounded-full shadow-inner flex flex-col items-center justify-center">
                                    <span className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Spent</span>
                                    <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">${totalCategorySpent.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full space-y-3">
                            {categoryData.map((slice, index) => (
                                <div key={index} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-xl transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: slice.color }} />
                                        <span className="text-xs md:text-sm font-bold text-slate-600">{slice.name}</span>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs md:text-sm font-black text-slate-900 tracking-tight">${slice.value.toLocaleString()}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* All Transactions */}
                <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">All Transactions</h3>
                        <span className="bg-slate-50 text-slate-400 text-[10px] font-black px-2 py-1 rounded-md uppercase">
                            {filteredTransactions.length} Items
                        </span>
                    </div>

                    <div className="flex-1 space-y-4 overflow-y-auto pr-1 md:pr-2 custom-scrollbar max-h-[500px] md:max-h-[600px]">
                        {filteredTransactions.map(tx => (
                            <div key={tx.id} className="p-4 rounded-2xl border border-slate-50 hover:border-slate-100 bg-slate-50/30 transition-all flex items-center justify-between group">
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center ${tx.type === 'income' ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'} shadow-lg shadow-opacity-10 group-hover:scale-110 transition-transform`}>
                                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            {tx.type === 'income' ? (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                            ) : (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                            )}
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-[13px] md:text-[14px] font-bold text-slate-900 tracking-tight leading-tight">{tx.title}</h4>
                                        <p className="text-[10px] md:text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">
                                            {categories.find(c => c.id === tx.categoryId)?.name || 'General'}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right shrink-0">
                                    <p className={`text-[14px] md:text-[15px] font-black tracking-tight ${tx.type === 'income' ? 'text-emerald-500' : 'text-rose-500'}`}>
                                        {tx.type === 'income' ? '+' : '−'}${tx.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                                    </p>
                                    <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                                        {month.accounts.find(a => a.id === tx.accountId)?.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                        {filteredTransactions.length === 0 && (
                            <div className="flex flex-col items-center justify-center py-20 text-center">
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-200 mb-4">
                                    <Search size={32} />
                                </div>
                                <h4 className="text-slate-900 font-bold">No transactions</h4>
                                <p className="text-slate-500 text-xs mt-1">No activity recorded for this account.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryDetailView;
