import React from "react";
import "../StageRipped.css"
import AddToCartButton from "./AddToCartButton";

const StageRipped = ({ productItem, handleAddProduct }) => {
  const product = {
    id: "6",
    image: "/images/Stage-Ripped-CGI-300x300.png",
    name: ["STAGE RIPPED", <br /> , " 60 caps"],
    price: 29.99,
    description:
      "Stage Ripped has been especially formulated to aid in weight loss, giving energy, suppressing appetite and increasing body temperature for burning fat. For best results take on a calorie reduced diet.",
    ingredients: "INGREDIENT INFORMATION 1 Capsule: Caffenine Anhydrous 225mg, Kola Nut Extract 3% Caffeine, 2% Theobromine 200mg, Guarana Seed Extract125mg, 5-HTP 5-Hydroxytophan 75mg, Hordenine HCL 75mg, Paradoxine Grains of paradise. Std. to 12.5% 6- paradol 40mg, Vitamin B3 5mg 25%, Vitamin B6 as Pyridoxine HCL 5mg 357% Chromium Picolinate 100mcg 250% ",
    servings: "60 caps"

  };

  return (
    <div className="stage-ripped-product-card">
      <div className="stage-ripped-product-container">
      <h1 className="stage-ripped-product-name">{product.name}</h1>
        <div className="stage-ripped-product-image-container">
          <img
            className="stage-ripped-product-card-image"
            src={product.image}
            alt={product.name}
          />
          <img className="stage-ripped-product-card-image-2" src="/images/staged-ripped-info.jpeg" alt="protein" />
        </div>

        <div className="stage-ripped-product-card-info">
          
          <div className="stage-ripped-product-price">
            <p>Price: {product.price}</p>
          </div>

          <div className="stage-ripped-product-description">
            <h1 className="product-description-heading">Description:</h1>
            <p>{product.description}</p>
          </div>
          <div className="stage-ripped-servings-info">
            <h1>Servings:</h1>
            <p>{product.servings}</p>
          </div>
          <div className="stage-ripped-product-directions">
            <p>{product.directions}</p>
          </div>
          <div className="stage-ripped-product-advice">
            <p>{product.advice}</p>
          </div>
          <div className="stage-ripped-product-storage">
            <p>{product.storage}</p>
          </div>
        </div>
        <AddToCartButton
          handleAddProduct={handleAddProduct}
          productItem={product}
        />
      </div>
    </div>
  );
}

export default StageRipped;
