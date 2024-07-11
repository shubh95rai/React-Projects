import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useRef, useState } from "react";

function App() {
  const menuRef = useRef();
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    menuRef.current.classList.toggle("active");
    setToggle(!toggle);
  }
  return (
    <nav>
      <section className="bg-white px-10 h-16 flex justify-between items-center shadow-lg">
        <h1 className="text-3xl font-bold">
          Coding <span className="text-sky-500">Addict</span>
        </h1>
        <ul
          ref={menuRef}
          className="fixed transition top-16 left-0 bg-white w-full flex flex-col items-center shadow-lg max-h-0 overflow-hidden text-xl font-medium lg:flex-row lg:static lg:w-auto lg:overflow-visible lg:gap-10 lg:bg-transparent lg:shadow-none"
        >
          <li className="py-5 hover:text-sky-500 transition cursor-pointer">
            Home
          </li>
          <li className="py-5 hover:text-sky-500 transition cursor-pointer">
            Services
          </li>
          <li className="py-5 hover:text-sky-500 transition cursor-pointer">
            About
          </li>
          <li className="py-5 hover:text-sky-500 transition cursor-pointer">
            Contact
          </li>
        </ul>
        {!toggle ? (
          <HiOutlineMenu
            className="text-3xl toggle transition cursor-pointer lg:hidden"
            onClick={handleToggle}
          />
        ) : (
          <HiOutlineMenuAlt3
            className="text-3xl toggle transition cursor-pointer lg:hidden"
            onClick={handleToggle}
          />
        )}
      </section>
    </nav>
  );
}

export default App;
