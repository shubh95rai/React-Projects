import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

function ProductCard({ product }) {
  const { id, title, price, image } = product;

  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  return (
    <div className="flex w-64 flex-col items-center justify-between gap-5 rounded border border-red-800 bg-white p-5">
      <img src={image} alt={title} className="h-40 w-32 object-contain" />
      <div className="flex w-full flex-col items-center gap-2 font-medium">
        <p className="w-full truncate text-center font-semibold">{title}</p>
        <p>${price}</p>
        <button
          className="w-full rounded bg-red-800 py-2.5 text-white hover:bg-red-900"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
