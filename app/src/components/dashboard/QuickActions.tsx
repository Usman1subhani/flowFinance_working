import React from 'react';
import { PlusCircle, ArrowUpCircle, Settings, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

const actions = [
    { label: 'Add Expense', icon: <PlusCircle size={20} />, color: 'text-rose-500', path: '/transactions?add=expense' },
    { label: 'Add Income', icon: <ArrowUpCircle size={20} />, color: 'text-emerald-500', path: '/transactions?add=income' },
    { label: 'Manage Accounts', icon: <Settings size={20} />, color: 'text-indigo-500', path: '/settings/accounts' },
];

const QuickActions = () => {
    const router = useRouter();
    return (
        <div className="bg-white p-6 md:p-8 rounded-[1rem] border border-slate-200 shadow-sm md:w-[350px] shrink-0">
            <h3 className="text-[18px] font-bold text-black mb-8">Quick Actions</h3>

            <div className="space-y-5">
                {actions.map((action, index) => (
                    <button
                        key={index}
                        onClick={() => router.push(action.path)}
                        className="w-full flex items-center justify-between p-5 rounded-3xl bg-white border border-slate-100 hover:border-indigo-100 hover:bg-slate-50 transition-all group"
                    >
                        <div className="flex items-center gap-4">
                            <div className={`${action.color} transition-transform group-hover:scale-110`}>
                                {React.isValidElement(action.icon) ? React.cloneElement(action.icon as React.ReactElement<{ size?: number }>, { size: 20 }) : action.icon}
                            </div>
                            <span className="text-[15px] font-bold text-slate-800 tracking-tight">{action.label}</span>
                        </div>
                        <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-slate-300 group-hover:text-indigo-500 group-hover:bg-indigo-50 transition-all">
                            <Plus size={14} className="rotate-45" />
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuickActions;
