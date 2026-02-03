'use client';

import React from 'react';
import Sidebar from '../components/Sidebar';
import MobileBottomNav from '../components/MobileBottomNav';
import FutureTransactionDrawer from '../components/future/FutureTransactionDrawer';
import { usePathname } from 'next/navigation';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const pathname = usePathname();
    const isAuthPage = pathname === '/signin';

    if (isAuthPage) {
        return (
            <div className="min-h-screen bg-white">
                <main className="w-full">
                    {children}
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row pb-24 md:pb-0">
            <Sidebar />
            <MobileBottomNav />
            <FutureTransactionDrawer />
            <main className="flex-1 md:ml-64 min-h-screen w-full">
                <div className="p-4 md:p-8 lg:p-12 max-w-[1440px] mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default MainLayout;
