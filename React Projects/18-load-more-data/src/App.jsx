import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [counter, setCounter] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [disableBtn, setDisableBtn] = useState(false);
  console.log(products);
  async function fetchProducts() {
    try {
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${counter * 20}`,
      );
      const data = await response.json();
      if (data) {
        const newProducts = [...products, ...data.products];
        setProducts(newProducts);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg("Failed to Fetch! Please try again.");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [counter]);

  useEffect(() => {
    if (counter === 4) {
      setDisableBtn(true);
    }
  }, [counter]);

  // =======================================

  if (loading) {
    return (
      <main>
        <span className="loading loading-bars loading-lg "></span>
      </main>
    );
  }

  if (errorMsg) {
    return (
      <main>
        <h1 className="text-xl ">{errorMsg}</h1>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center gap-10">
      <div className="grid grid-cols-5 gap-10  ">
        {products.map((product, index) => {
          const { title, thumbnail } = product;
          return (
            <article key={index} className="bg-slate-300 p-5 rounded-xl">
              <img
                src={thumbnail}
                alt={title}
                className="h-[200px] w-[200px] object-cover rounded-xl"
              />
              <p className="font-semibold mt-5">{title}</p>
            </article>
          );
        })}
      </div>
      <button
        type="button"
        className={`${disableBtn && "opacity-50"} py-2 px-5 bg-black text-white rounded mt-10`}
        onClick={() => {
          setCounter(counter + 1);
        }}
        disabled={disableBtn}>
        Load More
      </button>
      {disableBtn && (
        <p className="text-lg">You have reached to 100 products</p>
      )}
    </main>
  );
}

export default App;
