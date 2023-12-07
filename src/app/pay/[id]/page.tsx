'use client';

import { useState } from 'react';
import { StripeElementsOptions, loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const PayPage = ({ params }: { params: { id: string } }) => {
    const [clientSecret, setClientSecret] = useState('');

    const options: StripeElementsOptions = {
        clientSecret,
        appearance: {
            theme: 'stripe'
        }
    };

    return (
        <div>
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    );
};

export default PayPage;