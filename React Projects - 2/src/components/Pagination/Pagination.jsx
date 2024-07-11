function Pagination({ currentPage, totalPages = 10, handlePageChange }) {
  let pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <main className="flex gap-1">
      <button
        className="h-10 w-14 rounded bg-neutral-300 "
        onClick={() => {
          handlePageChange(currentPage - 1);
        }}
        disabled={currentPage === 1}
      >
        prev
      </button>
      {pages.map((pageNo) => {
        return (
          <button
            key={pageNo}
            className={`${currentPage === pageNo && "ring-2 ring-inset ring-neutral-500"} h-10 w-10 rounded bg-neutral-300`}
            onClick={() => {
              handlePageChange(pageNo);
            }}
          >
            {pageNo}
          </button>
        );
      })}
      <button
        className="h-10 w-14 rounded bg-neutral-300"
        onClick={() => {
          handlePageChange(currentPage + 1);
        }}
        disabled={currentPage === totalPages}
      >
        next
      </button>
    </main>
  );
}

export default Pagination;
