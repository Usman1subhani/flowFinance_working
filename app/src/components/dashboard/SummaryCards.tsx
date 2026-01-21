import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Wallet } from 'lucide-react';

interface SummaryCardProps {
    label: string;
    amount: string;
    icon: React.ReactNode;
    bgColor: string;
    iconColor: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ label, amount, icon, bgColor, iconColor }) => (
    <div className={`${bgColor} p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all duration-300 border border-slate-100 shadow-sm`}>
        <div className="flex justify-between items-start z-10">
            <span className="text-slate-500 font-medium text-[13px] tracking-tight">{label}</span>
            <div className={`${iconColor} bg-white w-9 h-9 rounded-lg flex items-center justify-center shadow-sm border border-slate-50`}>
                {React.cloneElement(icon as React.ReactElement<{ size?: number }>, { size: 18 })}
            </div>
        </div>
        <div className="mt-6 z-10">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-none">{amount}</h3>
        </div>

        {/* Subtle decorative element */}
        <div className="absolute -right-2 -bottom-2 w-16 h-16 bg-white/40 rounded-full blur-xl group-hover:bg-white/60 transition-all duration-500"></div>
    </div>
);

const SummaryCards = () => {
    const cards = [
        {
            label: 'Current Balance',
            amount: '$-6,555.00',
            icon: <Wallet size={20} />,
            bgColor: 'bg-indigo-50/40',
            iconColor: 'text-indigo-600'
        },
        {
            label: 'This Month Income',
            amount: '$10,000.00',
            icon: <TrendingUp size={20} />,
            bgColor: 'bg-emerald-50/40',
            iconColor: 'text-emerald-600'
        },
        {
            label: 'This Month Expenses',
            amount: '$1,000.00',
            icon: <TrendingDown size={20} />,
            bgColor: 'bg-rose-50/40',
            iconColor: 'text-rose-600'
        },
        {
            label: 'Net This Month',
            amount: '$9,000.00',
            icon: <DollarSign size={20} />,
            bgColor: 'bg-slate-50/60',
            iconColor: 'text-slate-600'
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {cards.map((card, index) => (
                <SummaryCard key={index} {...card} />
            ))}
        </div>
    );
};

export default SummaryCards;
