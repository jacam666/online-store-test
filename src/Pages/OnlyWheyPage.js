import React from "react";
import "../ProductCard.css";
import Navbar from "../Navbar";

function OnlyWhey() {
  return (
    <div>
      <Navbar />
        <div className="product-card">
      <div className="product-card-image">
        <img src="/images/only-whey-final-300x300.png" alt="protein" />
      </div>
      <div className="product-card-details">
        <h1>
          THE ONLY WHEY 2.2KG <span>74 SERVINGS</span>
        </h1>
        <h2>£39.99</h2>
        <div className="product-card-options">
          <div className="product-card-checkboxes">
            <label>
              <input type="checkbox" />
              <span>Banana Split</span>
            </label>
          </div>
          <div className="product-card-checkboxes">
            <label>
              <input type="checkbox" />
              <span>Chocolate/Caramel</span>
            </label>
          </div>
          <div className="product-card-checkboxes">
            <label>
              <input type="checkbox" />
              <span>Clotted Vanilla Ice Cream</span>
            </label>
          </div>
          <div className="product-card-checkboxes">
            <label>
              <input type="checkbox" />
              <span>Rhubarb and Custard</span>
            </label>
          </div>
          <div className="product-card-checkboxes">
            <label>
              <input type="checkbox" />
              <span>Strawberry Cream</span>
            </label>
          </div>
        </div>
        <div className="product-card-amount">
          <label htmlFor="amount">Amount:</label>
          <select id="amount" name="amount"></select>
          <button>Add to basket</button>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default OnlyWhey;
