import React from "react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <nav className="bg-black h-52 flex flex-col gap-5 items-center justify-center">
        <ul className="flex gap-5">
          <li className="hover:text-white transition-all">
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive
                  ? "text-white border-b py-1 border-white"
                  : null;
              }}>
              Home
            </NavLink>
          </li>
          <li className="hover:text-white transition-all ">
            <NavLink
              to="/about"
              className={({ isActive }) => {
                return isActive
                  ? "text-white border-b py-1 border-white"
                  : null;
              }}>
              About
            </NavLink>
          </li>
          <li className="hover:text-white transition-all">
            <NavLink
              to="/products"
              className={({ isActive }) => {
                return isActive
                  ? "text-white border-b py-1 border-white"
                  : null;
              }}>
              Products
            </NavLink>
          </li>
        </ul>

        <div>
          &copy; 2022 <Link to="/"> Website</Link> - All Rights Reserved.
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
