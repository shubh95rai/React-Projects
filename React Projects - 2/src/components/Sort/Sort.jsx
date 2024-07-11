import { useEffect, useState } from "react";

function Sort() {
  const [products, setProducts] = useState([]);
  const [select, setSelect] = useState("");

  async function fetchUsers() {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=20");
      const data = await response.json();
      if (data) {
        setProducts(data.products);
      }
    } catch (error) {}
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  function sort() {
    let copyProducts = [...products];
    if (select === "ascending") {
      copyProducts.sort((a, b) => {
        return a.title.toUpperCase() > b.title.toUpperCase() ? 1 : -1;
      });
      setProducts(copyProducts);
    }

    if (select === "descending") {
      copyProducts.sort((a, b) => {
        return a.title.toUpperCase() > b.title.toUpperCase() ? -1 : 1;
      });
      setProducts(copyProducts);
    }
    if (select === "low") {
      copyProducts.sort((a, b) => {
        return a.price > b.price ? 1 : -1;
      });
      setProducts(copyProducts);
    }
    if (select === "high") {
      copyProducts.sort((a, b) => {
        return a.price > b.price ? -1 : 1;
      });
      setProducts(copyProducts);
    }
  }

  useEffect(() => {
    sort();
  }, [select]);

  return (
    <main className="flex h-screen items-center justify-center">
      <section className="flex items-start gap-5 text-center">
        <select
          value={select}
          onChange={(e) => {
            setSelect(e.target.value);
          }}
          className="p-2"
        >
          <option value="">Sort by</option>
          <option value="ascending">A-Z</option>
          <option value="descending">Z-A</option>
          <option value="low">low to high</option>
          <option value="high">high to low</option>
        </select>
        <div>
          {products.length > 0 &&
            products.map((product) => {
              return (
                <div key={product.id} className="flex justify-between gap-5">
                  <p>{product.title}</p>
                  <p>{product.price}</p>
                </div>
              );
            })}
        </div>
      </section>
    </main>
  );
}

export default Sort;
