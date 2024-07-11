import { IoArrowBack } from "react-icons/io5";
import { useGlobalContext } from "../context";

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <div
      className={`${isSidebarOpen && "show"} fixed bg-black bg-opacity-50 w-screen h-screen top-0 left-0 invisible `}
    >
      <aside
        className={`${isSidebarOpen && "active"} fixed top-0 left-[-100%] h-screen w-64 p-8 bg-slate-800 text-slate-400 transition`}
      >
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-3xl font-medium text-white ">Brand</h1>
          <IoArrowBack
            className="text-2xl hover:text-white"
            onClick={closeSidebar}
          />
        </div>
        <ul>
          <li className="py-2 my-2  hover:bg-slate-900 px-4 hover:text-white rounded-lg ">
            Dashboard
          </li>
          <li className="py-2 my-2  hover:bg-slate-900 px-4 hover:text-white rounded-lg ">
            Users
          </li>
          <li className="py-2 my-2  hover:bg-slate-900 px-4 hover:text-white rounded-lg ">
            Accounts
          </li>
          <li className="py-2 my-2  hover:bg-slate-900 px-4 hover:text-white rounded-lg ">
            Services
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Sidebar;
