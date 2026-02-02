'use client';

import React, { useState } from 'react';
import { useHistory, ClosedMonth } from '../../context/HistoryContext';
import HistoryMonthCard from '../../components/history/HistoryMonthCard';
import HistoryDetailView from '../../components/history/HistoryDetailView';

const HistoryScreen = () => {
    const { closedMonths, deleteHistory } = useHistory();
    const [selectedMonthId, setSelectedMonthId] = useState<string | null>(null);

    const selectedMonth = closedMonths.find(m => m.id === selectedMonthId);

    if (selectedMonth) {
        return (
            <HistoryDetailView
                month={selectedMonth}
                onBack={() => setSelectedMonthId(null)}
            />
        );
    }

    return (
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-24 md:pb-10">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 px-1 md:px-0">
                <div>
                    <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                        Month History
                    </h1>
                    <p className="text-slate-500 font-bold text-xs md:text-sm mt-1">View your closed months and account summaries</p>
                </div>
                {closedMonths.length > 0 && (
                    <div className="bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest w-fit">
                        {closedMonths.length} Closed Months
                    </div>
                )}
            </div>

            {/* List of Months */}
            <div className="space-y-8 md:space-y-12">
                {closedMonths.length > 0 ? (
                    closedMonths.map(month => (
                        <HistoryMonthCard
                            key={month.id}
                            month={month}
                            onViewDetail={(id) => setSelectedMonthId(id)}
                            onDelete={(id) => deleteHistory(id)}
                        />
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 md:py-32 bg-slate-50 border border-dashed border-slate-200 rounded-[2rem] md:rounded-[3rem] px-6 text-center">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-300 shadow-sm mb-6">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-black text-slate-900">No History Found</h3>
                        <p className="text-slate-500 font-medium text-sm mt-2 max-w-xs mx-auto">Your completed months will appear here after you close them in the dashboard.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HistoryScreen;
