import React from 'react';
import { PlusCircle, ArrowUpCircle, Settings, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

const actions = [
    { label: 'Add Expense', icon: <PlusCircle size={20} />, color: 'text-rose-500', path: '/transactions?add=expense' },
    { label: 'Add Income', icon: <ArrowUpCircle size={20} />, color: 'text-emerald-500', path: '/transactions?add=income' },
    { label: 'Manage Accounts', icon: <Settings size={20} />, color: 'text-indigo-500', path: '/accounts' },
];

const QuickActions = () => {
    const router = useRouter();
    return (
        <div className="bg-white p-4 md:p-6 lg:p-8 rounded-[0.7rem] md:rounded-[1rem] border border-slate-200 shadow-sm md:w-[350px] shrink-0">
            <h3 className="text-base md:text-[18px] font-bold text-black mb-4 md:mb-8">Quick Actions</h3>

            <div className="space-y-3 md:space-y-5">
                {actions.map((action, index) => (
                    <button
                        key={index}
                        onClick={() => router.push(action.path)}
                        className="w-full flex items-center justify-between p-3 md:p-4 lg:p-5 rounded-2xl md:rounded-3xl bg-white border border-slate-100 hover:border-indigo-100 hover:bg-slate-50 transition-all group"
                    >
                        <div className="flex items-center gap-3 md:gap-4">
                            <div className={`${action.color} transition-transform group-hover:scale-110`}>
                                {React.isValidElement(action.icon) ? React.cloneElement(action.icon as React.ReactElement<{ className?: string }>, { className: "w-4 h-4 md:w-5 md:h-5" }) : action.icon}
                            </div>
                            <span className="text-sm md:text-[15px] font-bold text-slate-800 tracking-tight">{action.label}</span>
                        </div>
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg md:rounded-xl bg-slate-50 flex items-center justify-center text-slate-300 group-hover:text-indigo-500 group-hover:bg-indigo-50 transition-all">
                            <Plus size={14} className="rotate-45" />
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuickActions;
