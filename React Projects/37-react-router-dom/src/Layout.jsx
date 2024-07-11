import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

function Layout() {
  return <main className="">
  <Navbar />
  <Outlet />
  </main>
}

export default Layout;
