/*import React, { useState } from "react";
import "../ProductCard.css";
import Navbar from "../Navbar";
//import Basket from "./Basket";


function ProductCard(props) {
  const { name, price, image, description, options } = props.product;
  const [basket] = useState([]);
  const [selectedAmount, setSelectedAmount] = useState(1);

  const addToBasket = () => {
    const productToAdd = 
    { ...props.product, 
      amount: selectedAmount
    };
    props.onProductSelection(productToAdd); 
  };

  


  const handleAmountChange = (e) => {
    setSelectedAmount(parseInt(e.target.value));
  };

  const renderAmountOptions = () => {
    const options = [];
    for (let i = 1; i <= 10; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  if (!props.product || !basket) {
    return <div>Loading...</div>;
  }
  

  return (
    <div>
      <Navbar />
      <div className="product-card">
        <div className="product-card-image">
          <img src={image} alt="protein" />
        </div>
        <div className="product-card-details">
          <h1>{name}</h1>
          <h2>{price}</h2>
          {options && (
            <div className="options-description-container">
              <div className="product-card-options">
                {options.flavors && (
                  <div className="product-card-checkboxes">
                    <label>
                      <input type="checkbox" />
                      <span>{options.flavors[0]}</span>
                    </label>
                  </div>
                )}
                <div className="product-card-amount">
                  <label htmlFor="amount">Amount:</label>
                  <select id="amount" name="amount" onChange={handleAmountChange}>
                    {renderAmountOptions()}
                  </select>
                  <button onClick={addToBasket}>Add to basket</button>

                  {options.ingredients && (
                    <div className="ingredient-info">
                      <h3>Ingredient Information:</h3>
                      <p>{options.ingredients}</p>
                    </div>
                  )}
                </div>
              </div>
              <div>
                {options.servings && (
                  <div className="servings-info">
                    <p>{options.servings}</p>
                  </div>
                )}
              </div>
              <div className="product-description">
                {description && (
                  <div className="servings-info">
                    <h1>Description:</h1>
                    <p>{description}</p>
                  </div>
                )}
              </div>
              <div className="product-description">
                {options.directions && (
                  <div className="directions-info">
                    <h1>Directions of use:</h1>
                    <p>{options.directions}</p>
                  </div>
                )}
              </div>
            </div>
          )}   
        </div>
      </div>
    </div>
  );
}

export default ProductCard;  */


