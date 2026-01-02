import { Outlet } from "react-router";
import Navbar from "../Componenets/Navbar";


export default function Root() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
