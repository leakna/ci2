
import Link from 'next/link';
import { Product } from '@/app/utils/type';
import ProductImage from '../atom/productImg';
import ProductTitle from '../atom/productTitle';

const ProductCard = ({ product }: { product: Product }) => (
  <div className="flex flex-col items-center justify-center">
    <ProductImage src={product.images[0]} alt={product.title} />
    <Link href={`/server/${product.id}`}>
      <ProductTitle title={product.title} />
    </Link>
  </div>
);

export default ProductCard;
