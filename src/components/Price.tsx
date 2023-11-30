'use client';

import { ProductType } from '@/types/types';

const Price = ({ product }: { product: ProductType }) => {
    return (
        <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-bold'>$100</h2>
            {/* OPTIONS CONTAINER */}
            <div className='flex gap-4'>
                {product.options?.length && product.options?.map((option, index) => (
                    <button
                        key={option.title}
                        className='min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md'
                    >
                    </button>
                ))}
            </div>

            {/* QUANTITY AND ADD BUTTON CONTAINER */}
            <div className='flex justify-between items-center'>
                {/* QUANTITY */}
                <div className='flex justify-between w-full p-3 ring-1 ring-red-500'>
                    <span>Quantity</span>
                    <div className='flex gap-4 items-center'>
                        <button>{'<'}</button>
                        <span>0</span>
                        <button>{'>'}</button>
                    </div>
                </div>

                {/* CART BUTTON */}
                <button
                    className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Price;