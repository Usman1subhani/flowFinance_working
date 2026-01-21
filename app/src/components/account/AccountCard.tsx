'use client';

import React, { useState } from 'react';
import { Eye, EyeOff, Edit2, Trash2, Wallet } from 'lucide-react';

interface AccountCardProps {
    id: string;
    name: string;
    balance: string;
    startingBalance: string;
    currency: string;
    color: string; // Hex or Tailwind class
    onEdit?: () => void;
    onDelete?: () => void;
}

const AccountCard: React.FC<AccountCardProps> = ({
    name,
    balance,
    startingBalance,
    currency,
    color,
    onEdit,
    onDelete
}) => {
    const [isHidden, setIsHidden] = useState(true);

    return (
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-sm" style={{ backgroundColor: color }}>
                    <Wallet size={24} />
                </div>
                <div className="flex items-center gap-1">
                    <button
                        onClick={() => setIsHidden(!isHidden)}
                        className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
                    >
                        {isHidden ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                    <button
                        onClick={onEdit}
                        className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
                    >
                        <Edit2 size={16} />
                    </button>
                    <button
                        onClick={onDelete}
                        className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
                    >
                        <Trash2 size={16} />
                    </button>
                </div>
            </div>

            <div>
                <h4 className="text-lg font-bold text-slate-900 tracking-tight leading-none mb-1">{name}</h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">{currency}</p>

                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <span className="text-[13px] font-medium text-slate-400">Current Balance</span>
                        <span className="text-[14px] font-bold text-slate-900 tracking-tight">
                            {isHidden ? '••••••' : balance}
                        </span>
                    </div>
                    <div className="flex items-center justify-between border-t border-slate-50 pt-3">
                        <span className="text-[13px] font-medium text-slate-400">Starting Balance</span>
                        <span className="text-[14px] font-bold text-slate-900 tracking-tight">
                            {isHidden ? '••••••' : startingBalance}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountCard;
