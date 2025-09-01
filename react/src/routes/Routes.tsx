
import DashboardLayout from "@/layout/DashboardLayout";
import Overview from "@/pages/dashboard/overview/Overview";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hola</div>,
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