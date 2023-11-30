import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import './globals.css';

import Notification from '@/components/Notification';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
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
                <AuthProvider>
                        <div>
                            <Notification />
                            <Navbar />
                            {children}
                            <Footer />
                            <ToastContainer position='bottom-right' theme='dark' autoClose={3000}/>
                        </div>
                </AuthProvider>
            </body>
        </html>
    );
}