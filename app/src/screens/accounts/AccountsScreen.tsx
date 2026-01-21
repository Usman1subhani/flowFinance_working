'use client';

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useAccounts } from '../../context/AccountContext';
import AccountCard from '../../components/account/AccountCard';
import NewAccountModal from '../../components/account/NewAccountModal';

const AccountsScreen = () => {
    const { accounts, deleteAccount } = useAccounts();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="animate-in fade-in duration-500">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                <div>
                    <h1 className="heading-1">Accounts</h1>
                    <p className="text-sub mt-1">Manage your wallets and accounts</p>
                </div>

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="btn-primary flex items-center gap-2"
                >
                    <Plus size={18} />
                    New Account
                </button>
            </div>

            {/* Grid Layout for Accounts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {accounts.map((account) => (
                    <div key={account.id} className="w-full">
                        <AccountCard
                            {...account}
                            onDelete={() => deleteAccount(account.id)}
                        />
                    </div>
                ))}
            </div>

            <NewAccountModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default AccountsScreen;
