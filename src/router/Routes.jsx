import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import MyProfile from "../Pages/MyProfile";
import Login from "../Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
        {
            index: true,
            Component: Home
        },{
          path: "/services",
          Component: Services
        },{
          path: "/myprofile",
          Component: MyProfile
        },{
          path: "/login",
          Component: Login
        }
    ]
  },
]);

export default router