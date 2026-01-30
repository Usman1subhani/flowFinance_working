'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Transaction {
    id: string;
    title: string;
    amount: number;
    type: 'income' | 'expense';
    accountId: string;
    categoryId?: string;
    date: string;
    note?: string;
    attachment?: string;
    recurrence?: string;
}

export interface TransactionContextType {
    transactions: Transaction[];
    futureTransactions: Transaction[];
    addTransaction: (transaction: Omit<Transaction, 'id'>) => void;
    updateTransaction: (id: string, updates: Partial<Transaction>) => void;
    deleteTransaction: (id: string) => void;
    setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
    // Future Transactions
    addFutureTransaction: (transaction: Omit<Transaction, 'id'>) => void;
    removeFutureTransaction: (id: string) => void;
    submitFutureTransactions: (ids: string[]) => void;
}

const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

const initialTransactions: Transaction[] = [
    {
        id: '1',
        title: 'Salary',
        amount: 10000,
        type: 'income',
        accountId: '1',
        date: '2026-01-19',
        note: 'Testing Salary',
    },
    {
        id: '2',
        title: 'Lunch',
        amount: 500,
        type: 'expense',
        accountId: '1',
        categoryId: '12', // Food & Dining
        date: '2026-01-19',
        note: 'Testing Salary',
    },
    {
        id: '3',
        title: 'fuel',
        amount: 500,
        type: 'expense',
        accountId: '1',
        categoryId: '13', // Transportation
        date: '2026-01-19',
        note: 'Testing Salary',
    },
];

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
    const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
    const [futureTransactions, setFutureTransactions] = useState<Transaction[]>([]);

    const addTransaction = (newTx: Omit<Transaction, 'id'>) => {
        const transaction: Transaction = {
            ...newTx,
            id: Math.random().toString(36).substr(2, 9),
        };
        setTransactions((prev) => [transaction, ...prev]);
    };

    const updateTransaction = (id: string, updates: Partial<Transaction>) => {
        setTransactions((prev) =>
            prev.map((tx) => (tx.id === id ? { ...tx, ...updates } : tx))
        );
    };

    const deleteTransaction = (id: string) => {
        setTransactions((prev) => prev.filter((tx) => tx.id !== id));
    };

    // Future Transaction Logic
    const addFutureTransaction = (newTx: Omit<Transaction, 'id'>) => {
        const transaction: Transaction = {
            ...newTx,
            id: Math.random().toString(36).substr(2, 9),
            date: 'Future', // Placeholder, will be updated on submit
        };
        setFutureTransactions((prev) => [transaction, ...prev]);
    };

    const removeFutureTransaction = (id: string) => {
        setFutureTransactions((prev) => prev.filter((tx) => tx.id !== id));
    };

    const submitFutureTransactions = (ids: string[]) => {
        const transactionsToMove = futureTransactions.filter(tx => ids.includes(tx.id));

        const newRealTransactions = transactionsToMove.map(tx => ({
            ...tx,
            date: new Date().toISOString().split('T')[0], // Set to current date
        }));

        setTransactions(prev => [...newRealTransactions, ...prev]);
        setFutureTransactions(prev => prev.filter(tx => !ids.includes(tx.id)));
    };

    return (
        <TransactionContext.Provider
            value={{
                transactions,
                addTransaction,
                updateTransaction,
                deleteTransaction,
                setTransactions,
                futureTransactions,
                addFutureTransaction,
                removeFutureTransaction,
                submitFutureTransactions
            }}
        >
            {children}
        </TransactionContext.Provider>
    );
};

export const useTransactions = () => {
    const context = useContext(TransactionContext);
    if (context === undefined) {
        throw new Error('useTransactions must be used within a TransactionProvider');
    }
    return context;
};
