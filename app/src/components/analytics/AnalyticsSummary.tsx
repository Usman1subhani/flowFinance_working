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
        <div className={`p-8 rounded-[2.5rem] border border-slate-100 shadow-sm bg-white relative overflow-hidden group hover:shadow-md transition-all`}>
            {/* Background Accent */}
            <div className={`absolute top-0 right-0 w-32 h-32 ${bgColor} rounded-full -mr-16 -mt-16 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity`} />

            <div className="relative flex items-center justify-between mb-8">
                <div className={`w-12 h-12 ${bgColor} ${textColor} rounded-2xl flex items-center justify-center`}>
                    {icon}
                </div>
                {arrow}
            </div>

            <div className="relative">
                <h4 className="text-slate-500 text-[13px] font-bold uppercase tracking-widest mb-1.5">{title}</h4>
                <div className="flex items-end justify-between">
                    <span className={`text-3xl font-black ${type === 'balance' ? 'text-slate-900' : textColor} tracking-tighter`}>
                        ${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                </div>
                <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mt-2">Current period</p>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SummaryCard title="Total Income" amount={income} type="income" />
            <SummaryCard title="Total Expenses" amount={expense} type="expense" />
            <SummaryCard title="Net Balance" amount={balance} type="balance" />
        </div>
    );
};

export default AnalyticsSummary;
