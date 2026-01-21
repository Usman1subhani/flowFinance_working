'use client';

import React, { useState } from 'react';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import AccountCard from '../../components/dashboard/AccountCard';
import SummaryCards from '../../components/dashboard/SummaryCards';
import RecentTransactions from '../../components/dashboard/RecentTransactions';
import QuickActions from '../../components/dashboard/QuickActions';
import QuickAddModal from '../../components/dashboard/QuickAddModal';
import { useAccounts, Account } from '../../context/AccountContext';
import { CreditCard, Wallet2 } from 'lucide-react';

const DashboardScreen = () => {
    const { accounts } = useAccounts();
    const [selectedAccountId, setSelectedAccountId] = useState('all');
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            {/* Header */}
            <DashboardHeader onQuickAdd={() => setIsModalOpen(true)} />

            {/* Account Cards - Horizontally Scrollable */}
            <div className="flex gap-6 overflow-x-auto pb-8 -mx-1 px-1 no-scrollbar scroll-smooth">
                {/* All Accounts Summary Card */}
                <AccountCard
                    name="All Accounts"
                    balance={`$${accounts.reduce((acc: number, curr: Account) => acc + parseFloat(curr.balance.replace(/[$,]/g, '')), 0).toLocaleString()}`}
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
                        balance={account.balance}
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

            {/* Bottom Grid */}
            <div className="flex flex-col md:flex-row gap-8">
                <RecentTransactions selectedAccountId={selectedAccountId} />
                <QuickActions />
            </div>

            <QuickAddModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default DashboardScreen;
