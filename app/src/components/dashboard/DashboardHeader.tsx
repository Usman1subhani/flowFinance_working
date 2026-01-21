'use client';

import React from 'react';
import { Lock, Plus } from 'lucide-react';

interface DashboardHeaderProps {
    onQuickAdd: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onQuickAdd }) => {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <div>
                <h1 className="h1-dashboard text-[24px] font-black text-slate-700" >Dashboard</h1>
                <p className="subtext-dashboard mt-1 text-[15px] font-black text-slate-500 ">Welcome back! Here&apos;s your financial overview</p>
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mt-2">Jan 12, 2026 — Present</p>
            </div>

            <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-6 py-3 bg-gray-400 text-white rounded-[0.5rem] font-bold text-sm">
                    <Lock size={16} />
                    Close Month
                </button>
                <button
                    onClick={onQuickAdd}
                    className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-[0.5rem] font-bold text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-95"
                >
                    <Plus size={18} />
                    Quick Add
                </button>
            </div>
        </div>
    );
};

export default DashboardHeader;
