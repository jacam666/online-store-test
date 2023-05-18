import React, { useState } from "react";
import "./App.css";
import data from "./components/back/Data/Data";
import AppRoutes from "./components/front/Products/Routes/Routes";
import Logo from "./components/Logo";
import Navbar from "./Navbar";
import Footer from "./components/Footer";

const App = () => {
  const { productItems } = data;
  const [basketItems, setBasketItems] = useState([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);




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
      <Navbar basketItems={basketItems} />
      <Logo />
      <AppRoutes
        productItems={productItems}
        basketItems={basketItems}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        handleBasketClearance={handleBasketClearance}
        isUserLoggedIn={isUserLoggedIn}
        setIsUserLoggedIn={setIsUserLoggedIn}
      />
      <Footer />
    </div>
  );
};

export default App;
