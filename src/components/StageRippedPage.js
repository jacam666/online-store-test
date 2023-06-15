import React from "react";
import "../ProductCard.css"
import AddToCartButton from "./AddToCartButton";
import Logo from "./Logo";

const StageRipped = ({ productItem, handleAddProduct }) => {
  const product = {
    id: "6",
    image: "/images/Stage-Ripped-CGI-300x300.png",
    name: "STAGE RIPPED 60 caps",
    price: 29.99,
    description:
      "Stage Ripped has been especially formulated to aid in weight loss, giving energy, suppressing appetite and increasing body temperature for burning fat. For best results take on a calorie reduced diet.",

    ingredients: "INGREDIENT INFORMATION 1 Capsule: Caffenine Anhydrous 225mg, Kola Nut Extract 3% Caffeine, 2% Theobromine 200mg, Guarana Seed Extract125mg, 5-HTP 5-Hydroxytophan 75mg, Hordenine HCL 75mg, Paradoxine Grains of paradise. Std. to 12.5% 6- paradol 40mg, Vitamin B3 5mg 25%, Vitamin B6 as Pyridoxine HCL 5mg 357% Chromium Picolinate 100mcg 250% ",
    servings: "60 caps"

  };

  return (
    <div className="product-card">
      <Logo />
      <div className="product-container ">
        <img
          className="product-card-image"
          src={product.image}
          alt={product.name}
        />
        <div className="product-card-info">
        <h2 className="product-name">{product.name}</h2>
        <div className="product-price">
          <p>Price: {product.price}</p>
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
        <div className="product-ingredient">
          <h1>Ingredients:</h1>
          <p>{product.ingredients}</p>
        </div>
        </div>
      </div>
      <AddToCartButton
        handleAddProduct={handleAddProduct}
        productItem={product}
      />
    </div>
  );
}

export default StageRipped;
