/*import React from "react";
import "../ProductCard.css";
import Navbar from "../Navbar"; */

/*function OnlyWhey() {
  return (
    <div>
      <Navbar />
      <div className="product-card">
        <div className="product-card-image">
          <img src="/images/only-whey-final-300x300.png" alt="protein" />
        </div>
        <div className="product-card-details">
          <h1>
            THE ONLY WHEY 2.2KG 
          </h1>
          <h2>£39.99</h2>
          <div className="options-description-container">
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
              <div className="product-card-amount">
                <label htmlFor="amount">Amount:</label>
                <select id="amount" name="amount"></select>
                <button>Add to basket</button>
              </div>
            </div>
            <h4>74 SERVINGS</h4>
            <div>

            </div>
            <div className="product-description">
              <h1>Description</h1>
              <p>
                The Only Whey protein shake has been developed to offer a
                premium protein powder which can only be expected of SNC. Each
                serving delivers up to 24% of protein from instantized whey
                protein concentrate, Whey protein isolate and Hydrolysed Whey
                Protein to feed muscle tissue growth and aid recovery for
                optimum results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}*/

//import React, { useState } from "react";
//import Products from "../components/front/Products/Products";

function OnlyWhey() {

  const Products = {
    id: "1",
    name: "THE ONLY WHEY 2.2KG",
    price: "£39.99",
    image: "/images/only-whey-final-300x300.png",
    
    /*description: ["The Only Whey protein shake has been developed to offer a",<br/>,
    "premium protein powder which can only be expected of SNC. Each",<br/>,
    "serving delivers up to 24% of protein from instantized whey",<br/>,
    "protein concentrate, Whey protein isolate and Hydrolysed Whey",<br/>,
    "Protein to feed muscle tissue growth and aid recovery for",<br/>,
    "optimum results."],
    options: {
        flavours: ["Banana Split", "Chocolate/Caramel"]*/
  }
  return <Products productItems={Products } />;
};  

export default OnlyWhey;

