'use client';

import React, { useState, useMemo } from 'react';
import { X, Lock, AlertCircle, CheckCircle2, ChevronRight } from 'lucide-react';
import { Account } from '../../context/AccountContext';
import { Transaction } from '../../context/TransactionContext';

interface CloseMonthModalProps {
    isOpen: boolean;
    onClose: () => void;
    accounts: Account[];
    transactions: Transaction[];
    onConfirm: (config: CloseMonthConfig) => void;
}

export interface CloseMonthConfig {
    monthName: string;
    carryForwardAccountIds: string[]; // Keep all transactions and balance
    carryBalanceAccountIds: string[]; // Clear transactions, set current balance as starting
}

const CloseMonthModal: React.FC<CloseMonthModalProps> = ({
    isOpen,
    onClose,
    accounts,
    transactions,
    onConfirm
}) => {
    const now = new Date();
    const currentMonthLabel = now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    const [monthName, setMonthName] = useState(currentMonthLabel);
    const [carryForwardIds, setCarryForwardIds] = useState<string[]>([]);
    const [carryBalanceIds, setCarryBalanceIds] = useState<string[]>([]);

    const accountStats = useMemo(() => {
        return accounts.map(acc => {
            const accTransactions = transactions.filter(tx => tx.accountId === acc.id);
            const monthlyIncomes = accTransactions.filter(tx => tx.type === 'income' && new Date(tx.date) >= startOfMonth);
            const monthlyExpenses = accTransactions.filter(tx => tx.type === 'expense' && new Date(tx.date) >= startOfMonth);

            const income = accTransactions.filter(tx => tx.type === 'income').reduce((sum, tx) => sum + tx.amount, 0);
            const expense = accTransactions.filter(tx => tx.type === 'expense').reduce((sum, tx) => sum + tx.amount, 0);
            const startBalance = parseFloat(acc.startingBalance.replace(/[$,]/g, '')) || 0;
            const currentBalance = startBalance + income - expense;

            return {
                ...acc,
                incomeCount: monthlyIncomes.length,
                expenseCount: monthlyExpenses.length,
                dynamicBalanceFormatted: `$${currentBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}`,
                numericBalance: currentBalance
            };
        });
    }, [accounts, transactions]);

    const totals = useMemo(() => {
        const income = transactions
            .filter(tx => tx.type === 'income' && new Date(tx.date) >= startOfMonth)
            .reduce((sum, tx) => sum + tx.amount, 0);
        const expenses = transactions
            .filter(tx => tx.type === 'expense' && new Date(tx.date) >= startOfMonth)
            .reduce((sum, tx) => sum + tx.amount, 0);
        return {
            income,
            expenses,
            net: income - expenses,
            periodStart: startOfMonth.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            periodEnd: new Date(now.setDate(now.getDate() - 1)).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        };
    }, [transactions]);

    if (!isOpen) return null;

    const toggleCarryForward = (id: string) => {
        setCarryForwardIds(prev => {
            const isAdding = !prev.includes(id);
            if (isAdding) {
                // If adding to carry forward, remove from carry balance
                setCarryBalanceIds(bPrev => bPrev.filter(bid => bid !== id));
                return [...prev, id];
            }
            return prev.filter(pId => pId !== id);
        });
    };

    const toggleCarryBalance = (id: string) => {
        setCarryBalanceIds(prev => {
            const isAdding = !prev.includes(id);
            if (isAdding) {
                return [...prev, id];
            }
            return prev.filter(pId => pId !== id);
        });
    };

    const handleConfirm = () => {
        onConfirm({
            monthName,
            carryForwardAccountIds: carryForwardIds,
            carryBalanceAccountIds: carryBalanceIds
        });
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[500px] max-h-[90vh] overflow-hidden flex flex-col">
                {/* Header */}
                <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-bold text-slate-800">Close Current Month</h2>
                        <p className="text-[12px] text-slate-500 font-medium">This will save your current month&apos;s data to history. The period will close as of yesterday.</p>
                    </div>
                    <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-all">
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-5 custom-scrollbar">
                    {/* Warning */}
                    <div className="mb-6 p-4 bg-amber-50 rounded-xl border border-amber-100 flex gap-3">
                        <AlertCircle className="text-amber-500 shrink-0" size={20} />
                        <p className="text-[13px] text-amber-800 leading-relaxed">
                            <span className="font-bold">Warning:</span> Transactions from non-selected accounts will be cleared. Your data will be saved in History.
                        </p>
                    </div>

                    {/* Month Name */}
                    <div className="mb-6">
                        <label className="block text-[13px] font-bold text-slate-700 mb-2">Month Name</label>
                        <input
                            type="text"
                            value={monthName}
                            onChange={(e) => setMonthName(e.target.value)}
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                            placeholder="e.g. January 2026"
                        />
                    </div>

                    {/* Section 1: Carry Forward Accounts */}
                    <div className="mb-6">
                        <label className="block text-[13px] font-bold text-slate-700 mb-3">Select Accounts to Carry Forward</label>
                        <div className="space-y-3">
                            {accountStats.map(acc => (
                                <div
                                    key={acc.id}
                                    onClick={() => toggleCarryForward(acc.id)}
                                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center gap-4 ${carryForwardIds.includes(acc.id)
                                        ? 'border-indigo-500 bg-indigo-50/30'
                                        : 'border-slate-100 bg-white hover:border-slate-200'
                                        }`}
                                >
                                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${carryForwardIds.includes(acc.id)
                                        ? 'bg-indigo-600 border-indigo-600'
                                        : 'border-slate-300'
                                        }`}>
                                        {carryForwardIds.includes(acc.id) && <CheckCircle2 size={14} className="text-white" />}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[14px] font-bold text-slate-800">{acc.name}</span>
                                            <div className="w-4 h-4 rounded-md" style={{ backgroundColor: acc.color }}></div>
                                        </div>
                                        <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                                            Current: {acc.dynamicBalanceFormatted} • +{acc.incomeCount} incomes, {acc.expenseCount} expenses
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="mt-2 text-[11px] text-slate-400 font-medium">Selected accounts will keep their transactions and current balance.</p>
                    </div>

                    {/* Section 2: Carry Balance Forward */}
                    <div className="mb-6">
                        <label className="block text-[13px] font-bold text-slate-700 mb-3">Carry Balance Forward (Other Accounts)</label>
                        <div className="space-y-3">
                            {accountStats.filter(acc => !carryForwardIds.includes(acc.id)).map(acc => (
                                <div
                                    key={acc.id}
                                    onClick={() => toggleCarryBalance(acc.id)}
                                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center gap-4 ${carryBalanceIds.includes(acc.id)
                                        ? 'border-indigo-500 bg-indigo-50/30'
                                        : 'border-slate-100 bg-white hover:border-slate-200'
                                        }`}
                                >
                                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${carryBalanceIds.includes(acc.id)
                                        ? 'bg-indigo-600 border-indigo-600'
                                        : 'border-slate-300'
                                        }`}>
                                        {carryBalanceIds.includes(acc.id) && <CheckCircle2 size={14} className="text-white" />}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[14px] font-bold text-slate-800">{acc.name}</span>
                                            <div className="w-4 h-4 rounded-md" style={{ backgroundColor: acc.color }}></div>
                                        </div>
                                        <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                                            Balance: {acc.dynamicBalanceFormatted} → will become starting balance
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="mt-2 text-[11px] text-slate-400 font-medium">Selected accounts will start the new month with their current balance (transactions will be cleared).</p>
                    </div>

                    {/* Summary */}
                    <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-[13px] text-slate-500 font-medium">Period:</span>
                            <span className="text-[13px] text-slate-700 font-bold">{totals.periodStart} - {totals.periodEnd}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-[13px] text-slate-500 font-medium">Total Income:</span>
                            <span className="text-[14px] text-emerald-600 font-bold">${totals.income.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-[13px] text-slate-500 font-medium">Total Expenses:</span>
                            <span className="text-[14px] text-rose-500 font-bold">${totals.expenses.toLocaleString()}</span>
                        </div>
                        <div className="h-px bg-slate-200 mb-4"></div>
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-[15px] text-slate-800 font-bold">Net Balance:</span>
                            <span className="text-[16px] text-emerald-600 font-extrabold">${totals.net.toLocaleString()}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 font-medium italic">Note: Today&apos;s transactions will be part of the new month</p>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="p-5 border-t border-slate-100 bg-white flex items-center gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 py-3 text-slate-600 font-bold text-[14px] hover:bg-slate-50 rounded-xl transition-all border border-slate-200"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleConfirm}
                        className="flex-[1.5] py-3 bg-indigo-600 text-white font-bold text-[14px] rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-95 flex items-center justify-center gap-2"
                    >
                        Close Month
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CloseMonthModal;
