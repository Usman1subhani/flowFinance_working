'use client';

import React from 'react';

const SigninSideContent = () => {
    return (
        <div className="hidden lg:flex flex-1 bg-gradient-to-br from-indigo-600 to-violet-700 p-12 relative overflow-hidden items-center justify-center">
            {/* Pattern/Background shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full mix-blend-overlay filter blur-3xl -mr-64 -mt-64"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-400/20 rounded-full mix-blend-overlay filter blur-3xl -ml-40 -mb-40"></div>

            <div className="relative w-full max-w-[600px] text-center z-10">
                <h2 className="text-4xl xl:text-5xl font-black text-white leading-tight mb-6">
                    Effortlessly manage your <br /> team and operations.
                </h2>
                <p className="text-indigo-100 text-lg font-medium mb-12 opacity-90">
                    Log in to access your CRM dashboard and manage your team.
                </p>

                {/* Dashboard Preview Placeholder */}
                <div className="mx-auto w-full aspect-[3/2] bg-white/5 backdrop-blur-xl border-2 border-white/20 rounded-3xl p-4 shadow-2xl relative">
                    <div className="w-full h-full border border-black/10 rounded-2xl flex items-center justify-center bg-white/10 overflow-hidden group">
                        <div className="text-white/40 font-black tracking-widest uppercase text-sm group-hover:text-white/60 transition-colors">
                            Dashboard Preview Image
                        </div>

                        {/* Simulated UI elements for better look */}
                        <div className="absolute top-8 left-8 w-24 h-8 bg-white/10 rounded-lg"></div>
                        <div className="absolute top-8 right-8 w-8 h-8 bg-white/10 rounded-full"></div>
                        <div className="absolute bottom-12 left-8 right-8 h-32 bg-white/5 rounded-2xl border border-white/10"></div>
                        <div className="absolute top-24 left-8 right-8 flex gap-4">
                            <div className="flex-1 h-20 bg-white/10 rounded-xl"></div>
                            <div className="flex-1 h-20 bg-white/10 rounded-xl"></div>
                            <div className="flex-1 h-20 bg-white/10 rounded-xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SigninSideContent;
