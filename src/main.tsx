import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Header from "./components/Header/Header.tsx";
//import Footer from "./components/Footer/Footer.tsx";
import {
  AddToCartProvider,
  CartDialogProvider,
} from "./utils/context/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartDialogProvider>
      <AddToCartProvider>
        <Header />
        <App />
        {
          //<Footer />
        }
      </AddToCartProvider>
    </CartDialogProvider>
  </React.StrictMode>
);
