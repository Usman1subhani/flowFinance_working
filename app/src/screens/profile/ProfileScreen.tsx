'use client';

import React, { useState, useEffect } from 'react';
import { Shield, Save, LogOut, User, Mail, Edit3, X, History, ChevronRight, Clock } from 'lucide-react';
import { useUser } from '../../context/UserContext';
import Link from 'next/link';

const ProfileScreen = () => {
    // Get user from global state
    const { user, updateUser } = useUser();

    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(user.name);

    // Sync local editedName when user changes
    useEffect(() => {
        setEditedName(user.name);
    }, [user.name]);

    const handleSave = () => {
        updateUser({ name: editedName });
        setIsEditing(false);
    };

    const handleLogout = () => {
        console.log('Logging out...');
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20 md:pb-0">
            {/* Header */}
            <div>
                <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Profile</h1>
                <p className="text-slate-500 font-medium mt-1">Manage your account settings and preferences</p>
            </div>

            {/* User Info Card */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-indigo-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -mr-32 -mt-32"></div>

                <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                    <div className={`w-24 h-24 ${user.avatarColor} rounded-full flex items-center justify-center text-white shadow-lg shadow-indigo-100`}>
                        <span className="text-3xl font-bold">{user.name.charAt(0)}</span>
                    </div>

                    <div className="flex-1 pt-2">
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight">{user.name}</h2>
                        <div className="flex items-center justify-center sm:justify-start gap-2 mt-1 text-slate-500 font-medium">
                            <Mail size={16} />
                            <span>{user.email}</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 mt-4 bg-indigo-50 text-indigo-700 rounded-full text-xs font-black uppercase tracking-wider">
                            <Shield size={12} strokeWidth={3} />
                            {user.role}
                        </div>
                    </div>
                </div>
            </div>

            {/* Activities & History */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                    <Clock size={20} className="text-slate-400" />
                    <h3 className="text-lg font-bold text-slate-900">Activities & History</h3>
                </div>

                <Link
                    href="/history"
                    className="flex items-center justify-between p-4 bg-slate-50 hover:bg-indigo-50/50 border border-slate-100 hover:border-indigo-100 rounded-xl transition-all group"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-indigo-600 shadow-sm group-hover:scale-110 transition-transform">
                            <History size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">Month History</h4>
                            <p className="text-xs text-slate-500 font-medium">View and manage your closed months</p>
                        </div>
                    </div>
                    <ChevronRight size={20} className="text-slate-300 group-hover:text-indigo-400 transition-colors group-hover:translate-x-1" />
                </Link>
            </div>

            {/* Personal Information Form */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                    <User size={20} className="text-slate-400" />
                    <h3 className="text-lg font-bold text-slate-900">Personal Information</h3>
                </div>

                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[11px] font-black text-slate-700 uppercase tracking-widest px-1">Full Name</label>
                        <div className="relative">
                            <input
                                type="text"
                                value={isEditing ? editedName : user.name}
                                onChange={(e) => setEditedName(e.target.value)}
                                disabled={!isEditing}
                                className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all ${isEditing ? 'border-indigo-200 bg-white' : 'border-slate-100 opacity-75'
                                    }`}
                            />
                            {!isEditing && (
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
                                >
                                    <Edit3 size={16} />
                                </button>
                            )}
                            {isEditing && (
                                <button
                                    onClick={() => {
                                        setIsEditing(false);
                                        setEditedName(user.name);
                                    }}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
                                >
                                    <X size={16} />
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[11px] font-black text-slate-700 uppercase tracking-widest px-1">Email Address</label>
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                <Mail size={18} />
                            </div>
                            <input
                                type="email"
                                value={user.email}
                                disabled
                                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold text-slate-500 cursor-not-allowed"
                            />
                        </div>
                        <p className="text-[11px] text-slate-400 font-medium px-1">Email cannot be changed</p>
                    </div>

                    <div className="pt-2">
                        <button
                            onClick={handleSave}
                            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-95"
                        >
                            <Save size={18} />
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>

            {/* Account Actions */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Account Actions</h3>
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-rose-100 text-rose-500 bg-rose-50/50 rounded-xl font-bold text-sm hover:bg-rose-50 hover:border-rose-200 transition-all active:scale-95"
                >
                    <LogOut size={18} />
                    Logout
                </button>
            </div>
        </div>
    );
};

export default ProfileScreen;
