
import DashboardLayout from "@/layout/DashboardLayout";
import HomeLayout from "@/layout/HomeLayout";
import Overview from "@/pages/dashboard/overview/Overview";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout/>,
    children:[
      {
        path:"/dashboard",
        element:<Overview/>
      }
    ]
  },
]);

export default router;