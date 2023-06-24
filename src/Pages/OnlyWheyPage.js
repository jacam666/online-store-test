import React from "react";
import AddToCartButton from "../components/AddToCartButton";

const OnlyWheyPage = ({ productItem, handleAddProduct }) => {
  const product = {
    id: "1",
    name: "THE ONLY WHEY 2.2KG 74 servings",
    price: 39.99,
    image: "/images/only-whey-final-300x300.png",
    //image2: "/images/only-whey-nutritional-info.jpeg",
    to: "./OnlyWheyPage",
    description: [
      "The Only Whey protein shake has been developed to offer a",
      <br />,
      "premium protein powder which can only be expected of SNC. Each",
      <br />,
      "serving delivers up to 24% of protein from instantized whey",
      <br />,
      "protein concentrate, Whey protein isolate and Hydrolysed Whey",
      <br />,
      "Protein to feed muscle tissue growth and aid recovery for",
      <br />,
      "optimum results.",
    ],
    servings: "74 Servings",
  };

  return (
    <div className="product-card">
      <div className="product-container">
      <h2 className="product-name">{product.name}</h2>
        <div className="product-image-container">
          <img
            className="product-card-image"
            src={product.image}
            alt={product.name}
          />
          <img className="product-card-image-2" src="/images/only-whey-nutritional-info.jpeg" alt="protein" />
        </div>
        <div className="product-card-info">
          <div className="product-price">
            <p>Price: £{product.price}</p>
          </div>

          <div className="product-description">
            <h1>Description:</h1>
            <p>{product.description}</p>
          </div>
          <div className="servings-info">
            <h1>Servings:</h1>
            <p>{product.servings}</p>
          </div>
          <div className="product-directions">
            <p>{product.directions}</p>
          </div>
          <div className="product-advice">
            <p>{product.advice}</p>
          </div>
          <div className="product-storage">
            <p>{product.storage}</p>
          </div>

          <p className="product-ingredient">{product.ingredients}</p>
        </div>
        <AddToCartButton
                handleAddProduct={handleAddProduct}
                productItem={product}
            />
      </div>
      
    </div>
  );
};

export default OnlyWheyPage;
