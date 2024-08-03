import { MdDelete } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { decrementQty, incrementQty, removeFromCart } from "../store/cartSlice";
import { useEffect } from "react";

function CartProductCard({ product }) {
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(incrementQty(product));
  }

  function handleDecrement() {
    if (product.qty >= 1) {
      dispatch(decrementQty(product));
    }
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(product));
  }

  useEffect(() => {
    if (product.qty === 0) {
      handleRemoveFromCart();
    }
  }, [product]);

  return (
    <main className="w-full">
      <div className="flex max-w-full items-center justify-evenly rounded border border-red-900 bg-white p-5 text-center">
        <img src={product.image} className="h-40 w-32 object-contain" alt="" />
        <div className="flex w-1/2 flex-col items-center gap-2">
          <p className="line-clamp-1 w-full font-semibold">{product.title}</p>
          <p className="font-medium">${product.price}</p>

          <div className="flex items-center gap-2">
            <FiMinusCircle
              className="cursor-pointer text-xl"
              onClick={handleDecrement}
            />
            <p className="text-xl font-medium">{product.qty}</p>
            <FiPlusCircle
              className="cursor-pointer text-xl"
              onClick={handleIncrement}
            />
          </div>

          <button
            className="rounded bg-red-800 px-5 py-2.5 text-white hover:bg-red-900"
            onClick={handleRemoveFromCart}
          >
            Remove from cart
          </button>
        </div>
      </div>
    </main>
  );
}

export default CartProductCard;
