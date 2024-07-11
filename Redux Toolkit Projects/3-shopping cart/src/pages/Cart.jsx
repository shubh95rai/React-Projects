import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/cartSlice";
import CartProduct from "../components/CartProduct";
import { NavLink } from "react-router-dom";

function Cart() {
  const [total, setTotal] = useState(0);

  const cart = useSelector((state) => {
    return state.cart;
  });

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => {
        return acc + curr.price;
      }, 0),
    );
  }, [cart]);
  return (
    <>
      {cart.length > 0 ? (
        <main className="flex min-h-[calc(100vh-156px)] items-start justify-evenly">
          <section className="flex flex-col gap-5">
            {cart.map((product) => {
              return <CartProduct product={product} key={product.id} />;
            })}
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-red-800">Cart summary</h3>
            <div className="font-medium">
              <p>Total Items : {cart.length}</p>
              <p>Total Amount : {total.toFixed(2)}</p>
            </div>
          </section>
        </main>
      ) : (
        <main className="flex min-h-[calc(100vh-156px)] items-center justify-evenly">
        <div className="flex flex-col items-center gap-2">
          <p className="text-xl font-semibold">Cart is empty</p>
          <NavLink to={"/"}>
            <button className="rounded bg-red-800 px-4 py-2 text-white">
              Shop now
            </button>
          </NavLink>
        </div>
         </main>
      )}
    </>
  );
}

export default Cart;
