import Navbar from "@/components/navbar/Navbar";
import { Outlet } from "react-router";


export default function HomeLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
