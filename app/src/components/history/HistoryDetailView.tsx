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
        <div className="animate-in fade-in slide-in-from-left-4 duration-500 max-w-7xl mx-auto space-y-8 pb-20">
            {/* Top Navigation */}
            <button
                onClick={onBack}
                className="flex items-center gap-2 text-slate-400 hover:text-indigo-600 transition-all font-bold group"
            >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white border border-slate-100 group-hover:bg-indigo-50 group-hover:border-indigo-200 transition-all shadow-sm">
                    <ArrowLeft size={16} />
                </div>
                Back to History
            </button>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-slate-800 tracking-tight">{month.monthName}</h1>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-[12px] mt-1">{month.periodStart} - {month.periodEnd}</p>
                    <div className="flex items-center gap-2 mt-4">
                        <span className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-600 text-[10px] font-black uppercase tracking-widest rounded-full border border-amber-100 shadow-sm">
                            <Clock size={12} />
                            Viewing Past Month (Read-Only)
                        </span>
                    </div>
                </div>
            </div>

            {/* Account Selector (Horizontal) */}
            <div className="flex gap-4 overflow-x-auto pb-4 -mx-1 px-1 custom-scrollbar">
                <div
                    onClick={() => setSelectedAccountId('all')}
                    className={`min-w-[180px] p-4 rounded-2xl border transition-all cursor-pointer ${selectedAccountId === 'all' ? 'bg-white border-indigo-500 shadow-lg' : 'bg-white border-slate-100 hover:border-slate-200 opacity-60'}`}
                >
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                            <Wallet size={16} />
                        </div>
                        <div>
                            <h4 className="text-[12px] font-bold text-slate-700">All Accounts</h4>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{month.accounts.length} accounts</p>
                        </div>
                    </div>
                </div>

                {month.accounts.map(acc => (
                    <div
                        key={acc.id}
                        onClick={() => setSelectedAccountId(acc.id)}
                        className={`min-w-[180px] p-4 rounded-2xl border transition-all cursor-pointer ${selectedAccountId === acc.id ? 'bg-white border-indigo-500 shadow-lg' : 'bg-white border-slate-100 hover:border-slate-200 opacity-60'}`}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: acc.color }}>
                                <CreditCard size={16} />
                            </div>
                            <div>
                                <h4 className="text-[12px] font-bold text-slate-700 truncate max-w-[100px]">{acc.name}</h4>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{acc.currency}</p>
                            </div>
                        </div>
                        {acc.carriedForward && (
                            <div className="mt-1">
                                <span className="text-[8px] font-black bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded border border-emerald-100 uppercase tracking-widest">Carried Forward</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-[0.6rem] border border-slate-100 shadow-sm flex items-center gap-5">
                    <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                        <TrendingUp size={28} />
                    </div>
                    <div>
                        <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Income</p>
                        <h4 className="text-2xl font-black text-slate-900">${summary.income.toLocaleString(undefined, { minimumFractionDigits: 2 })}</h4>
                        <p className="text-[10px] text-slate-400 font-medium">{filteredTransactions.filter(tx => tx.type === 'income').length} transactions</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-[0.6rem] border border-slate-100 shadow-sm flex items-center gap-5">
                    <div className="w-14 h-14 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center">
                        <TrendingDown size={28} />
                    </div>
                    <div>
                        <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Expenses</p>
                        <h4 className="text-2xl font-black text-slate-900">${summary.expense.toLocaleString(undefined, { minimumFractionDigits: 2 })}</h4>
                        <p className="text-[10px] text-slate-400 font-medium">{filteredTransactions.filter(tx => tx.type === 'expense').length} transactions</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-[0.6rem] border border-slate-100 shadow-sm flex items-center gap-5">
                    <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
                        <Wallet size={28} />
                    </div>
                    <div>
                        <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">Net Balance</p>
                        <h4 className="text-2xl font-black text-slate-900">${balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}</h4>
                        <p className="text-[10px] text-slate-400 font-medium">For {selectedAccountId === 'all' ? 'All Accounts' : month.accounts.find(a => a.id === selectedAccountId)?.name}</p>
                    </div>
                </div>
            </div>

            {/* Detailed Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Category Breakdown */}
                <div className="bg-white p-8 rounded-[0.6rem] border border-slate-100 shadow-sm">
                    <h3 className="text-xl font-black text-slate-900 mb-8 uppercase tracking-tight">Category Breakdown</h3>
                    <div className="flex flex-col items-center gap-12">
                        {/* SVG Pie Chart reused logic */}
                        <div className="relative w-64 h-64 shrink-0">
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
                                <div className="w-44 h-44 bg-white rounded-full shadow-inner flex flex-col items-center justify-center">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Spent</span>
                                    <span className="text-2xl font-black text-slate-900">${totalCategorySpent.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>

                        {/* Legend */}
                        <div className="w-full space-y-4">
                            {categoryData.map((slice, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: slice.color }} />
                                        <span className="text-sm font-bold text-slate-500">{slice.name}</span>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-black text-slate-900">${slice.value.toLocaleString()}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* All Transactions */}
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col">
                    <h3 className="text-xl font-black text-slate-900 mb-8 uppercase tracking-tight">All Transactions</h3>

                    <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar max-h-[600px]">
                        {filteredTransactions.map(tx => (
                            <div key={tx.id} className="p-4 rounded-2xl border border-slate-50 hover:border-slate-100 transition-all flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${tx.type === 'income' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-500'}`}>
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            {tx.type === 'income' ? (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                            ) : (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                            )}
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-[14px] font-bold text-slate-800">{tx.title}</h4>
                                        <p className="text-[11px] text-slate-400 font-medium">
                                            {tx.date} • {categories.find(c => c.id === tx.categoryId)?.name || 'Uncategorized'}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className={`text-[15px] font-black ${tx.type === 'income' ? 'text-emerald-600' : 'text-rose-500'}`}>
                                        {tx.type === 'income' ? '+' : '-'}${tx.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                                    </p>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                                        {month.accounts.find(a => a.id === tx.accountId)?.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                        {filteredTransactions.length === 0 && (
                            <div className="flex flex-col items-center justify-center py-20">
                                <Search className="text-slate-100 mb-4" size={48} />
                                <p className="text-slate-400 font-medium">No transactions found</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryDetailView;
