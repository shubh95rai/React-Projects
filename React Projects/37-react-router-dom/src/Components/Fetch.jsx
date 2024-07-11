import { useEffect, useState } from "react";

function Fetch() {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await fetch("https://dummyjson.com/products?limit=10");
    const data = await response.json();
    setData(data.products);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="flex flex-col text-center items-center py-20 gap-2">
      {data.map((product) => {
        return <div key={product.id}>{product.title} </div>;
      })}
    </section>
  );
}

export default Fetch;
