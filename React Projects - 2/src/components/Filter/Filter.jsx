import { useEffect, useState } from "react";

function Filter() {
  const [products, setProducts] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState("All");
  const [error, setError] = useState("");

  async function fetchData() {
    setLoading(true);

    try {
      const response = await fetch("https://dummyjson.com/products?limit=20");
      const data = await response.json();

      if (data) {
        setProducts(data.products);
        setLoading(false);
      }
    } catch (error) {
      setError("Failed to fetch!");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function categoriesArray() {
    const allCategories = products.map((product) => {
      return product.category;
    });

    setCategories(["All", ...new Set(allCategories)]);
    setMenuItems(products);
  }

  useEffect(() => {
    categoriesArray();
  }, [products]);

  function handleFilteredData(selectedCategory) {
    if (selectedCategory === "All") {
      setMenuItems(products);
      return;
    }

    const newMenuItems = products.filter((product, index) => {
      return product.category === selectedCategory;
    });

    setMenuItems(newMenuItems);
  }
  console.log(active);
  if (loading) {
    return (
      <main className="flex  h-screen items-center justify-center ">
        <span className="loading loading-spinner loading-lg"></span>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center gap-20 p-20 ">
      <section className="flex gap-2">
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              className={`bg-white p-2 capitalize text-black ${active === category && "!bg-neutral-500"}`}
              onClick={() => {
                handleFilteredData(category);
                setActive(category);
              }}
            >
              {category}
            </button>
          );
        })}
      </section>
      <section className="grid w-[800px] grid-cols-3  gap-5">
        {menuItems.map((item, index) => {
          return (
            <div key={index} className="rounded p-10 text-center">
              <h1 className="text-xl">{item.title}</h1>
              <p className="bg-neutral-300 text-black">{item.category}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default Filter;
