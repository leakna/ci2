"use client";
import useSWR from "swr";
import Loading from "../../loading";
import fetcher from "../fetcher";
import { notFound } from "next/navigation";
import Image from 'next/image';

const Item = ({
  params,
}: {
  params: {
    itemID: number;
  };
}) => {
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/products/${params.itemID}`,
    fetcher
  );
  if (error) {
    notFound()
  }
  if (isLoading) return <Loading />;
  return (
    <div className="max-w-[400px] m-auto flex flex-col items-center">
      <Image src={data.images[0]} alt="" width={100} height={100} />
      <div>
        <p>{data.title}</p>
        <p>${data.price}</p>
      </div>
    </div>
  );
};

export default Item;
