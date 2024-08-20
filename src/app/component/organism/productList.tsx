import { Product } from "@/app/utils/type";
import ProductCard from "../molecule/productCard";

const ProductList = ({ products }: { products: Product[] }) => (
  <div className="grid grid-cols-4 gap-8 gap-row gap-y-10">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;
