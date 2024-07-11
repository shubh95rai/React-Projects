import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";

function CartProduct({ product }) {
  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    dispatch(removeFromCart(product));
  }

  return (
    <div className="flex w-[500px]  items-center  justify-evenly rounded  border border-red-900 bg-white p-5 text-center">
      <img src={product.image} className="h-40 w-32 object-cover" alt="" />

      <div className="flex w-1/2 flex-col items-center gap-2">
        <h2 className=" font-semibold">{product.title}</h2>
        <p>${product.price}</p>
        <button
          className="rounded bg-red-800 px-4 py-2 text-white"
          onClick={handleRemoveFromCart}
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CartProduct;
