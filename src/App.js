import React, { useState } from "react";
import "./App.css";
import data from "./components/back/Data/Data";
import AppRoutes from "./components/front/Products/Routes/Routes";

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
    const productIndex = basketItems.findIndex((item) => item.id === product.id);

    if (productIndex !== -1) {
      const updatedBasket = [...basketItems];
      const productToRemove = updatedBasket[productIndex];

      if (productToRemove.quantity === 1) {
        updatedBasket.splice(productIndex, 1);
      } else {
        updatedBasket[productIndex] = {
          ...productToRemove,
          quantity: productToRemove.quantity - 1,
        };
      }

      setBasketItems(updatedBasket);
    }
  };

  /*const handleRemoveItem = (itemToRemove) => {
    const updatedBasket = basketItems.filter((item) => item.id !== itemToRemove.id);
    setBasketItems(updatedBasket);
  };
  */
  const handleRemoveItem = (product) => {
    const updatedBasket = basketItems.filter(item => item.id !== product.id);
    setBasketItems(updatedBasket);
  };
  
  /*
  const handleRemoveItem = (itemToRemove) => {
    const itemsToKeep = basketItems.filter((item) => item.id !== itemToRemove.id);
    setBasketItems(itemsToKeep);
  }; */
  
  /*const handleRemoveItem = (itemToRemove) => {
    const itemsToRemove = basketItems.filter((item) => item.id === itemToRemove.id);
    handleRemoveProduct(itemsToRemove);
    setBasketItems([0])
  };
  */
  

  
  

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
        handleRemoveItem={handleRemoveItem}
      //click={click}
      />
    </div>
  );
};

export default App;
