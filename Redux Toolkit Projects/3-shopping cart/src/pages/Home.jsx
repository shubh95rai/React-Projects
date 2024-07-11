import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/productSlice";

function Home() {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => {
    return state.products;
  });

  // async function fetchProducts() {
  //   try {
  //     setLoading(true);

  //     const response = await fetch("https://fakestoreapi.com/products");
  //     const data = await response.json();

  //     if (data) {
  //       setProducts(data);
  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    // fetchProducts();
    dispatch(getProducts());
  }, []);

  // console.log(products);

  if (status === "loading") {
    return (
      <main className="flex min-h-[calc(100vh-156px)] items-center justify-center">
        <span className="loading loading-spinner loading-lg text-neutral-800"></span>
      </main>
    );
  }

  if (status === "rejected") {
    return (
      <main className="flex min-h-[calc(100vh-156px)] items-center justify-center">
        <p className="text-xl font-semibold">Failed to fetch</p>
      </main>
    );
  }

  return (
    <main className="grid grid-cols-5 gap-5">
      {products.length > 0 &&
        products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
    </main>
  );
}

export default Home;
