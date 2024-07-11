import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="px-20 pb-10">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout;
