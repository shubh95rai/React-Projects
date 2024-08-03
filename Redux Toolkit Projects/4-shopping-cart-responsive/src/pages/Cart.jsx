import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartProductCard from "../components/CartProductCard";
import { useEffect, useRef } from "react";
import { totalAmountMethod, totalItemsMethod } from "../store/cartSlice";

function Cart() {
  const { products, totalItems, totalAmount } = useSelector((state) => {
    return state.cartSlice;
  });

  const dispatch = useDispatch();

  const refObj = useRef();
  // console.log(refObj.current.offsetTop);

  useEffect(() => {
    dispatch(totalItemsMethod());
    dispatch(totalAmountMethod());
  }, [products]);

  if (products.length === 0) {
    return (
      <main className="flex min-h-[calc(100vh-168px)] flex-col items-center justify-center gap-2">
        <p className="text-xl font-semibold">Cart is empty</p>
        <NavLink
          className="rounded bg-red-800 px-5 py-2.5 font-medium text-white hover:bg-red-900"
          to={"/"}
        >
          Shop now
        </NavLink>
      </main>
    );
  }

  return (
    <main className="flex min-h-[calc(100vh-168px)] flex-col items-center gap-5 lg:flex-row lg:items-start">
      <section className="flex w-full flex-col items-center gap-5">
        {products.map((product) => {
          return <CartProductCard product={product} key={product.id} />;
        })}
      </section>
      <section
        className="flex w-full flex-col gap-5 rounded border border-red-800 bg-white p-5 lg:sticky lg:top-[120px] lg:max-w-[500px]"
        ref={refObj}
      >
        <h2 className="text-xl font-semibold text-red-800">Cart Summary</h2>
        <div>
          <div className="flex justify-between">
            <p>Total Items</p>
            <p>{totalItems}</p>
          </div>
          <div className="flex justify-between font-semibold">
            <p>Total Amount</p>
            <p>{totalAmount.toFixed(2)}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Cart;
