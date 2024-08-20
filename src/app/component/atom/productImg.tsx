'use client'
import { useState } from "react";
import Image from 'next/image';
const ProductImage = ({ src, alt }: { src: string; alt: string }) => {
  const [loading, setLoading] = useState<boolean>(true);
  return ( 
    <Image src={src} alt={alt} width={100} height={100}
    onLoad={() => setLoading(false)} />
  )
};

export default ProductImage;
