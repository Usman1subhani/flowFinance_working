'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Investment {
    id: string;
    type: 'stock' | 'mutual_fund';
    name: string;
    amount: number;
    currentValue?: number; // Optional: for future real-time tracking
    date: string;
    note?: string;
}

export interface InvestmentContextType {
    investments: Investment[];
    addInvestment: (investment: Omit<Investment, 'id'>) => void;
    updateInvestment: (id: string, updates: Partial<Investment>) => void;
    deleteInvestment: (id: string) => void;
    totalInvested: number;
    stockTotal: number;
    mutualFundTotal: number;
}

const InvestmentContext = createContext<InvestmentContextType | undefined>(undefined);

// Initial mock data
const initialInvestments: Investment[] = [
    {
        id: '1',
        type: 'stock',
        name: 'Apple Inc.',
        amount: 1500,
        date: '2025-01-15',
        note: 'Long term hold'
    },
    {
        id: '2',
        type: 'mutual_fund',
        name: 'Vanguard S&P 500',
        amount: 2000,
        date: '2025-01-20',
        note: 'Monthly SIP'
    }
];

export const InvestmentProvider = ({ children }: { children: ReactNode }) => {
    const [investments, setInvestments] = useState<Investment[]>(initialInvestments);

    const addInvestment = (newInv: Omit<Investment, 'id'>) => {
        const investment: Investment = {
            ...newInv,
            id: Math.random().toString(36).substr(2, 9),
        };
        setInvestments((prev) => [investment, ...prev]);
    };

    const updateInvestment = (id: string, updates: Partial<Investment>) => {
        setInvestments((prev) =>
            prev.map((inv) => (inv.id === id ? { ...inv, ...updates } : inv))
        );
    };

    const deleteInvestment = (id: string) => {
        setInvestments((prev) => prev.filter((inv) => inv.id !== id));
    };

    const totalInvested = investments.reduce((sum, inv) => sum + inv.amount, 0);
    const stockTotal = investments.filter(i => i.type === 'stock').reduce((sum, inv) => sum + inv.amount, 0);
    const mutualFundTotal = investments.filter(i => i.type === 'mutual_fund').reduce((sum, inv) => sum + inv.amount, 0);

    return (
        <InvestmentContext.Provider
            value={{
                investments,
                addInvestment,
                updateInvestment,
                deleteInvestment,
                totalInvested,
                stockTotal,
                mutualFundTotal
            }}
        >
            {children}
        </InvestmentContext.Provider>
    );
};

export const useInvestments = () => {
    const context = useContext(InvestmentContext);
    if (context === undefined) {
        throw new Error('useInvestments must be used within a InvestmentProvider');
    }
    return context;
};
