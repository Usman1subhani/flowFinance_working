'use client';

import React from 'react';

interface ExpenseCategoryChartProps {
    data: { name: string; value: number; color: string }[];
}

const ExpenseCategoryChart: React.FC<ExpenseCategoryChartProps> = ({ data }) => {
    const total = data.reduce((acc, curr) => acc + curr.value, 0);
    let cumulativePercent = 0;

    function getCoordinatesForPercent(percent: number) {
        const x = Math.cos(2 * Math.PI * percent);
        const y = Math.sin(2 * Math.PI * percent);
        return [x, y];
    }

    return (
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm col-span-1 lg:col-span-2">
            <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
                Spending by Category
                <span className="text-[10px] bg-slate-100 text-slate-400 px-2 py-1 rounded-lg uppercase tracking-widest font-black">Expense</span>
            </h3>

            <div className="flex flex-col md:flex-row items-center gap-12">
                {/* SVG Pie Chart */}
                <div className="relative w-64 h-64 shrink-0">
                    <svg viewBox="-1 -1 2 2" className="w-full h-full -rotate-90">
                        {data.map((slice, index) => {
                            const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
                            cumulativePercent += slice.value / total;
                            const [endX, endY] = getCoordinatesForPercent(cumulativePercent);
                            const largeArcFlag = slice.value / total > 0.5 ? 1 : 0;
                            const pathData = [
                                `M ${startX} ${startY}`,
                                `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
                                `L 0 0`,
                            ].join(' ');

                            return <path key={index} d={pathData} fill={slice.color} className="hover:opacity-80 transition-opacity cursor-pointer" />;
                        })}
                    </svg>
                    {/* Center Hole for Donut Effect */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-white rounded-full shadow-inner flex flex-col items-center justify-center">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total</span>
                            <span className="text-xl font-black text-slate-900">${total.toLocaleString()}</span>
                        </div>
                    </div>
                </div>

                {/* Legend */}
                <div className="flex-1 w-full space-y-4">
                    {data.map((slice, index) => (
                        <div key={index} className="flex items-center justify-between group">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: slice.color }} />
                                <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors">{slice.name}</span>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-[15px] font-black text-slate-900">${slice.value.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                                <span className="text-[10px] font-black text-slate-400">
                                    {((slice.value / total) * 100).toFixed(1)}%
                                </span>
                            </div>
                        </div>
                    ))}
                    {data.length === 0 && (
                        <div className="text-center py-8">
                            <p className="text-slate-400 font-medium">No expense data available</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ExpenseCategoryChart;
