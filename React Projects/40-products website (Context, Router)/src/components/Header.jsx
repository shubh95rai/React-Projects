import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="flex justify-between bg-black items-center px-32 h-20">
        <h1 className="font-bold text-2xl hover:text-white transition-all">
          Website.
        </h1>
        <ul className="flex gap-5">
          <li className="hover:text-white transition-all">
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "text-white border-b py-1 border-white" : null;
              }}>
              Home
            </NavLink>
          </li>
          <li className="hover:text-white transition-all">
            <NavLink
              to="/about"
              className={({ isActive }) => {
                return isActive ? "text-white border-b py-1 border-white" : null;
              }}>
              About
            </NavLink>
          </li>
          <li className="hover:text-white transition-all">
            <NavLink
              to="/products"
              className={({ isActive }) => {
                return isActive ? "text-white border-b py-1 border-white" : null;
              }}>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
