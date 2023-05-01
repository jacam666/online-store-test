import React from "react";
import "../ProductCard.css";
import Navbar from "../Navbar";

function ProductCard(props) {
  const { name, price, image, description, options } = props.product;

  if (!props.product) {
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
          <h1>
            {name} <span>{options && options.servings}</span>
          </h1>
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
                  <select id="amount" name="amount"></select>
                  <button>Add to basket</button>
                  {options.ingredients && (
                    <div className="ingredient-info">
                      <p>{options.ingredients}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="product-description">
                <h1>Description</h1>
                <p>{description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
