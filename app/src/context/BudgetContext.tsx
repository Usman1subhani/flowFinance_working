'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export interface Budget {
    id: string;
    categoryId: string;
    amount: number;
    spent: number;
}

interface BudgetContextType {
    budgets: Budget[];
    addBudget: (budget: Omit<Budget, 'id' | 'spent'>) => void;
    updateBudget: (id: string, updates: Partial<Budget>) => void;
    deleteBudget: (id: string) => void;
}

const BudgetContext = createContext<BudgetContextType | undefined>(undefined);

const initialBudgets: Budget[] = [
    { id: '1', categoryId: '6', amount: 2500, spent: 0 }, // Stocks
];

export const BudgetProvider = ({ children }: { children: ReactNode }) => {
    const [budgets, setBudgets] = useState<Budget[]>(initialBudgets);

    const addBudget = (newBudget: Omit<Budget, 'id' | 'spent'>) => {
        const budget: Budget = {
            ...newBudget,
            id: Math.random().toString(36).substr(2, 9),
            spent: 0,
        };
        setBudgets((prev) => [...prev, budget]);
    };

    const updateBudget = (id: string, updates: Partial<Budget>) => {
        setBudgets((prev) => prev.map((b) => (b.id === id ? { ...b, ...updates } : b)));
    };

    const deleteBudget = (id: string) => {
        setBudgets((prev) => prev.filter((b) => b.id !== id));
    };

    return (
        <BudgetContext.Provider value={{ budgets, addBudget, updateBudget, deleteBudget }}>
            {children}
        </BudgetContext.Provider>
    );
};

export const useBudgets = () => {
    const context = useContext(BudgetContext);
    if (context === undefined) {
        throw new Error('useBudgets must be used within a BudgetProvider');
    }
    return context;
};
