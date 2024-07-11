import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-secondary py-2.5 px-5 text-primary ">
      <ul className="flex gap-10 justify-center">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? "text-slate-400" : null;
            }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => {
              return isActive ? "text-slate-400" : null;
            }}>About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => {
              return isActive ? "text-slate-400" : null;
            }}>Contact us</NavLink>
        </li>
        <li>
          <NavLink to="/fetch" className={({ isActive }) => {
              return isActive ? "text-slate-400" : null;
            }}>Fetch</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
