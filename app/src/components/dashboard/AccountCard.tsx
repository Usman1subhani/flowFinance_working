'use client';

import React from 'react';
import { Eye, EyeOff, Target, Wallet } from 'lucide-react';

interface AccountCardProps {
    name: string;
    balance: string;
    currency: string;
    icon: React.ReactNode;
    iconBg: string; // Hex color or Tailwind class
    isActive?: boolean;
    isHidden?: boolean;
    onClick?: () => void;
}

const AccountCard: React.FC<AccountCardProps> = ({
    name,
    balance,
    currency,
    icon,
    iconBg,
    isActive,
    isHidden: initialIsHidden = false,
    onClick
}) => {
    const [isHidden, setIsHidden] = React.useState(initialIsHidden);

    // Map currency code to symbol
    const getCurrencySymbol = (code: string) => {
        const symbols: Record<string, string> = {
            'USD': '$',
            'EUR': '€',
            'GBP': '£',
            'PKR': 'Rs',
        };
        return symbols[code] || code;
    };

    const currencySymbol = getCurrencySymbol(currency);
    const displayBalance = balance.replace(/[$\u20AC\u00A3]/g, ''); // Remove existing symbols to avoid duplicates

    return (
        <div
            onClick={onClick}
            className={`min-w-[280px] p-6 rounded-2xl border transition-all duration-300 bg-white cursor-pointer ${isActive
                ? 'border-transparent shadow-xl shadow-indigo-100/30'
                : 'border-slate-100 hover:border-slate-200 shadow-sm'
                }`}
            style={isActive ? {
                borderImageSource: 'linear-gradient(to right, #6366f1, #a855f7)',
                borderImageSlice: 1,
                borderStyle: 'solid',
                borderWidth: '1px',
                borderRadius: 'inherit' // Border image doesn't play well with radius, so we might need a wrapper if radius is strictly needed with gradient border
            } : {}}
        >
            <div className="flex items-start justify-between mb-8">
                <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-sm"
                    style={{ backgroundColor: iconBg }}
                >
                    {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<{ size?: number }>, { size: 20 }) : icon}
                </div>
                <div className="flex items-center gap-1.5">
                    <button
                        onClick={() => setIsHidden(!isHidden)}
                        className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-all"
                    >
                        {isHidden ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-all">
                        <Target size={16} />
                    </button>
                </div>
            </div>

            <div>
                <h4 className="text-slate-500 text-[13px] font-medium mb-1.5  ">{name}</h4>
                <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-slate-900">
                        {isHidden ? '••••••' : `${currencySymbol}${displayBalance}`}
                    </span>
                    {!isHidden && <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{currency}</span>}
                </div>
            </div>
        </div>
    );
};

export default AccountCard;
