import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context and reducer/context";

function Navbar() {
  const { products } = useContext(GlobalContext);
  return (
    <nav className="flex justify-evenly gap-5 py-5 font-semibold">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/basket" className="relative">
        Basket
        {products.length > 0 && (
          <span className="absolute -top-2 rounded-full bg-red-500 px-2  py-1 align-top  text-xs text-white mx-1">
            {products.length}
          </span>
        )}
      </NavLink>
    </nav>
  );
}

export default Navbar;
