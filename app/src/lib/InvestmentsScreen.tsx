'use client';

import React, { useState } from 'react';
import { useInvestments, Investment } from '../context/InvestmentContext';
import { Plus, TrendingUp, PieChart, DollarSign, Trash2, Edit2 } from 'lucide-react';
import AddInvestmentModal from '../components/investments/AddInvestmentModal';

const InvestmentsScreen = () => {
    const { investments, totalInvested, stockTotal, mutualFundTotal, addInvestment, updateInvestment, deleteInvestment } = useInvestments();
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [editingInvestment, setEditingInvestment] = useState<Investment | null>(null);

    const handleEdit = (investment: Investment) => {
        setEditingInvestment(investment);
        setIsAddModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsAddModalOpen(false);
        setEditingInvestment(null);
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                        Investments
                    </h1>
                    <p className="text-slate-500 font-bold text-xs md:text-sm mt-1">Track your stocks and mutual funds</p>
                </div>
                <button
                    onClick={() => {
                        setEditingInvestment(null);
                        setIsAddModalOpen(true);
                    }}
                    className="flex items-center justify-center gap-2 px-5 py-3 md:px-6 md:py-3 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-indigo-100 active:scale-95 w-full md:w-auto"
                >
                    <Plus size={20} />
                    Add Investment
                </button>
            </header>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {/* Total Investment */}
                <div className="p-5 md:p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-100">
                            <DollarSign size={24} />
                        </div>
                        <div>
                            <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest">Total Invested</p>
                            <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                                ${totalInvested.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Stock Investments */}
                <div className="p-5 md:p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-indigo-500 flex items-center justify-center text-white shadow-lg shadow-indigo-100">
                            <TrendingUp size={24} />
                        </div>
                        <div>
                            <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest">Stocks</p>
                            <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                                ${stockTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Mutual Funds */}
                <div className="p-5 md:p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-violet-500 flex items-center justify-center text-white shadow-lg shadow-violet-100">
                            <PieChart size={24} />
                        </div>
                        <div>
                            <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest">Mutual Funds</p>
                            <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                                ${mutualFundTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Investments List */}
            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
                <div className="p-5 md:p-6 border-b border-slate-100 flex items-center justify-between">
                    <h2 className="text-sm font-black text-slate-400 uppercase tracking-widest">Portfolio Holdings</h2>
                    <span className="bg-slate-50 text-slate-400 text-[10px] font-black px-2 py-1 rounded-md uppercase">
                        {investments.length} Assets
                    </span>
                </div>
                <div className="divide-y divide-slate-100">
                    {investments.length === 0 ? (
                        <div className="p-12 md:p-20 text-center">
                            <div className="w-16 h-16 bg-slate-50 text-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <PieChart size={32} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900">No investments added yet</h3>
                            <p className="text-slate-500 text-sm mt-1 max-w-xs mx-auto">Start tracking your stocks and mutual funds by adding your first investment.</p>
                        </div>
                    ) : (
                        investments.map((investment) => (
                            <div key={investment.id} className="group transition-all">
                                {/* Desktop Layout */}
                                <div className="hidden md:flex p-5 items-center justify-between hover:bg-slate-50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300 ${investment.type === 'stock'
                                            ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-100'
                                            : 'bg-violet-500 text-white shadow-lg shadow-violet-100'
                                            }`}>
                                            {investment.type === 'stock' ? <TrendingUp size={20} /> : <PieChart size={20} />}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800 tracking-tight">{investment.name}</h4>
                                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                                                {investment.type === 'stock' ? 'Stock' : 'Mutual Fund'} • {investment.date}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="text-right">
                                            <p className="font-black text-emerald-500 tracking-tight">
                                                +${investment.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                onClick={() => handleEdit(investment)}
                                                className="p-1.5 hover:bg-indigo-50 text-slate-400 hover:text-indigo-600 rounded-lg transition-all"
                                            >
                                                <Edit2 size={16} />
                                            </button>
                                            <button
                                                onClick={() => deleteInvestment(investment.id)}
                                                className="p-1.5 hover:bg-rose-50 text-slate-400 hover:text-rose-600 rounded-lg transition-all"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile Layout */}
                                <div className="flex md:hidden flex-col gap-3 p-5">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${investment.type === 'stock'
                                                ? 'bg-indigo-500 text-white shadow-md'
                                                : 'bg-violet-500 text-white shadow-md'
                                                }`}>
                                                {investment.type === 'stock' ? <TrendingUp size={20} /> : <PieChart size={20} />}
                                            </div>
                                            <div>
                                                <h4 className="text-[15px] font-bold text-slate-800 tracking-tight leading-tight mb-1">{investment.name}</h4>
                                                <span className="text-[11px] font-bold text-slate-400">
                                                    {investment.date}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 pt-1">
                                            <button
                                                onClick={() => handleEdit(investment)}
                                                className="p-1.5 text-slate-400 hover:text-indigo-600"
                                            >
                                                <Edit2 size={18} />
                                            </button>
                                            <button
                                                onClick={() => deleteInvestment(investment.id)}
                                                className="p-1.5 text-slate-400 hover:text-rose-600"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="pl-[3.25rem] -mt-1 flex flex-col gap-3">
                                        <div>
                                            <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider ${investment.type === 'stock'
                                                ? 'bg-indigo-50 text-indigo-500'
                                                : 'bg-violet-50 text-violet-500'
                                                }`}>
                                                {investment.type === 'stock' ? 'Stock' : 'Mutual Fund'}
                                            </span>
                                        </div>
                                        <div className="text-[18px] font-black tracking-tight text-emerald-500">
                                            +${investment.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <AddInvestmentModal
                isOpen={isAddModalOpen}
                onClose={handleCloseModal}
                onAdd={addInvestment}
                onUpdate={updateInvestment}
                editInvestment={editingInvestment}
            />
        </div>
    );
};

export default InvestmentsScreen;
