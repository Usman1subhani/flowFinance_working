'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
    name: string;
    email: string;
    role: string;
    avatarColor: string;
}

interface UserContextType {
    user: User;
    updateUser: (updates: Partial<User>) => void;
}

const defaultUser: User = {
    name: 'Usman Subhani',
    email: 'usmansubhani595@gmail.com',
    role: 'Admin',
    avatarColor: 'bg-emerald-500'
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User>(defaultUser);

    const updateUser = (updates: Partial<User>) => {
        setUser((prev) => ({ ...prev, ...updates }));
    };

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
