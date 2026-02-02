'use client';

import React, { useState } from 'react';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import AccountCard from '../../components/dashboard/AccountCard';
import SummaryCards from '../../components/dashboard/SummaryCards';
import RecentTransactions from '../../components/dashboard/RecentTransactions';
import QuickActions from '../../components/dashboard/QuickActions';
import QuickAddModal from '../../components/dashboard/QuickAddModal';
import CloseMonthModal, { CloseMonthConfig } from '../../components/dashboard/CloseMonthModal';
import { useAccounts, Account } from '../../context/AccountContext';
import { useTransactions } from '../../context/TransactionContext';
import { useHistory } from '../../context/HistoryContext';
import { CreditCard, Wallet2 } from 'lucide-react';

const DashboardScreen = () => {
    const { accounts, setAccounts } = useAccounts();
    const { transactions, setTransactions } = useTransactions();
    const { addClosedMonth, sessionStartDate, setSessionStartDate } = useHistory();
    const [selectedAccountId, setSelectedAccountId] = useState('all');
    const [isQuickAddOpen, setIsQuickAddOpen] = useState(false);
    const [isCloseMonthOpen, setIsCloseMonthOpen] = useState(false);

    const handleCloseMonth = (config: CloseMonthConfig) => {
        // 0. Save Snapshot to History
        const snapshotAccounts = accounts.map(acc => {
            const accTransactions = transactions.filter(tx => tx.accountId === acc.id);
            const income = accTransactions.filter(tx => tx.type === 'income').reduce((sum, tx) => sum + tx.amount, 0);
            const expense = accTransactions.filter(tx => tx.type === 'expense').reduce((sum, tx) => sum + tx.amount, 0);
            const startBalance = parseFloat(acc.startingBalance.replace(/[$,]/g, '')) || 0;
            const endBalance = startBalance + income - expense;

            return {
                id: acc.id,
                name: acc.name,
                startingBalance: acc.startingBalance,
                endingBalance: `${acc.startingBalance.startsWith('$') ? '$' : 'Rs'}${endBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}`,
                currency: acc.currency,
                color: acc.color,
                carriedForward: config.carryForwardAccountIds.includes(acc.id)
            };
        });

        const totalIncome = transactions.reduce((sum, tx) => tx.type === 'income' ? sum + tx.amount : sum, 0);
        const totalExpense = transactions.reduce((sum, tx) => tx.type === 'expense' ? sum + tx.amount : sum, 0);

        addClosedMonth({
            id: Math.random().toString(36).substr(2, 9),
            monthName: config.monthName,
            periodStart: sessionStartDate, // Use the current session's start date
            periodEnd: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            accounts: snapshotAccounts,
            transactions: [...transactions], // Shallow copy of current transactions
            totals: {
                income: totalIncome,
                expenses: totalExpense,
                net: totalIncome - totalExpense
            }
        });

        // Update the session start date for the NEXT month
        setSessionStartDate(new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }));

        // 1. Process Accounts
        setAccounts(prevAccounts => {
            return prevAccounts.map(acc => {
                if (config.carryForwardAccountIds.includes(acc.id)) {
                    // Carry forward completely (transactions kept in step 2)
                    return acc;
                } else if (config.carryBalanceAccountIds.includes(acc.id)) {
                    // Start new month with current balance
                    const accTransactions = transactions.filter(tx => tx.accountId === acc.id);
                    const income = accTransactions.filter(tx => tx.type === 'income').reduce((sum, tx) => sum + tx.amount, 0);
                    const expense = accTransactions.filter(tx => tx.type === 'expense').reduce((sum, tx) => sum + tx.amount, 0);
                    const currentBalance = parseFloat(acc.startingBalance.replace(/[$,]/g, '')) + income - expense;

                    return {
                        ...acc,
                        startingBalance: `${acc.startingBalance.startsWith('$') ? '$' : 'Rs'}${currentBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}`,
                        balance: `${acc.startingBalance.startsWith('$') ? '$' : 'Rs'}${currentBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}`
                    };
                } else {
                    // Reset to initial settings (here we just use startingBalance)
                    return {
                        ...acc,
                        balance: acc.startingBalance
                    };
                }
            });
        });

        // 2. Process Transactions
        setTransactions(prevTransactions => {
            // Keep transactions only for accounts that are fully carried forward
            return prevTransactions.filter(tx => config.carryForwardAccountIds.includes(tx.accountId));
        });

        setIsCloseMonthOpen(false);
    };

    // Helper to calculate current balance for an account
    const calculateBalance = (account: Account) => {
        const accTransactions = transactions.filter(tx => tx.accountId === account.id);
        const income = accTransactions.filter(tx => tx.type === 'income').reduce((sum, tx) => sum + tx.amount, 0);
        const expense = accTransactions.filter(tx => tx.type === 'expense').reduce((sum, tx) => sum + tx.amount, 0);
        const startBalance = parseFloat(account.startingBalance.replace(/[$,]/g, '')) || 0;
        return startBalance + income - expense;
    };

    const totalBalance = accounts.reduce((sum, acc) => sum + calculateBalance(acc), 0);

    return (
        <>
            {/* Header */}
            <DashboardHeader
                onQuickAdd={() => setIsQuickAddOpen(true)}
                onCloseMonth={() => setIsCloseMonthOpen(true)}
            />

            {/* Account Cards - Horizontally Scrollable */}
            <div className="flex gap-6 overflow-x-auto pb-4 mb-4 -mx-1 px-1 custom-scrollbar scroll-smooth">
                {/* All Accounts Summary Card */}
                <AccountCard
                    name="All Accounts"
                    balance={`$${totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}`}
                    currency="USD"
                    icon={<Wallet2 size={24} />}
                    iconBg="#94a3b8"
                    isHidden={true}
                    isActive={selectedAccountId === 'all'}
                    onClick={() => setSelectedAccountId('all')}
                />

                {accounts.map((account) => (
                    <AccountCard
                        key={account.id}
                        name={account.name}
                        balance={`$${calculateBalance(account).toLocaleString(undefined, { minimumFractionDigits: 2 })}`}
                        currency={account.currency}
                        icon={<CreditCard size={24} />}
                        iconBg={account.color}
                        isActive={selectedAccountId === account.id}
                        onClick={() => setSelectedAccountId(account.id)}
                    />
                ))}
            </div>

            {/* Summary Stats */}
            <SummaryCards selectedAccountId={selectedAccountId} />

            {/* Bottom Grid - Stacks on mobile, side-by-side on desktop */}
            <div className="flex flex-col xl:flex-row gap-6 md:gap-8 pb-20 md:pb-0">
                <RecentTransactions selectedAccountId={selectedAccountId} />
                <QuickActions />
            </div>

            <QuickAddModal
                isOpen={isQuickAddOpen}
                onClose={() => setIsQuickAddOpen(false)}
            />

            <CloseMonthModal
                isOpen={isCloseMonthOpen}
                onClose={() => setIsCloseMonthOpen(false)}
                accounts={accounts}
                transactions={transactions}
                onConfirm={handleCloseMonth}
            />
        </>
    );
};

export default DashboardScreen;
