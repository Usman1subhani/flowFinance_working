'use client';

import React, { useState } from 'react';
import { Eye, EyeOff, Wallet2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const SigninForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Since we don't have auth yet, just navigate to dashboard
        router.push('/');
    };

    return (
        <div className="w-full max-w-[440px] px-6 py-12 md:py-20 mx-auto bg-white flex flex-col justify-center min-h-full">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-12">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                    <Wallet2 size={20} />
                </div>
                <span className="text-xl font-bold text-slate-900">FinanceFlow</span>
            </div>

            {/* Header */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Welcome Back</h2>
                <p className="text-slate-500 font-medium">Enter your email and password to access your account.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                    <label className="text-[11px] font-black text-slate-700 uppercase tracking-widest px-1">Email</label>
                    <input
                        type="email"
                        placeholder="name@company.com"
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between px-1">
                        <label className="text-[11px] font-black text-slate-700 uppercase tracking-widest">Password</label>
                    </div>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Min. 8 characters"
                            className="w-full px-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 transition-colors"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-between px-1">
                    <label className="flex items-center gap-2 cursor-pointer group">
                        <div className="relative flex items-center">
                            <input type="checkbox" className="peer sr-only" />
                            <div className="w-4 h-4 border-2 border-slate-200 rounded peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-all"></div>
                            <svg className="absolute w-3 h-3 text-white hidden peer-checked:block left-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <span className="text-sm font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">Remember Me</span>
                    </label>
                    <button type="button" className="text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
                        Forgot Your Password?
                    </button>
                </div>

                <button
                    type="submit"
                    className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-sm shadow-xl shadow-indigo-100 transition-all active:scale-[0.98] mt-2"
                >
                    Log In
                </button>
            </form>

            <div className="relative my-10">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-100"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase tracking-widest font-black text-slate-400">
                    <span className="bg-white px-4">Or Login With</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-3 py-3.5 px-4 bg-white border border-slate-100 rounded-xl hover:bg-slate-50 transition-all group">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900">Google</span>
                </button>
                <button className="flex items-center justify-center gap-3 py-3.5 px-4 bg-white border border-slate-100 rounded-xl hover:bg-slate-50 transition-all group">
                    <svg className="w-5 h-5 fill-slate-900" viewBox="0 0 24 24">
                        <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C4.1 16.5 3.3 10.4 6.1 6.3c1.4-2 3.5-3 5.3-3 .92-.04 1.94.3 2.76.3.8 0 2.2-.43 3.45-.3 1.5.16 2.65.65 3.4 1.7-3.1 1.8-2.6 6-.1 8.2-.7 1.8-1.6 3.6-2.76 4.67zM12.03 7.3c-.02-3.8 3.1-6.94 6.9-6.9 0 3.8-3.1 7.1-6.9 6.9z" />
                    </svg>
                    <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900">Apple</span>
                </button>
            </div>

            <p className="mt-12 text-center text-sm font-semibold text-slate-500">
                Don't Have An Account? <button className="text-indigo-600 hover:text-indigo-700 font-bold transition-colors">Register Now.</button>
            </p>

            <div className="mt-auto pt-10 flex flex-col sm:flex-row items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-400 gap-4">
                <span>Copyright © 2025 FinanceFlow LTD.</span>
                <span className="cursor-pointer hover:text-indigo-600 transition-colors">Privacy Policy</span>
            </div>
        </div>
    );
};

export default SigninForm;
