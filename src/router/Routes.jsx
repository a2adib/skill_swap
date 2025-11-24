import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import MyProfile from "../Pages/MyProfile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivetRoute from "./PrivetRoute";

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
          element: <PrivetRoute><MyProfile /></PrivetRoute> 
        },{
          path: "/login",
          Component: Login
        },
        {
          path: "/signup",
          Component: Register
        }
    ]
  },
]);

export default router