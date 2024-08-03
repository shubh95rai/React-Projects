import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/productSlice";
import ProductCard from "../components/ProductCard";

function Home() {
  const { status, products } = useSelector((state) => {
    return state.productSlice;
  });
  console.log(status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (status === "pending") {
    return (
      <main className="flex min-h-[calc(100vh-168px)] items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </main>
    );
  }

  if (status === "rejected") {
    <main className="flex min-h-[calc(100vh-168px)] items-center justify-center">
      <p className="text-2xl">Failed to fetch</p>
    </main>;
  }
  return (
    <main className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
      {products.length > 0 &&
        products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
    </main>
  );
}

export default Home;
