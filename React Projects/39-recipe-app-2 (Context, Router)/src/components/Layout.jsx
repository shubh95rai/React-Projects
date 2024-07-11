import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"


function Layout(){
    return <main className="flex flex-col gap-10">
    <Navbar />
    <Outlet />
    </main>
}

export default Layout