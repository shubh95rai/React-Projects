import { useContext } from "react";
import { GlobalContext } from "../context and reducer/context";

function Product({ product }) {
  const { addToBasket, products, removeFromBasket } = useContext(GlobalContext);

  function handleAddToBasket() {
    addToBasket(product);
  }
  function handleRemoveFromBasket() {
    removeFromBasket(product);
  }

  return (
    <div className="max-w-[450px] rounded border border-gray-200 p-5">
      <img src={product.image} alt={product.name} />
      <div className="flex items-center justify-between">
        <div className="font-semibold">
          <p className="text-lg">{product.name}</p>
          <p>${product.price}</p>
        </div>

        {products.some((prod) => {
          return prod.name === product.name;
        }) ? (
          <button
            className="rounded-full bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            onClick={handleRemoveFromBasket}
          >
            Remove from basket
          </button>
        ) : (
          <button
            className="rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            onClick={handleAddToBasket}
          >
            Add to basket
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
