import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../Context/context";

function Navbar() {
  const { searchParam, handleSearch, handleSubmit } = useGlobalContext();

  return (
    <nav className="flex justify-between items-center px-5 py-2.5">
      <h1 className="text-2xl font-extrabold">Food Reciepe</h1>
      <ul className="flex gap-5 items-center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search an item"
            className="bg-white rounded px-5 py-2.5 outline-none"
            spellCheck="false"
            value={searchParam}
            onChange={handleSearch}
          />
        </form>
        <li className="font-semibold">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="font-semibold">
          <NavLink to="/favourites">Favourites</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
