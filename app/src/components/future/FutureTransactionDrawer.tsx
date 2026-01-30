import React, { useState } from 'react';
import { CalendarClock, X } from 'lucide-react';
import FutureTransactionForm from './FutureTransactionForm';
import FutureTransactionList from './FutureTransactionList';

const FutureTransactionDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Trigger Button - Right Center */}
            <button
                onClick={() => setIsOpen(true)}
                className={`fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-indigo-600 text-white p-3 rounded-l-2xl shadow-xl shadow-indigo-200 hover:pl-5 transition-all duration-300 group ${isOpen ? 'translate-x-[100%]' : 'translate-x-0'}`}
            >
                <div className="flex flex-col items-center gap-1 writing-vertical-rl">
                    <CalendarClock size={24} />
                </div>
                {/* Tooltip-ish label that appears on hover could be cool, but keeping it simple for now */}
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-50 transition-opacity"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Drawer */}
            <div className={`fixed inset-y-0 right-0 z-[60] w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white">
                        <div>
                            <h2 className="text-xl font-black text-slate-800">Future Transactions</h2>
                            <p className="text-sm font-medium text-slate-400">Plan ahead, commit later</p>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 hover:bg-slate-50 rounded-full text-slate-400 transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Content - Scrollable */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-8 pb-32">
                        <section>
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Add New</h3>
                            <FutureTransactionForm />
                        </section>

                        <div className="h-px bg-slate-100" />

                        <section>
                            <FutureTransactionList />
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FutureTransactionDrawer;
