'use client';

import React from 'react';

const OrdersPage = () => {
    return (
        <div className='p-4 lg:px-20 xl:px-40'>
            <table className='w-full border-separate border-spacing-3'>
                <thead>
                    <tr className='text-left'>
                        <th className='hidden md:block'>Order ID</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th className='hidden md:block'>Products</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td className='hidden md:block py-6 px-1'>111111</td>
                            <td className='py-6 px-1'>06-12-2023</td>
                            <td className='py-6 px-1'>100</td>
                            <td className='hidden md:block py-6 px-1'>Peperoni pizza</td>
                        </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OrdersPage;