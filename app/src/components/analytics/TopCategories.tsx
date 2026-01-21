'use client';

import React from 'react';
import { BarChart3 } from 'lucide-react';

interface TopCategory {
    id: string;
    name: string;
    amount: number;
    transactionCount: number;
    color: string;
}

interface TopCategoriesProps {
    data: TopCategory[];
}

const TopCategories: React.FC<TopCategoriesProps> = ({ data }) => {
    const totalAmount = data.reduce((acc, curr) => acc + curr.amount, 0);

    return (
        <div className="bg-white p-5 rounded-[1rem] border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
                    <BarChart3 size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Top Categories</h3>
            </div>

            <div className="space-y-5">
                {data.map((cat, index) => {
                    const percentage = totalAmount > 0 ? (cat.amount / totalAmount) * 100 : 0;

                    return (
                        <div key={cat.id} className="relative">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-black text-slate-300 italic">#{index + 1}</span>
                                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
                                    <span className="text-sm font-bold text-slate-700">{cat.name}</span>
                                </div>
                                <div className="text-right">
                                    <span className="text-sm font-black text-slate-900">${cat.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                                    <p className="text-[10px] font-bold text-slate-400 leading-none">{cat.transactionCount} transactions</p>
                                </div>
                            </div>

                            <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                                <div
                                    className="h-full rounded-full transition-all duration-1000 delay-300"
                                    style={{
                                        width: `${percentage}%`,
                                        backgroundColor: cat.color
                                    }}
                                />
                            </div>

                            <div className="flex justify-end mt-1.5">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                    {percentage.toFixed(1)}% of total
                                </span>
                            </div>
                        </div>
                    );
                })}

                {data.length === 0 && (
                    <div className="text-center py-10 opacity-50 grayscale">
                        <BarChart3 size={40} className="mx-auto mb-3 text-slate-200" />
                        <p className="text-slate-400 text-sm font-bold">No categorical data yet</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TopCategories;
