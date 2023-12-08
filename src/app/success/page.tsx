'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const SuccessPage = () => {
    const serchParams = useSearchParams();
    const payment_intent = serchParams.get('payment_intent');

    const router = useRouter();

    useEffect(() => {
        const makeRequest = async () => {
            try {
                await fetch(`http://localhost:3000/api/confirm/${payment_intent}`, {
                    method: 'PUT'
                });

                router.push('orders');
            } catch (error) {
                console.log(error);
            }
        };

        makeRequest();
    }, [payment_intent, router]);


    return (
        <div>Payment successful. You are being redirected to the orders page. Please do not close the page.</div>
    );
};

export default SuccessPage;