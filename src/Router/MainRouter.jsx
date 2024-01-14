import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Items from "../Pages/Items/Items";
import Bills from "../Pages/Bills/Bills";
import Cart from "../Pages/Cart/Cart";
import Customers from "../Pages/Customers/Customers";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
        path : '/',
        element: <MainLayout/>,
        children : [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/items',
                element: <Items/>
            },
            {
                path: '/bills',
                element: <Bills/>
            },
            {
                path: '/cart',
                element: <Cart/>
            },
            {
                path: '/customers',
                element: <Customers/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },

        ]
    }
])

export default router;