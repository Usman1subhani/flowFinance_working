import React from 'react';
import { PlusCircle, ArrowUpCircle, Settings } from 'lucide-react';

const actions = [
    { label: 'Add Expense', icon: <PlusCircle size={20} />, color: 'text-rose-500' },
    { label: 'Add Income', icon: <ArrowUpCircle size={20} />, color: 'text-emerald-500' },
    { label: 'Manage Accounts', icon: <Settings size={20} />, color: 'text-indigo-500' },
];

const QuickActions = () => {
    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm md:w-[350px] shrink-0">
            <h3 className="heading-2 mb-6">Quick Actions</h3>

            <div className="space-y-3">
                {actions.map((action, index) => (
                    <button
                        key={index}
                        className="w-full flex items-center justify-between p-4 rounded-xl bg-white border border-slate-100 hover:border-indigo-100 hover:bg-slate-50 transition-all group"
                    >
                        <div className="flex items-center gap-3.5">
                            <div className={`${action.color} transition-transform group-hover:scale-105`}>
                                {React.isValidElement(action.icon) ? React.cloneElement(action.icon as React.ReactElement<{ size?: number }>, { size: 18 }) : action.icon}
                            </div>
                            <span className="text-[14px] font-semibold text-slate-700 tracking-tight">{action.label}</span>
                        </div>
                        <div className="w-7 h-7 rounded-full border border-slate-50 flex items-center justify-center text-slate-300 group-hover:text-indigo-500 group-hover:bg-indigo-50/50 transition-all">
                            <PlusCircle size={12} className="rotate-45" />
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuickActions;
