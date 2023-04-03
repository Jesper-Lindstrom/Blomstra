import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import CareInstructions from "./pages/CareInstructions";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/contact";
import ProductInfo from "./pages/ProductInfo";
import Products from "./pages/Products";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Products />} />
      <Route path="product/:id" element={<ProductInfo />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="products" element={<Products />} />
      <Route path="cart" element={<Cart />} />
      <Route path="careinstructions" element={<CareInstructions />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
