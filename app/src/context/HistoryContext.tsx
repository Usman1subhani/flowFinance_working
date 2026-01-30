'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Transaction } from './TransactionContext';

export interface HistoryAccount {
    id: string;
    name: string;
    startingBalance: string;
    endingBalance: string;
    currency: string;
    color: string;
    carriedForward: boolean; // boolean if full carry forward, else balance forward or reset
}

export interface ClosedMonth {
    id: string;
    monthName: string;
    periodStart: string;
    periodEnd: string;
    accounts: HistoryAccount[];
    transactions: Transaction[];
    totals: {
        income: number;
        expenses: number;
        net: number;
    };
}

interface HistoryContextType {
    closedMonths: ClosedMonth[];
    sessionStartDate: string;
    addClosedMonth: (month: ClosedMonth) => void;
    deleteHistory: (id: string) => void;
    setSessionStartDate: (date: string) => void;
}

const HistoryContext = createContext<HistoryContextType | undefined>(undefined);

// Mock Data based on images
const initialHistory: ClosedMonth[] = [
    {
        id: 'h1',
        monthName: 'December 2025',
        periodStart: 'Dec 8, 2025',
        periodEnd: 'Jan 4, 2026',
        totals: {
            income: 134185.00,
            expenses: 96398.00,
            net: 37787.00
        },
        accounts: [
            { id: '1', name: 'Software Office', startingBalance: '$0.00', endingBalance: '$-5,900.00', currency: 'USD', color: '#f59e0b', carriedForward: false },
            { id: '2', name: 'Meer Wedding', startingBalance: 'RS -13,228.00', endingBalance: 'RS -1,950.00', currency: 'PKR', color: '#f43f5e', carriedForward: false },
            { id: '3', name: 'Old History', startingBalance: 'RS -7,300.00', endingBalance: 'RS -7,300.00', currency: 'PKR', color: '#ec4899', carriedForward: true },
            { id: '4', name: 'UBL', startingBalance: 'Rs34,708.00', endingBalance: 'Rs42,790.00', currency: 'PKR', color: '#10b981', carriedForward: false },
            { id: '5', name: 'Islamic', startingBalance: 'Rs42,000.00', endingBalance: 'Rs33,980.00', currency: 'PKR', color: '#10b981', carriedForward: false },
            { id: '6', name: 'Teaching Salary', startingBalance: 'Rs0.00', endingBalance: 'Rs-1,498.00', currency: 'PKR', color: '#f59e0b', carriedForward: false },
        ],
        transactions: [
            { id: 't1', title: 'Office Ex', amount: 6000, type: 'expense', accountId: '1', date: '2025-12-19', categoryId: 'cat1' },
            { id: 't2', title: 'At Home', amount: 30500, type: 'expense', accountId: '1', date: '2025-12-19', categoryId: 'cat2' },
        ]
    },
    {
        id: 'h2',
        monthName: 'November 2025',
        periodStart: 'Nov 1, 2025',
        periodEnd: 'Nov 30, 2025',
        totals: {
            income: 0.00,
            expenses: 250.00,
            net: -250.00
        },
        accounts: [
            { id: '7', name: 'Salary', startingBalance: 'Rs0.00', endingBalance: 'Rs52.00', currency: 'PKR', color: '#6366f1', carriedForward: false },
            { id: '5', name: 'Islamic', startingBalance: 'Rs42,000.00', endingBalance: 'Rs36,374.00', currency: 'PKR', color: '#10b981', carriedForward: false },
            { id: '4', name: 'UBL', startingBalance: 'Rs863.00', endingBalance: 'Rs16,198.24', currency: 'PKR', color: '#f59e0b', carriedForward: false },
            { id: '3', name: 'Old History', startingBalance: 'Rs0.00', endingBalance: 'Rs-7,300.00', currency: 'PKR', color: '#f43f5e', carriedForward: true },
            { id: '2', name: 'Meer Wedding', startingBalance: 'Rs 0.00', endingBalance: 'Rs -13,228.00', currency: 'PKR', color: '#06b6d4', carriedForward: true },
        ],
        transactions: []
    }
];

export const HistoryProvider = ({ children }: { children: ReactNode }) => {
    const [closedMonths, setClosedMonths] = useState<ClosedMonth[]>(initialHistory);
    // Initial session start date is the day after the last closed month's end date
    // For mock data purposes, we'll set it to Jan 5, 2026
    const [sessionStartDate, setSessionStartDate] = useState<string>('Jan 5, 2026');

    const addClosedMonth = (month: ClosedMonth) => {
        setClosedMonths((prev) => [month, ...prev]);
    };

    const deleteHistory = (id: string) => {
        setClosedMonths((prev) => prev.filter(m => m.id !== id));
    };

    return (
        <HistoryContext.Provider value={{
            closedMonths,
            sessionStartDate,
            addClosedMonth,
            deleteHistory,
            setSessionStartDate
        }}>
            {children}
        </HistoryContext.Provider>
    );
};

export const useHistory = () => {
    const context = useContext(HistoryContext);
    if (context === undefined) {
        throw new Error('useHistory must be used within a HistoryProvider');
    }
    return context;
};
