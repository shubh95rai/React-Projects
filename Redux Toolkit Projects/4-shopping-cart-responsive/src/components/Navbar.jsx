import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { totalItemsMethod } from "../store/cartSlice";

function Navbar() {
  const { totalItems, products } = useSelector((state) => {
    return state.cartSlice;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalItemsMethod());
  }, [products]);

  return (
    <nav className="sticky top-0 flex h-20 items-center justify-between bg-red-800 px-10 text-white sm:px-20 ">
      <h1>
        <NavLink className="text-3xl font-bold" to={"/"}>
          Shopping Cart
        </NavLink>
      </h1>
      <ul className="flex gap-10 text-xl font-semibold">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="relative">
          <NavLink to="/cart">
            Cart{" "}
            {totalItems > 0 && (
              <span className="absolute -top-2 ml-2 rounded-full bg-white px-2 py-1 text-xs font-bold text-red-800">
                {totalItems}
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
