'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Category {
    id: string;
    name: string;
    color: string;
    isSystem?: boolean;
}

interface CategoryContextType {
    categories: Category[];
    addCategory: (category: Omit<Category, 'id'>) => void;
    updateCategory: (id: string, updates: Partial<Category>) => void;
    deleteCategory: (id: string) => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

const initialCategories: Category[] = [
    { id: '1', name: 'App Errror', color: '#f43f5e' },
    { id: '2', name: 'Savings', color: '#6366f1' },
    { id: '3', name: 'Office Ex', color: '#f43f5e' },
    { id: '4', name: 'At Home', color: '#f43f5e' },
    { id: '5', name: 'Office Travel', color: '#10b981' },
    { id: '6', name: 'Stocks', color: '#84cc16' },
    { id: '7', name: 'Packages', color: '#8b5cf6' },
    { id: '8', name: 'Entertainment', color: '#ec4899', isSystem: true },
    { id: '9', name: 'Shopping', color: '#10b981', isSystem: true },
    { id: '10', name: 'Healthcare', color: '#06b6d4', isSystem: true },
    { id: '11', name: 'Education', color: '#6366f1', isSystem: true },
    { id: '12', name: 'Food & Dining', color: '#f59e0b', isSystem: true },
    { id: '13', name: 'Transportation', color: '#3b82f6', isSystem: true },
    { id: '14', name: 'Bills & Utilities', color: '#f43f5e', isSystem: true },
    { id: '15', name: 'Loan', color: '#8b5cf6' },
];

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
    const [categories, setCategories] = useState<Category[]>(initialCategories);

    const addCategory = (newCat: Omit<Category, 'id'>) => {
        const category: Category = {
            ...newCat,
            id: Math.random().toString(36).substr(2, 9),
        };
        setCategories((prev) => [...prev, category]);
    };

    const updateCategory = (id: string, updates: Partial<Category>) => {
        setCategories((prev) => prev.map((cat) => cat.id === id ? { ...cat, ...updates } : cat));
    };

    const deleteCategory = (id: string) => {
        setCategories((prev) => prev.filter((cat) => cat.id !== id));
    };

    return (
        <CategoryContext.Provider value={{ categories, addCategory, updateCategory, deleteCategory }}>
            {children}
        </CategoryContext.Provider>
    );
};

export const useCategories = () => {
    const context = useContext(CategoryContext);
    if (context === undefined) {
        throw new Error('useCategories must be used within a CategoryProvider');
    }
    return context;
};
