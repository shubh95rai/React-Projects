import Product from "../components/Product.jsx";
import productsData from "../productsData";

function Home() {
  return (
    <section className="flex flex-col items-center gap-5 px-5 md:grid md:grid-cols-2 lg:grid-cols-3 ">
      {productsData.map((product, index) => {
        return <Product key={index} product={product} />;
      })}
    </section>
  );
}

export default Home;
