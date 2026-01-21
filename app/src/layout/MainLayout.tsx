'use client';

import React from 'react';
import Sidebar from '../components/Sidebar';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-slate-50 flex">
            <Sidebar />
            <main className="flex-1 ml-64 min-h-screen">
                <div className="p-8 lg:p-12 max-w-[1440px] mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default MainLayout;
