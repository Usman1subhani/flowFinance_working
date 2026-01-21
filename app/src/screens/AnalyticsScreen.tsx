'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { BarChart3 } from 'lucide-react';
import AccountSelector from '../components/analytics/AccountSelector';
import AnalyticsSummary from '../components/analytics/AnalyticsSummary';
import ExpenseCategoryChart from '../components/analytics/ExpenseCategoryChart';
import CategoryBudgets from '../components/analytics/CategoryBudgets';
import TopCategories from '../components/analytics/TopCategories';
import AddBudgetModal from '../components/analytics/AddBudgetModal';
import { useTransactions } from '../context/TransactionContext';
import { useCategories } from '../context/CategoryContext';
import { useAccounts } from '../context/AccountContext';
import { useBudgets } from '../context/BudgetContext';

const AnalyticsScreen = () => {
    const { transactions } = useTransactions();
    const { categories } = useCategories();
    const { accounts } = useAccounts();
    const { budgets, updateBudget } = useBudgets();

    const [selectedAccountId, setSelectedAccountId] = useState<string | 'all'>('all');
    const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);

    // Filter transactions based on selected account
    const filteredTransactions = useMemo(() => {
        if (selectedAccountId === 'all') return transactions;
        return transactions.filter(tx => tx.accountId === selectedAccountId);
    }, [transactions, selectedAccountId]);

    // Calculate Summary Data
    const summary = useMemo(() => {
        return filteredTransactions.reduce((acc, tx) => {
            if (tx.type === 'income') acc.income += tx.amount;
            else acc.expense += tx.amount;
            return acc;
        }, { income: 0, expense: 0 });
    }, [filteredTransactions]);

    const balance = summary.income - summary.expense;

    // Calculate Spending by Category (for Chart)
    const categoryData = useMemo(() => {
        const expenses = filteredTransactions.filter(tx => tx.type === 'expense');
        const grouped = expenses.reduce((acc: Record<string, number>, tx) => {
            const catId = tx.categoryId || 'unknown';
            acc[catId] = (acc[catId] || 0) + tx.amount;
            return acc;
        }, {});

        return Object.entries(grouped)
            .map(([catId, amount]) => {
                const category = categories.find(c => c.id === catId);
                return {
                    name: category?.name || 'Uncategorized',
                    value: amount,
                    color: category?.color || '#cbd5e1'
                };
            })
            .sort((a, b) => b.value - a.value);
    }, [filteredTransactions, categories]);

    // Calculate Top Categories (for Rankings)
    const topCategories = useMemo(() => {
        const expenses = filteredTransactions.filter(tx => tx.type === 'expense');
        const grouped = expenses.reduce((acc: Record<string, { amount: number, count: number }>, tx) => {
            const catId = tx.categoryId || 'unknown';
            if (!acc[catId]) acc[catId] = { amount: 0, count: 0 };
            acc[catId].amount += tx.amount;
            acc[catId].count += 1;
            return acc;
        }, {});

        return Object.entries(grouped)
            .map(([catId, data]) => {
                const category = categories.find(c => c.id === catId);
                return {
                    id: catId,
                    name: category?.name || 'Uncategorized',
                    amount: data.amount,
                    transactionCount: data.count,
                    color: category?.color || '#cbd5e1'
                };
            })
            .sort((a, b) => b.amount - a.amount)
            .slice(0, 5);
    }, [filteredTransactions, categories]);

    // Update Budget Spent Values
    useEffect(() => {
        budgets.forEach(budget => {
            const spent = transactions
                .filter(tx => tx.type === 'expense' && tx.categoryId === budget.categoryId)
                .reduce((acc, tx) => acc + tx.amount, 0);

            if (spent !== budget.spent) {
                updateBudget(budget.id, { spent });
            }
        });
    }, [transactions]); // Update whenever transactions change

    return (
        <div className="max-w-7xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">Analytics</h1>
                    <p className="text-slate-500 font-medium mt-1">Visualize your spending patterns and trends</p>
                </div>
            </div>

            {/* Account Selector */}
            <AccountSelector
                selectedAccountId={selectedAccountId}
                onSelect={setSelectedAccountId}
            />

            {/* Summary Cards */}
            <AnalyticsSummary
                income={summary.income}
                expense={summary.expense}
                balance={balance}
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* 8-col section (adjusted for grid-cols-3 as 2/3) */}
                <div className="lg:col-span-2 space-y-8">
                    <ExpenseCategoryChart data={categoryData} />

                    {/* Placeholder for Daily Trends - as seen in mockup */}
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm min-h-[400px] flex flex-col items-center justify-center grayscale opacity-50">
                        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-4">
                            <BarChart3 size={32} className="text-slate-200" />
                        </div>
                        <h4 className="text-lg font-black text-slate-900">Daily Trends</h4>
                        <p className="text-sm text-slate-400 font-medium">Coming Soon</p>
                    </div>
                </div>

                {/* 4-col section (adjusted for grid-cols-3 as 1/3) */}
                <div className="space-y-8">
                    <CategoryBudgets onAddClick={() => setIsBudgetModalOpen(true)} />
                    <TopCategories data={topCategories} />
                </div>
            </div>

            {/* Modals */}
            <AddBudgetModal
                isOpen={isBudgetModalOpen}
                onClose={() => setIsBudgetModalOpen(false)}
            />
        </div>
    );
};

export default AnalyticsScreen;
