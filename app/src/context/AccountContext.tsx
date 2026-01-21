'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Account {
    id: string;
    name: string;
    balance: string;
    startingBalance: string;
    currency: string;
    color: string;
    icon?: string;
}

interface AccountContextType {
    accounts: Account[];
    addAccount: (account: Omit<Account, 'id' | 'balance'>) => void;
    updateAccount: (id: string, updates: Partial<Omit<Account, 'id'>>) => void;
    deleteAccount: (id: string) => void;
}

const AccountContext = createContext<AccountContextType | undefined>(undefined);

const initialAccounts: Account[] = [
    {
        id: '1',
        name: 'Testing Salary',
        balance: '$2,445.00',
        startingBalance: '$2,000.00',
        currency: 'USD',
        color: '#eb4899'
    },
    {
        id: '2',
        name: 'Testing1',
        balance: '$1,200.00',
        startingBalance: '$500.00',
        currency: 'USD',
        color: '#6366f1'
    },
];

export const AccountProvider = ({ children }: { children: ReactNode }) => {
    const [accounts, setAccounts] = useState<Account[]>(initialAccounts);

    const addAccount = (newAccount: Omit<Account, 'id' | 'balance'>) => {
        const account: Account = {
            ...newAccount,
            id: Math.random().toString(36).substr(2, 9),
            balance: newAccount.startingBalance, // Initially balance = starting balance
        };
        setAccounts((prev) => [...prev, account]);
    };

    const updateAccount = (id: string, updates: Partial<Omit<Account, 'id'>>) => {
        setAccounts((prev) => prev.map((acc) => (acc.id === id ? { ...acc, ...updates } : acc)));
    };

    const deleteAccount = (id: string) => {
        setAccounts((prev) => prev.filter((acc) => acc.id !== id));
    };

    return (
        <AccountContext.Provider value={{ accounts, addAccount, updateAccount, deleteAccount }}>
            {children}
        </AccountContext.Provider>
    );
};

export const useAccounts = () => {
    const context = useContext(AccountContext);
    if (context === undefined) {
        throw new Error('useAccounts must be used within an AccountProvider');
    }
    return context;
};
