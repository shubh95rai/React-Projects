import { useContext } from "react";
import { GlobalContext } from "../context and reducer/context";
import BasketProduct from "../components/BasketProduct";

function Basket() {
  const { products, total } = useContext(GlobalContext);

  return (
    <div className=" mx-auto flex max-w-[700px] flex-col gap-5 px-10 py-5">
      <div className="flex justify-between font-medium">
        <h3>Your Basket</h3>
        <p>${total.toFixed(2)}</p>
      </div>
      {products.map((product, index) => {
        return <BasketProduct key={index} product={product} />;
      })}
    </div>
  );
}

export default Basket;
