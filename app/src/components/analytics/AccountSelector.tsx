'use client';

import React from 'react';
import { Wallet, Eye, EyeOff } from 'lucide-react';
import { useAccounts, Account } from '../../context/AccountContext';
import { useTransactions } from '../../context/TransactionContext';

interface AccountSelectorProps {
    selectedAccountId: string | 'all';
    onSelect: (id: string | 'all') => void;
}

const AccountSelector: React.FC<AccountSelectorProps> = ({ selectedAccountId, onSelect }) => {
    const { accounts } = useAccounts();
    const { transactions } = useTransactions();
    const [isBalancesVisible, setIsBalancesVisible] = React.useState(true);

    const calculateBalance = (account: Account) => {
        const accTransactions = transactions.filter(tx => tx.accountId === account.id);
        const income = accTransactions.filter(tx => tx.type === 'income').reduce((sum, tx) => sum + tx.amount, 0);
        const expense = accTransactions.filter(tx => tx.type === 'expense').reduce((sum, tx) => sum + tx.amount, 0);
        const startBalance = parseFloat(account.startingBalance.replace(/[$,]/g, '')) || 0;
        return startBalance + income - expense;
    };

    const totalAssets = accounts.reduce((sum, acc) => sum + calculateBalance(acc), 0);

    return (
        <div className="flex items-center gap-4 overflow-x-auto pb-4 -mx-1 px-1 scrollbar-hide">
            {/* All Accounts Option */}
            <div
                onClick={() => onSelect('all')}
                className={`min-w-[240px] p-5 rounded-[1rem] border transition-all duration-300 cursor-pointer ${selectedAccountId === 'all'
                    ? 'bg-white border-indigo-500 shadow-xl shadow-indigo-100/30'
                    : 'bg-white border-slate-100 hover:border-slate-200 shadow-sm opacity-60 grayscale-[0.5]'
                    }`}
            >
                <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-sm">
                        <Wallet size={18} />
                    </div>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsBalancesVisible(!isBalancesVisible);
                        }}
                        className="text-slate-400 hover:text-indigo-500 transition-colors p-1"
                    >
                        {isBalancesVisible ? <Eye size={16} /> : <EyeOff size={16} />}
                    </button>
                </div>
                <div>
                    <h4 className="text-slate-500 text-[12px] font-bold uppercase tracking-widest mb-1">All Accounts</h4>
                    <div className="flex items-baseline gap-2">
                        <span className="text-lg font-black text-slate-900 tracking-tight">
                            {isBalancesVisible ? `$${totalAssets.toLocaleString(undefined, { minimumFractionDigits: 2 })}` : '••••••'}
                        </span>
                    </div>
                </div>
            </div>

            {/* Individual Accounts */}
            {accounts.map((acc) => (
                <div
                    key={acc.id}
                    onClick={() => onSelect(acc.id)}
                    className={`min-w-[240px] p-5 rounded-[1rem] border transition-all duration-300 cursor-pointer ${selectedAccountId === acc.id
                        ? 'bg-white border-indigo-500 shadow-xl shadow-indigo-100/30'
                        : 'bg-white border-slate-100 hover:border-slate-200 shadow-sm opacity-60 grayscale-[0.5]'
                        }`}
                >
                    <div className="flex items-center justify-between mb-4">
                        <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-sm"
                            style={{ backgroundColor: acc.color }}
                        >
                            <Wallet size={18} />
                        </div>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsBalancesVisible(!isBalancesVisible);
                            }}
                            className="text-slate-400 hover:text-indigo-500 transition-colors p-1"
                        >
                            {isBalancesVisible ? <Eye size={16} /> : <EyeOff size={16} />}
                        </button>
                    </div>
                    <div>
                        <h4 className="text-slate-500 text-[12px] font-bold uppercase tracking-widest mb-1 truncate max-w-[150px]">
                            {acc.name}
                        </h4>
                        <div className="flex items-baseline gap-2">
                            <span className="text-lg font-black text-slate-900 tracking-tight">
                                {isBalancesVisible ? `$${calculateBalance(acc).toLocaleString(undefined, { minimumFractionDigits: 2 })}` : '••••••'}
                            </span>
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{acc.currency}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AccountSelector;
