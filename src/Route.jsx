import { createBrowserRouter } from "react-router-dom";
import Main from "./LayOut/Main";
import Home from "./pages/Home";
import Menu from "./pages/menu/Menu";
import Order from "./pages/Order/Order";
import Login from "./pages/login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Secret from "./pages/Secret";
import PrivatRoute from "./PrivatRoute";
import Dashboard from "./LayOut/Dashboard";
import Cart from "./LayOut/Dashboard/Cart/Cart";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'/menu',
          element: <Menu></Menu>
        },
        {
          path: '/order/:category',
          element: <Order></Order>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/secret',
          element: <PrivatRoute><Secret></Secret></PrivatRoute>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivatRoute><Dashboard></Dashboard></PrivatRoute>,
      children:[
        {
          path: 'cart',
          element: <Cart></Cart>
        }
      ]
    }
  ]);
  export default router