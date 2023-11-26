import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Notification from '@/components/Notification';
import Navbar from '@/components/Navbar';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'eRa Restaurant',
    description: 'Best food in town!',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div>
                    <Notification />
                    <Navbar />
                    {children}
                </div>
            </body>
        </html>
    );
}