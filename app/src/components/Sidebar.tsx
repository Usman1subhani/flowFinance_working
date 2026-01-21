'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Wallet,
    ArrowLeftRight,
    BarChart3,
    History,
    Tags,
    UserCircle,
    LogOut,
    Wallet2
} from 'lucide-react';

const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard', href: '/' },
    { icon: Wallet, label: 'Accounts', id: 'accounts', href: '/accounts' },
    { icon: ArrowLeftRight, label: 'Transactions', id: 'transactions', href: '/transactions' },
    { icon: BarChart3, label: 'Analytics', id: 'analytics', href: '/analytics' },
    { icon: History, label: 'History', id: 'history', href: '/history' },
    { icon: Tags, label: 'Categories', id: 'categories', href: '/categories' },
    { icon: UserCircle, label: 'Profile', id: 'profile', href: '/profile' },
];

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-100 flex flex-col z-50">
            {/* Logo */}
            <div className="p-6 mb-2">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                        <Wallet2 size={24} />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold text-slate-900 leading-none">FinanceFlow</h1>
                        <p className="text-[10px] text-slate-500 mt-1 font-medium -tracking-tight uppercase">Smart Money Manager</p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-2 space-y-1">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.id}
                            href={item.href}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                                    ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-200/50'
                                    : 'text-slate-500 hover:bg-slate-50 hover:text-indigo-600'
                                }`}
                        >
                            <Icon size={20} className={isActive ? 'text-white' : 'group-hover:text-indigo-600'} />
                            <span className="text-sm font-semibold">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* User Support / Profile */}
            <div className="p-4 mt-auto border-t border-slate-100">
                <div className="flex items-center gap-3 bg-slate-50/50 p-3 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer group">
                    <div className="w-10 h-10 rounded-full bg-emerald-400 flex items-center justify-center text-white font-bold text-sm ring-4 ring-white shadow-sm shrink-0">
                        U
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-slate-900 truncate">Usman Subhani</p>
                        <p className="text-xs text-slate-500 truncate">subhaniusman420@gm...</p>
                    </div>
                    <button className="text-slate-400 group-hover:text-rose-500 transition-colors shrink-0">
                        <LogOut size={18} />
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
