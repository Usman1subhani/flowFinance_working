import React, { useMemo } from 'react';
import { TrendingUp, TrendingDown, Wallet, Target } from 'lucide-react';
import { useTransactions } from '../../context/TransactionContext';
import { useAccounts } from '../../context/AccountContext';

interface SummaryCardProps {
    label: string;
    amount: number;
    icon: React.ReactNode;
    bgColor: string;
    iconBgColor: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ label, amount, icon, bgColor, iconBgColor }) => {
    const isNegative = amount < 0;
    // Format: $11,500.00
    const formattedAmount = `${isNegative ? '-' : ''}$${Math.abs(amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    return (
        <div className={`${bgColor} p-4 md:p-5 lg:p-6 rounded-[0.7rem] md:rounded-[1rem] lg:rounded-[1.2rem] flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all duration-300 border border-transparent`}>
            {/* Top Row: Label and Icon */}
            <div className="flex justify-between items-center mb-3 md:mb-4 lg:mb-6">
                <span className="text-slate-500 font-black text-[10px] md:text-[11px] lg:text-[12px] tracking-widest uppercase opacity-80 max-w-[60%] leading-tight">{label}</span>
                <div className={`${iconBgColor} w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-[0.7rem] md:rounded-[1rem] flex items-center justify-center text-white shadow-md shadow-black/5`}>
                    {React.cloneElement(icon as React.ReactElement<{ className?: string; strokeWidth?: number }>, { className: "w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6", strokeWidth: 2.5 })}
                </div>
            </div>

            {/* Bottom Row: Amount */}
            <div className="z-10">
                <h3 className="text-[18px] md:text-[20px] lg:text-[24px] font-black text-slate-800 tracking-tight leading-none">{formattedAmount}</h3>
            </div>
        </div>
    );
};

interface SummaryCardsProps {
    selectedAccountId?: string;
}

const SummaryCards: React.FC<SummaryCardsProps> = ({ selectedAccountId = 'all' }) => {
    const { transactions } = useTransactions();
    const { accounts } = useAccounts();

    const stats = useMemo(() => {
        const filteredAccounts = accounts.filter(acc => selectedAccountId === 'all' || acc.id === selectedAccountId);
        const filteredTx = transactions.filter(tx => selectedAccountId === 'all' || tx.accountId === selectedAccountId);

        const currentBalance = filteredAccounts.reduce((acc, curr) => {
            const accTransactions = transactions.filter(tx => tx.accountId === curr.id);
            const income = accTransactions.filter(tx => tx.type === 'income').reduce((sum, tx) => sum + tx.amount, 0);
            const expense = accTransactions.filter(tx => tx.type === 'expense').reduce((sum, tx) => sum + tx.amount, 0);
            const startBalance = parseFloat(curr.startingBalance.replace(/[$,]/g, '')) || 0;
            return acc + (startBalance + income - expense);
        }, 0);

        const now = new Date();
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

        const monthlyIncome = filteredTx
            .filter(tx => tx.type === 'income' && new Date(tx.date) >= startOfMonth)
            .reduce((acc, curr) => acc + curr.amount, 0);

        const monthlyExpense = filteredTx
            .filter(tx => tx.type === 'expense' && new Date(tx.date) >= startOfMonth)
            .reduce((acc, curr) => acc + curr.amount, 0);

        const netMonth = monthlyIncome - monthlyExpense;

        return { currentBalance, monthlyIncome, monthlyExpense, netMonth };
    }, [transactions, accounts, selectedAccountId]);

    const cards = [
        {
            label: 'Current Balance',
            amount: stats.currentBalance,
            icon: <Wallet />,
            bgColor: 'bg-indigo-100/50',
            iconBgColor: 'bg-indigo-500'
        },
        {
            label: 'This Month Income',
            amount: stats.monthlyIncome,
            icon: <TrendingUp />,
            bgColor: 'bg-emerald-100/50',
            iconBgColor: 'bg-emerald-500'
        },
        {
            label: 'This Month Expenses',
            amount: stats.monthlyExpense,
            icon: <TrendingDown />,
            bgColor: 'bg-rose-100/70',
            iconBgColor: 'bg-rose-500'
        },
        {
            label: 'Net This Month',
            amount: stats.netMonth,
            icon: <Target />,
            bgColor: stats.netMonth >= 0 ? 'bg-emerald-100/50' : 'bg-rose-50/50',
            iconBgColor: stats.netMonth >= 0 ? 'bg-emerald-500' : 'bg-rose-500'
        },
    ];

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
            {cards.map((card, index) => (
                <SummaryCard key={index} {...card} />
            ))}
        </div>
    );
};

export default SummaryCards;
