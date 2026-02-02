'use client';

import React from 'react';
import Link from 'next/link';
import { Lock, Plus } from 'lucide-react';
import { useHistory } from '../../context/HistoryContext';

interface DashboardHeaderProps {
    onQuickAdd: () => void;
    onCloseMonth: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onQuickAdd, onCloseMonth }) => {
    const { sessionStartDate } = useHistory();

    return (
        <div className="flex flex-col gap-6 mb-6 md:mb-8 lg:mb-10">
            {/* Mobile Top Bar */}
            <div className="flex md:hidden items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                        <span className="font-bold text-lg">F</span>
                    </div>
                    <span className="font-bold text-slate-900 text-lg">FinanceFlow</span>
                </div>
                {/* Category Icon for Mobile - configured to look like a button or just the icon as requested */}
                {/* Category Icon for Mobile */}
                <Link href="/categories" className="p-2 bg-slate-50 rounded-full text-slate-600 hover:bg-slate-100 transition-colors">
                    {/* Using the same icon from sidebar for consistency */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tags"><path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" /><path d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.41 2.41 0 0 0 3.408 0l3.592-3.592a2.41 2.41 0 0 0 0-3.408z" /></svg>
                </Link>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="h1-dashboard text-lg md:text-xl lg:text-2xl font-black text-slate-700" >Dashboard</h1>
                    <p className="subtext-dashboard mt-1 text-[11px] md:text-xs lg:text-sm font-bold text-slate-500 ">Welcome back! Here&apos;s your financial overview</p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">{sessionStartDate} — Present</p>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                    <button
                        onClick={onCloseMonth}
                        className="flex-1 md:flex-none justify-center flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 bg-gray-400 text-white rounded-[0.5rem] font-bold text-xs md:text-sm hover:bg-gray-500 transition-all active:scale-95"
                    >
                        <Lock size={16} />
                        Close Month
                    </button>
                    <button
                        onClick={onQuickAdd}
                        className="flex-1 md:flex-none justify-center flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 bg-indigo-600 text-white rounded-[0.5rem] font-bold text-xs md:text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-95"
                    >
                        <Plus size={18} />
                        Quick Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;
