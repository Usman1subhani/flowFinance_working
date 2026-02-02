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
        <div className="bg-white p-5 rounded-[1.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
            <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg shadow-opacity-10 group-hover:scale-110 transition-transform" style={{ backgroundColor: color }}>
                        <span className="font-black text-lg">{name.charAt(0)}</span>
                    </div>
                    <div>
                        <h4 className="text-[13px] font-bold text-slate-900 tracking-tight leading-tight">{name}</h4>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-0.5">{currency}</p>
                    </div>
                </div>
                {carriedForward && (
                    <span className="text-[8px] font-black bg-emerald-50 text-emerald-500 px-2 py-1 rounded-md border border-emerald-100 uppercase tracking-widest">
                        Carried
                    </span>
                )}
            </div>

            <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Started</span>
                    <span className="text-[12px] font-black text-slate-900 tracking-tight">{startingBalance}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Ended</span>
                    <span className="text-[12px] font-black text-slate-900 tracking-tight">{endingBalance}</span>
                </div>
                <div className="h-px bg-slate-50 my-1"></div>
                <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Growth</span>
                    <span className={`text-[13px] font-black tracking-tighter ${isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
                        {currency === 'USD' ? '$' : 'Rs'}{Math.abs(change).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        {isPositive ? ' \u25B4' : ' \u25BE'}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default HistoryAccountCard;
