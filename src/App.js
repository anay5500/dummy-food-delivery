import { useState } from "react";

import Header from './Layout/Header/Header'
import Description from "./Layout/Description/Description";
import AvaliableMeals from "./Meals/AvaliableMeals";
import Cart from "./Cart/Cart";
import CartProvider from "./Store/CartProvider";



function App() {
  const[cartshown,setcartshown]=useState(false);

  function showcartHandler(){
    setcartshown(true);
  }
  function hidecartHandler(){
    setcartshown(false);
  }
  return (
    <CartProvider>
      {cartshown && <Cart onClose={hidecartHandler} />}
      <Header onClick={showcartHandler}></Header>
      <main>
      <Description/>
      <AvaliableMeals/>
      </main>+
      </CartProvider>
  );
}

export default App;