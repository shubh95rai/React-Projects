import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <main>
      <Navbar />
      <div className="container py-10">
        <Outlet />
      </div>
    </main>
  );
}

export default Layout;
