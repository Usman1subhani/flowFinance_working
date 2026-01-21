'use client';

import React, { useState, useMemo } from 'react';
import { Plus, Download, Filter as FilterIcon } from 'lucide-react';
import TransactionFilters from '../../components/transactions/TransactionFilters';
import TransactionItem from '../../components/transactions/TransactionItem';
import TransactionModal from '../../components/transactions/TransactionModal';
import { useTransactions, Transaction } from '../../context/TransactionContext';

const TransactionsScreen = () => {
    const { transactions, addTransaction, updateTransaction, deleteTransaction } = useTransactions();

    // Filters state
    const [search, setSearch] = useState('');
    const [accountFilter, setAccountFilter] = useState('all');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [minAmount, setMinAmount] = useState('');
    const [maxAmount, setMaxAmount] = useState('');

    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState<'income' | 'expense'>('expense');
    const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);

    const filteredTransactions = useMemo(() => {
        return transactions.filter((tx) => {
            const matchesSearch = tx.title.toLowerCase().includes(search.toLowerCase());
            const matchesAccount = accountFilter === 'all' || tx.accountId === accountFilter;
            const matchesCategory = categoryFilter === 'all' || tx.categoryId === categoryFilter;

            const txDate = new Date(tx.date).getTime();
            const matchesDateFrom = !dateFrom || txDate >= new Date(dateFrom).getTime();
            const matchesDateTo = !dateTo || txDate <= new Date(dateTo).getTime();

            const matchesMinAmount = !minAmount || tx.amount >= parseFloat(minAmount);
            const matchesMaxAmount = !maxAmount || tx.amount <= parseFloat(maxAmount);

            return matchesSearch && matchesAccount && matchesCategory && matchesDateFrom && matchesDateTo && matchesMinAmount && matchesMaxAmount;
        });
    }, [transactions, search, accountFilter, categoryFilter, dateFrom, dateTo, minAmount, maxAmount]);

    const handleOpenModal = (type: 'income' | 'expense') => {
        setModalType(type);
        setEditingTransaction(null);
        setIsModalOpen(true);
    };

    const handleEditTransaction = (tx: Transaction) => {
        setEditingTransaction(tx);
        setIsModalOpen(true);
    };

    return (
        <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">Transactions</h1>
                    <p className="text-slate-500 font-medium mt-1">Track all your income and expenses</p>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => handleOpenModal('income')}
                        className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-bold transition-all shadow-lg shadow-emerald-100 active:scale-95"
                    >
                        <Plus size={18} />
                        <span>Income</span>
                    </button>
                    <button
                        onClick={() => handleOpenModal('expense')}
                        className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3.5 bg-rose-500 hover:bg-rose-600 text-white rounded-2xl font-bold transition-all shadow-lg shadow-rose-100 active:scale-95"
                    >
                        <Plus size={18} />
                        <span>Expense</span>
                    </button>
                </div>
            </div>

            {/* Filters */}
            <TransactionFilters
                onSearchChange={setSearch}
                onAccountChange={setAccountFilter}
                onCategoryChange={setCategoryFilter}
                onDateFromChange={setDateFrom}
                onDateToChange={setDateTo}
                onMinAmountChange={setMinAmount}
                onMaxAmountChange={setMaxAmount}
            />

            {/* Transactions List */}
            <div className="space-y-4">
                <div className="flex items-center justify-between mb-4 px-2">
                    <h2 className="text-sm font-black text-slate-600 uppercase tracking-widest flex items-center gap-2">
                        {filteredTransactions.length} Transactions Found
                    </h2>
                    <button className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 rounded-lg transition-colors">
                        <Download size={14} />
                        Export
                    </button>
                </div>

                <div className="space-y-3">
                    {filteredTransactions.length > 0 ? (
                        filteredTransactions.map((tx) => (
                            <TransactionItem
                                key={tx.id}
                                transaction={tx}
                                onEdit={handleEditTransaction}
                                onDelete={deleteTransaction}
                            />
                        ))
                    ) : (
                        <div className="bg-white p-20 rounded-3xl border border-dashed border-slate-200 flex flex-col items-center justify-center text-center">
                            <div className="w-16 h-16 bg-slate-50 text-slate-300 rounded-2xl flex items-center justify-center mb-4">
                                <FilterIcon size={32} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900">No transactions found</h3>
                            <p className="text-slate-500 max-w-xs mt-1">Try adjusting your filters or search terms to find what you're looking for.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Transaction Modal */}
            <TransactionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={addTransaction}
                onUpdate={updateTransaction}
                editingTransaction={editingTransaction}
                initialType={modalType}
            />
        </div>
    );
};

export default TransactionsScreen;
