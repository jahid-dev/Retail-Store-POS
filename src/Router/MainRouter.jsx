import { createBrowserRouter, Navigate } from "react-router-dom";
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
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element:<ProtectedRoute><Home/></ProtectedRoute>
      },
      {
        path: '/items',
        element: <ProtectedRoute><Items /></ProtectedRoute>
      },
      {
        path: '/bills',
        element: <ProtectedRoute><Bills /></ProtectedRoute>
      },
      {
        path: '/cart',
        element: <ProtectedRoute><Cart /></ProtectedRoute>
      },
      {
        path: '/customers',
        element: <ProtectedRoute><Customers /></ProtectedRoute>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
    ]
  }
]);

export default router;

export function ProtectedRoute({ children }) {
  if (localStorage.getItem('pos-user')) {
    return children;
  } else {
    return <Navigate to='/login' />;
  }
}
