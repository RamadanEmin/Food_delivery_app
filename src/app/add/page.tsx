'use client';

import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

type Inputs = {
    title: string;
    desc: string;
    price: number;
    catSlug: string;
};

const AddPage = () => {
    const { data: session, status } = useSession();

    const [inputs, setInputs] = useState<Inputs>({
        title: '',
        desc: '',
        price: 0,
        catSlug: ''
    });

    const router = useRouter();

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (status === 'unauthenticated' || !session?.user.isAdmin) {
        router.push('/');
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputs(prev => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    return (
        <div className="p-4 lg:px-20 xl:px-40 min-h-[calc(100vh-12rem)] md:min-h-[calc(100vh-9rem)] flex flex-col items-center justify-center text-red-500">
        <form className="flex flex-wrap gap-6">
          <h1 className="text-4xl mb-2 text-gray-300 font-bold">
            Add New Product
          </h1>
          <div className="w-full flex flex-col gap-2 ">
            <label
              className="text-sm cursor-pointer flex gap-4 items-center"
              htmlFor="file"
            >
              <Image src="/upload.png" alt="" width={30} height={20} />
              <span>Upload Image</span>
            </label>
            <input
              type="file"
              id="file"
              className="hidden"
            />
          </div>
          <div className="w-full flex flex-col gap-2 ">
            <label className="text-sm">Title</label>
            <input
              className="ring-1 ring-red-200 p-4 rounded-sm placeholder:text-red-200 outline-none"
              type="text"
              placeholder="Bella Napoli"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-sm">Description</label>
            <textarea
              rows={3}
              className="ring-1 ring-red-200 p-4 rounded-sm placeholder:text-red-200 outline-none"
              placeholder="A timeless favorite with a twist, showcasing a thin crust topped with sweet tomatoes, fresh basil and creamy mozzarella."
              name="desc"
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex flex-col gap-2 ">
            <label className="text-sm">Price</label>
            <input
              className="ring-1 ring-red-200 p-4 rounded-sm placeholder:text-red-200 outline-none"
              type="number"
              placeholder="29"
              name="price"
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex flex-col gap-2 ">
            <label className="text-sm">Category</label>
            <input
              className="ring-1 ring-red-200 p-4 rounded-sm placeholder:text-red-200 outline-none"
              type="text"
              placeholder="pizzas"
              name="catSlug"
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-sm">Options</label>
            <div className="flex">
              <input
                className="ring-1 ring-red-200 p-4 rounded-sm placeholder:text-red-200 outline-none"
                type="text"
                placeholder="Title"
                name="title"
              />
              <input
                className="ring-1 ring-red-200 p-4 rounded-sm placeholder:text-red-200 outline-none"
                type="number"
                placeholder="Additional Price"
                name="additionalPrice"
              />
              <button
              type="button"
                className="bg-gray-500 p-2 text-white"
              >
                Add Option
              </button>
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
            </div>
          </div>
          <button
            type="submit"
            className="bg-red-500 p-4 text-white w-48 rounded-md relative h-14 flex items-center justify-center"
          >
            Submit
          </button>
        </form>
      </div>
    );
};

export default AddPage;