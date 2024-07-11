import { useEffect, useState } from "react";
import Pagination from "./Pagination";

function PaginationTest() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await fetch("https://dummyjson.com/products?limit=100");
    const data = await response.json();
    console.log(data.products);

    setData(data.products);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handlePageChange(currPage) {
    setCurrentPage(currPage);
  }

  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentListOfItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <main className="flex flex-col items-center gap-10 py-10">
      <h1 className="text-3xl font-bold uppercase tracking-widest">
        Pagination
      </h1>
      <section className="flex flex-col gap-2">
        {currentListOfItems.map((item) => {
          return (
            <div key={item.id} className="text-center">
              {item.title}
            </div>
          );
        })}
      </section>
      <Pagination
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        totalPages={Math.ceil(data.length / itemsPerPage)}
      />
    </main>
  );
}

export default PaginationTest;
