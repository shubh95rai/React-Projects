import { useContext } from "react";
import { GlobalContext } from "../context and reducer/context";

function BasketProduct({ product }) {
  const { removeFromBasket, incrementQty, decrementQty } =
    useContext(GlobalContext);

  function handleRemoveFromBasket() {
    removeFromBasket(product);
  }
  function handleIncrementQty() {
    incrementQty(product);
  }
  function handleDecrementQty() {
    decrementQty(product);
  }
  return (
    <div className="flex items-center justify-between rounded border border-gray-200 p-5">
      <img src={product.image} alt={product.name} className="w-40" />
      <div className="font-medium">
        <p>{product.name}</p>
        <p>${product.price}</p>
      </div>

      <div className="flex items-center gap-2 font-medium">
        <button className="text-xl" onClick={handleDecrementQty}>-</button>
        <p>{product.qty}</p>
        <button className="text-xl" onClick={handleIncrementQty}>
          +
        </button>
      </div>

      <button
        className="rounded-full bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
        onClick={handleRemoveFromBasket}
      >
        Remove
      </button>
    </div>
  );
}

export default BasketProduct;
