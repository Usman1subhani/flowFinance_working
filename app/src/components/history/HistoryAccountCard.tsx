'use client';

import React from 'react';
import { HistoryAccount } from '../../context/HistoryContext';

const HistoryAccountCard: React.FC<HistoryAccount> = ({
    name,
    startingBalance,
    endingBalance,
    currency,
    color,
    carriedForward
}) => {
    // Utility to parse and format change
    const parseAmount = (val: string) => {
        const num = parseFloat(val.replace(/[$,]/g, '').replace(/RS|Rs/i, '').trim());
        return isNaN(num) ? 0 : num;
    };

    const start = parseAmount(startingBalance);
    const end = parseAmount(endingBalance);
    const change = end - start;
    const isPositive = change >= 0;

    return (
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-sm" style={{ backgroundColor: color }}>
                        <span className="font-bold text-lg">{name.charAt(0)}</span>
                    </div>
                    <div>
                        <h4 className="text-[14px] font-bold text-slate-900 leading-tight">{name}</h4>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{currency}</p>
                    </div>
                </div>
                {carriedForward && (
                    <span className="text-[9px] font-bold bg-emerald-50 text-emerald-600 px-2 py-1 rounded-md border border-emerald-100 uppercase tracking-wider">
                        Carried Forward
                    </span>
                )}
            </div>

            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <span className="text-[12px] font-medium text-slate-400">Starting Balance:</span>
                    <span className="text-[12px] font-bold text-slate-800 tracking-tight">{startingBalance}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-[12px] font-medium text-slate-400">Ending Balance:</span>
                    <span className="text-[12px] font-bold text-slate-800 tracking-tight">{endingBalance}</span>
                </div>
                <div className="h-px bg-slate-50 my-2"></div>
                <div className="flex items-center justify-between">
                    <span className="text-[12px] font-medium text-slate-400">Change:</span>
                    <span className={`text-[12px] font-black tracking-tight ${isPositive ? 'text-emerald-600' : 'text-rose-500'}`}>
                        {currency === 'USD' ? '$' : 'Rs'}{Math.abs(change).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        {isPositive ? ' \u25B4' : ' \u25BE'}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default HistoryAccountCard;
