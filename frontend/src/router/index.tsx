import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Shop from "../components/shop/Shop";
import Cart from "../components/cart/Cart";
import Layout from "../components/layout/Layout";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <App />,
        },
        {
          path: "about",
          element: <AboutUs />,
        },
        {
          path: "tienda",
          element: <Shop />,
        },
        {
          path: "carrito",
          element: <Cart />,
        },
        {
          path: "contacto",
          element: <Contact />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "registro",
          element: <Register />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.MODE === "production" ? "/echo" : "/",
  }
);
