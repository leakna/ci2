"use client";

import Link from "next/link";
import useSWR from "swr";
import { useState, useEffect } from "react";
import Image from 'next/image';

// Define TypeScript interfaces for data
interface Product {
  id: number;
  image: string;
  title: string;
  url: string;
  images: string[];
}

// Fetcher function to get data from API
const fetcher = async (url: string): Promise<any> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const Client = () => {
  const [dataholder, setData] = useState<Product[]>([]);
  const limit=20;
  const [page, setPage] = useState<number>(1); // Start with page 1

  // Fetch data from the API with pagination
  const { data, error } = useSWR(
    `https://dummyjson.com/products?skip=${(page - 1) * limit}&limit=${limit}`,
    fetcher
  );

  // Append new data to existing dataholder state when page changes
  useEffect(() => {
    if (data) {
      setData((prevData) => [...prevData, ...data.products]);
    }
  }, [data]);

  // Error handling
  if (error) {
    throw new Error("smething is wrong")
  }

  return (
    <div>
      <div className="grid grid-cols-4 gap-8 gap-row gap-y-10">
        {dataholder.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center"
          >
            <Image src={item.images[0]} alt={item.title} width={100} height={100} />
            <Link className="font-bold" href={`/client/${item.id}`}>
              {item.title}
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button
          className="p-3 rounded-md bg-pink-400"
          onClick={() => setPage((prevPage) => prevPage + 1)} // Increment page number
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default Client;
