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
    const formattedAmount = `${isNegative ? '-' : ''}$${Math.abs(amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    return (
        <div className={`${bgColor} p-8 rounded-[0.8rem] flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all duration-500 border border-black/5 shadow-sm`}>
            <div className="flex justify-between items-start z-10">
                <span className="text-slate-500 font-bold text-[13px] tracking-tight uppercase opacity-70">{label}</span>
                <div className={`${iconBgColor} w-11 h-11 rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                    {React.cloneElement(icon as React.ReactElement<{ size?: number }>, { size: 20 })}
                </div>
            </div>
            <div className="mt-5 z-10">
                <h3 className="text-[22px] font-black text-slate-700  leading-none">{formattedAmount}</h3>
            </div>

            {/* Background decorative element */}
            <div className={`absolute -right-4 -bottom-4 w-24 h-24 ${iconBgColor.replace('bg-', 'bg-')}/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700`}></div>
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
        const filteredTx = transactions.filter(tx => selectedAccountId === 'all' || tx.accountId === selectedAccountId);
        const filteredAccounts = accounts.filter(acc => selectedAccountId === 'all' || acc.id === selectedAccountId);

        const currentBalance = filteredAccounts.reduce((acc, curr) => acc + parseFloat(curr.balance.replace(/[$,]/g, '')), 0);

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
            bgColor: 'bg-indigo-50/50',
            iconBgColor: 'bg-indigo-500'
        },
        {
            label: 'This Month Income',
            amount: stats.monthlyIncome,
            icon: <TrendingUp />,
            bgColor: 'bg-emerald-50/50',
            iconBgColor: 'bg-emerald-500'
        },
        {
            label: 'This Month Expenses',
            amount: stats.monthlyExpense,
            icon: <TrendingDown />,
            bgColor: 'bg-rose-50/50',
            iconBgColor: 'bg-rose-500'
        },
        {
            label: 'Net This Month',
            amount: stats.netMonth,
            icon: <Target />,
            bgColor: stats.netMonth >= 0 ? 'bg-emerald-50/50' : 'bg-rose-50/50',
            iconBgColor: stats.netMonth >= 0 ? 'bg-emerald-500' : 'bg-rose-500'
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {cards.map((card, index) => (
                <SummaryCard key={index} {...card} />
            ))}
        </div>
    );
};

export default SummaryCards;
