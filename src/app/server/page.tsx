import { Suspense } from "react";
import { fetchData } from "../utils/fetching";
import Skeleton from "../component/organism/skeleton";
import ProductList from "../component/organism/productList";
import Pagination from "../component/organism/pagination";

interface ServerProps {
  searchParams?: { page?: string }; // Make searchParams optional
}
// Client component that wraps the server components with Suspense
const Server = async ({ searchParams }: ServerProps) => {
  const currentPage = searchParams?.page ? parseInt(searchParams.page) : 1;
  const itemsPerPage = 20;

  // Fetch total data count to calculate the total number of pages
  const totalData = await fetchData(`https://dummyjson.com/products`);
  const totalPages = Math.ceil(totalData.total / itemsPerPage);
  const data = await fetchData(
    `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
      (currentPage - 1) * itemsPerPage
    }`
  );

  return (
    <div>
      <Suspense fallback={<Skeleton />}>
        {/* Pass the current page as a prop to the ProductList component */}
        <ProductList products={data.products} />
      </Suspense>
      {/* Render pagination controls */}
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
};

export default Server;
