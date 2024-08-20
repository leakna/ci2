import PaginationButton from "../atom/paginationButton";

const PaginationControls = ({ totalPages, currentPage }: { totalPages: number, currentPage: number }) => (
  <div className="text-center mt-8">
    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
      <PaginationButton key={page} page={page} isActive={currentPage === page} />
    ))}
  </div>
);

export default PaginationControls;
