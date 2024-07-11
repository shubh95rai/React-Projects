import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {
  const cart = useSelector((state) => {
    return state.cart;
  });

  return (
    <nav className="flex items-center justify-between py-10">
      <NavLink to={""}>
        <h1 className="text-3xl font-bold text-red-800">
          Redux Toolkit Shopping Cart
        </h1>
      </NavLink>

      <ul className="flex gap-10 text-xl font-semibold">
        <li>
          <NavLink to={""}>Home</NavLink>
        </li>
        <li className="relative">
          <NavLink to={"/cart"}>
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 mx-1 rounded-full bg-red-800 px-2 py-1 text-xs text-white">
                {cart.length}
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
