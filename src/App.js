import "./App.css";
import Navbars from "./components/Navbars";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Popup from "./components/Popup";
import { useState } from "react";
import Data from "./components/Data";

function App() {
  const { productItems } = Data;
  const [cartItems, setCartItems] = useState([]);

  const handleclick = (item) => {
    const exist=cartItems.find((items)=>items.id ===item.id);
    if(exist){
      setCartItems(cartItems.map((items)=>items.id === item.id ?
      {...item,quantity:item.quantity+1}:items)
      )
    }
      else{
        setCartItems([...cartItems,{...item,quantity:1}])
      } 
  };

  const handlesubproduct =(item)=>{
    const exist=cartItems.find((items)=>items.id ===item.id);
    if(exist.quantity ===1 ){
      setCartItems(cartItems.filter((items)=>items.id ===item.id));   
    }else{
      setCartItems(
        cartItems.map((items)=>items.id === item.id ?{...exist,quantity:exist.quantity-1}:items)
      )
    }
  }

   const cartdelete=()=>{
    setCartItems([]);
   }
  return (
    <>
      <Router>
        <Navbars />
        <Routes>
          <Route
            path="/"
            element={<Home handleclick={handleclick} productItems={productItems} />}
          />
          <Route path="/pop" element={<Popup cartItems={cartItems}  handleclick={handleclick} handlesubproduct={handlesubproduct} cartdelete={cartdelete}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
