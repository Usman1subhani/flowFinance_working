'use client';

import React, { useState } from 'react';
import { useInvestments } from '../../context/InvestmentContext';
import { Plus, TrendingUp, PieChart, DollarSign, Trash2 } from 'lucide-react';
import AddInvestmentModal from '../../components/investments/AddInvestmentModal';

const InvestmentsScreen = () => {
    const { investments, totalInvested, stockTotal, mutualFundTotal, addInvestment, deleteInvestment } = useInvestments();
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    return (
        <div className="space-y-8">
            <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
                        Investments
                    </h1>
                    <p className="text-slate-500 mt-1 font-medium">Track your stocks and mutual funds</p>
                </div>
                <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-indigo-200 hover:shadow-indigo-300 active:scale-95"
                >
                    <Plus size={20} />
                    Add Investment
                </button>
            </header>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Total Investment */}
                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                            <DollarSign size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Total Invested</p>
                            <h3 className="text-2xl font-bold text-slate-900">
                                ${totalInvested.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Stock Investments */}
                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                            <TrendingUp size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Stocks</p>
                            <h3 className="text-2xl font-bold text-slate-900">
                                ${stockTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Mutual Funds */}
                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600">
                            <PieChart size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Mutual Funds</p>
                            <h3 className="text-2xl font-bold text-slate-900">
                                ${mutualFundTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Investments List */}
            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                    <h2 className="text-lg font-bold text-slate-900">Portfolio Holdings</h2>
                </div>
                <div className="divide-y divide-slate-50">
                    {investments.length === 0 ? (
                        <div className="p-12 text-center text-slate-400">
                            <PieChart size={48} className="mx-auto mb-4 opacity-50" />
                            <p className="font-medium">No investments added yet</p>
                        </div>
                    ) : (
                        investments.map((investment) => (
                            <div key={investment.id} className="p-5 flex items-center justify-between hover:bg-slate-50 transition-colors group">
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${investment.type === 'stock'
                                        ? 'bg-indigo-100 text-indigo-600'
                                        : 'bg-violet-100 text-violet-600'
                                        }`}>
                                        {investment.type === 'stock' ? <TrendingUp size={20} /> : <PieChart size={20} />}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{investment.name}</h4>
                                        <p className="text-sm text-slate-500 font-medium">
                                            {investment.type === 'stock' ? 'Stock' : 'Mutual Fund'} • {investment.date}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="text-right">
                                        <p className="font-bold text-emerald-600">
                                            +${investment.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => deleteInvestment(investment.id)}
                                        className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <AddInvestmentModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onAdd={addInvestment}
            />
        </div>
    );
};

export default InvestmentsScreen;
