'use client';

import React from 'react';
import { TrendingUp, TrendingDown, Wallet } from 'lucide-react';

interface SummaryCardProps {
    title: string;
    amount: number;
    type: 'income' | 'expense' | 'balance';
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, amount, type }) => {
    const isIncome = type === 'income';
    const isExpense = type === 'expense';

    let bgColor = 'bg-indigo-50/50';
    let textColor = 'text-indigo-600';
    let dotColor = 'bg-indigo-500';
    let icon = <Wallet size={20} />;
    let arrow = null;

    if (isIncome) {
        bgColor = 'bg-emerald-50/50';
        textColor = 'text-emerald-500';
        dotColor = 'bg-emerald-500';
        icon = <TrendingUp size={20} />;
        arrow = <TrendingUp size={16} className="text-emerald-500" />;
    } else if (isExpense) {
        bgColor = 'bg-rose-50/50';
        textColor = 'text-rose-500';
        dotColor = 'bg-rose-500';
        icon = <TrendingDown size={20} />;
        arrow = <TrendingDown size={16} className="text-rose-500" />;
    }

    return (
        <div className={`p-6 rounded-[1rem] border border-slate-200 shadow-sm bg-white relative overflow-hidden group hover:shadow-md transition-all`}>
            {/* Background Accent */}
            <div className={`absolute top-0 right-0 w-24 h-24 ${bgColor} rounded-full -mr-12 -mt-12 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity`} />

            <div className="relative flex items-center justify-between mb-2">
                <div className={`w-11 h-11 ${bgColor} ${textColor} rounded-2xl flex items-center justify-center`}>
                    {React.cloneElement(icon as React.ReactElement<{ size?: number }>, { size: 18 })}
                </div>
                {arrow}
            </div>

            <div className="relative">
                <h4 className="text-slate-500 text-[12px] font-bold uppercase tracking-widest mb-1">{title}</h4>
                <div className="flex items-end justify-between">
                    <span className={`text-[24px] font-black ${type === 'balance' ? 'text-slate-900' : textColor} tracking-tight leading-none`}>
                        ${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                </div>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-2 opacity-60">Current period</p>
            </div>
        </div>
    );
};

interface AnalyticsSummaryProps {
    income: number;
    expense: number;
    balance: number;
}

const AnalyticsSummary: React.FC<AnalyticsSummaryProps> = ({ income, expense, balance }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <SummaryCard title="Total Income" amount={income} type="income" />
            <SummaryCard title="Total Expenses" amount={expense} type="expense" />
            <SummaryCard title="Net Balance" amount={balance} type="balance" />
        </div>
    );
};

export default AnalyticsSummary;
