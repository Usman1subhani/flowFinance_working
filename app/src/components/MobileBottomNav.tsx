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
    UserCircle,
    TrendingUp
} from 'lucide-react';

const mobileNavItems = [
    { icon: LayoutDashboard, label: 'Home', id: 'dashboard', href: '/' },
    { icon: Wallet, label: 'Accounts', id: 'accounts', href: '/accounts' },
    { icon: ArrowLeftRight, label: 'Transact', id: 'transactions', href: '/transactions' },
    { icon: BarChart3, label: 'Analytics', id: 'analytics', href: '/analytics' },
    { icon: TrendingUp, label: 'Invest', id: 'investments', href: '/investments' },
    // Profile and History might be tucked away or less prominent, but for now fitting what we can
    { icon: UserCircle, label: 'Profile', id: 'profile', href: '/profile' },
];

const MobileBottomNav = () => {
    const pathname = usePathname();

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-4 py-3 z-50 safe-area-bottom">
            <nav className="flex justify-between items-center max-w-md mx-auto">
                {mobileNavItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.id}
                            href={item.href}
                            className={`flex flex-col items-center gap-1 min-w-[3.5rem] transition-colors ${isActive
                                ? 'text-indigo-600'
                                : 'text-slate-400 hover:text-slate-600'
                                }`}
                        >
                            <div className={`p-1.5 rounded-full transition-all ${isActive ? 'bg-indigo-50' : ''}`}>
                                <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                            </div>
                            <span className={`text-[10px] font-medium ${isActive ? 'text-indigo-600' : 'text-slate-400'}`}>
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
};

export default MobileBottomNav;
