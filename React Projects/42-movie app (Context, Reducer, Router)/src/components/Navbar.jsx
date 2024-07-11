import { NavLink, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context and reducer/context";
import { useContext } from "react";

function Navbar() {
  const { search, setSearch } = useContext(GlobalContext);
  const navigate = useNavigate();
  return (
    <nav className=" flex items-center justify-center gap-5 p-5 ">
      <input
        type="text"
        placeholder="Enter movie title"
        spellCheck="false"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          navigate("/");
        }}
        className="rounded border border-black bg-transparent px-4 py-2 outline-none"
      />

      <NavLink
        to="/"
        className="border-b-2 border-transparent py-2  focus:underline focus:underline-offset-8 "
      >
        Home
      </NavLink>
      <NavLink
        to="/watchlist"
        className="border-b-2 border-transparent py-2   focus:underline focus:underline-offset-8"
      >
        Watchlist
      </NavLink>
      <NavLink
        to="/watched"
        className="border-b-2 border-transparent py-2  focus:underline focus:underline-offset-8"
      >
        Watched
      </NavLink>
    </nav>
  );
}

export default Navbar;
