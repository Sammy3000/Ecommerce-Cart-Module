import React from "react";
import Navbar from "./components/Navbar"; 
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch()
  return (
    <main>
      <Navbar/>
      <CartContainer/>
    </main>
  );
}

export default App;
