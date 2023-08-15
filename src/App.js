import React, { useState } from "react";
import "./App.css";
import data from "./components/back/Data/Data";
import AppRoutes from "./components/front/Products/Routes/Routes";
//import { PayPalScriptProvider } from "@paypal/react-paypal-js";
//import { BasketProvider } from "./BasketContext";
//import HamburgerMenu from "./HamburgerMenu";
//import MyNavbar from "./Navbar";
//import Footer from "./components/Footer";
//import PayPalCheckout from "./components/PayPalCheckout";

const App = () => {
  const { productItems } = data;
  const [basketItems, setBasketItems] = useState([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  //const [click, setClick] = useState(false);


  const handleAddProduct = (product) => {
    const ProductExist = basketItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setBasketItems(
        basketItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setBasketItems([...basketItems, { ...product, quantity: 1 }]);
    }
  };


  const handleRemoveProduct = (product) => {
    const ProductExist = basketItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setBasketItems(basketItems.filter((item) => item.id !== product.id));
    } else {
      setBasketItems(
        basketItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };


  const handleBasketClearance = () => {
    setBasketItems([]);
  };

  

  return (
    <div className="App">
      {/*<PayPalScriptProvider options={{ "client-id": "ARMfiWZxzTjnLoyw6u70AQxSHCxXrQENQS7TZSxYqY8X4AP0yZ-8aqmLyqTYPRDOWcQ3_Zglufer9ZiL" }} />*/}
      <AppRoutes
        productItems={productItems}
        basketItems={basketItems}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        handleBasketClearance={handleBasketClearance}
        isUserLoggedIn={isUserLoggedIn}
        setIsUserLoggedIn={setIsUserLoggedIn}
        //click={click}
      />
      
      
    </div>
  );
};

export default App;
