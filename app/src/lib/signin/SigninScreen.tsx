'use client';

import React from 'react';
import SigninForm from '../../components/sigin/SigninForm';
import SigninSideContent from '../../components/sigin/SigninSideContent';

const SigninScreen = () => {
    return (
        <div className="min-h-screen bg-white flex overflow-hidden">
            {/* Left/Main Content (Form) */}
            <div className="flex-1 flex flex-col overflow-y-auto">
                <SigninForm />
            </div>

            {/* Right Side Content (Illustration - hidden on mobile) */}
            <SigninSideContent />
        </div>
    );
};

export default SigninScreen;
