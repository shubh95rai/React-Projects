import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const cart = useSelector((state) => {
    return state.cart;
  });

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(product));
  }

  return (
    <div className="flex flex-col items-center gap-5 rounded border border-red-900 bg-white p-5 text-center">
      <img src={product.image} className="h-40" alt="" />

      <div className="flex w-full flex-col gap-2">
        <h2 className="w-full truncate font-semibold">{product.title}</h2>
        <p>${product.price}</p>
        <button
          className="rounded bg-red-800 px-4 py-2 text-white"
          onClick={
            cart.some((prod) => {
              return prod.id === product.id;
            })
              ? handleRemoveFromCart
              : handleAddToCart
          }
        >
          {cart.some((prod) => {
            return prod.id === product.id;
          })
            ? "Remove from cart"
            : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
