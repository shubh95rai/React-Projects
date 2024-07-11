import { NavLink, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/context";

function Navbar() {
  const { search, setSerach, handleSearch, handleSubmit } = useGlobalContext();
  // console.log(search);

  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center py-5 px-10 bg-neutral-900">
      <h1 className="text-2xl font-bold">Recipe App</h1>
      <div className="flex gap-10 items-center">
        <form
          onSubmit={handleSubmit}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              navigate("/");
            }
          }}>
          <input
            type="text"
            className="outline-none px-5 py-2 rounded  bg-neutral-800"
            spellCheck="false"
            onChange={handleSearch}
          />
        </form>
        <ul className="flex gap-5">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/favourites"}>Favourites</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
