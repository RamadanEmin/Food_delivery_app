import { NextResponse } from 'next/server';

import { prisma } from '@/utils/connect';

// FETCH ALL CATEGORIES
export const GET = async () => {
    try {
        const catetgories = await prisma.category.findMany();

        return new NextResponse(JSON.stringify(catetgories), { status: 200 });
    } catch (err) {
        console.log(err);

        return new NextResponse(JSON.stringify({ message: 'Something went wrong' }), { status: 500 });
    }
};