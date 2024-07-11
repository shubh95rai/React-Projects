import { Outlet } from "react-router-dom"
import Navbar from "../Components/Nabar"

function Layout(){
    return <>
    <Navbar />
    <Outlet />
    </>
}

export default Layout