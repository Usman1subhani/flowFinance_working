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
        <div className="animate-in fade-in duration-500 max-w-7xl mx-auto space-y-10">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-slate-800 tracking-tight">Month History</h1>
                    <p className="text-slate-500 font-medium mt-1">View your closed months and account summaries</p>
                </div>
            </div>

            {/* List of Months */}
            <div className="space-y-16 pb-20">
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
                    <div className="flex flex-col items-center justify-center py-32 bg-slate-50 border border-dashed border-slate-200 rounded-[3rem]">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-300 shadow-sm mb-4">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-black text-slate-400">No History Found</h3>
                        <p className="text-slate-400 font-medium mt-1">Your closed months will appear here</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HistoryScreen;
