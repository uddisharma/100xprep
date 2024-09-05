'use client';
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { RecoilRootLayout } from './recoil';

export const SessionRootLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <SessionProvider>
            <RecoilRootLayout>
                {children}
            </RecoilRootLayout>
        </SessionProvider>
    );
};