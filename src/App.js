import React from "react";

import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import { CartProvider } from "./components/Context/CartContext";

function App() {


  return (
    <CartProvider>
      <Header/>
      <Meals/>
    </CartProvider>
  );
}

export default App;
