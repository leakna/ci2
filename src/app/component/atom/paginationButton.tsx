import Link from "next/link";

const PaginationButton = ({ page, isActive }: { page: number; isActive: boolean }) => (
  <Link
    href={`?page=${page}`}
    className={`p-2 mx-1 rounded-md ${isActive ? "bg-blue-500 text-white" : "bg-gray-300"}`}
  >
    {page}
  </Link>
);

export default PaginationButton;
