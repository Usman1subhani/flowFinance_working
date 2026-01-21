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
                <h1 className="heading-1">Dashboard</h1>
                <p className="text-sub mt-1">Welcome back! Here&apos;s your financial overview</p>
                <p className="text-[10px] text-slate-400 mt-2 uppercase tracking-[0.15em] font-bold">Jan 12, 2026 — Present</p>
            </div>

            <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 font-medium text-sm hover:bg-slate-50 transition-all shadow-sm">
                    <Lock size={16} />
                    Close Month
                </button>
                <button
                    onClick={onQuickAdd}
                    className="btn-primary flex items-center gap-2"
                >
                    <Plus size={18} />
                    Quick Add
                </button>
            </div>
        </div>
    );
};

export default DashboardHeader;
