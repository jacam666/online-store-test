import React from "react";
import "../StageRipped.css"
import AddToCartButton from "./AddToCartButton";
import { BsFillHexagonFill } from "react-icons/bs";
import BasketIcon from "../BasketIcon";

const StageRipped = ({ productItem, handleAddProduct }) => {
  const product = {
    id: "6",
    image: "/images/Stage-Ripped-CGI-300x300.png",
    name: ["STAGE RIPPED", <br />, " 60 caps"],
    price: 29.99,
    description:
      "Staged Ripped is a weight loss supplement that helps you burn fat, boost energy, suppress appetite, and raise body temperature. It contains ingredients such as caffeine, kola nut, guarana, 5-HTP, hordenine, paradoxine, and vitamins B3 and B6 that work together to enhance your metabolism, mood, and thermogenesis. It is suitable for both men and women who want to achieve a lean and ripped physique. For best results take on a calorie reduced diet.",
    ingredients: "INGREDIENT INFORMATION 1 Capsule: Caffenine Anhydrous 225mg, Kola Nut Extract 3% Caffeine, 2% Theobromine 200mg, Guarana Seed Extract125mg, 5-HTP 5-Hydroxytophan 75mg, Hordenine HCL 75mg, Paradoxine Grains of paradise. Std. to 12.5% 6- paradol 40mg, Vitamin B3 5mg 25%, Vitamin B6 as Pyridoxine HCL 5mg 357% Chromium Picolinate 100mcg 250% ",
    servings: "60 caps"

  };

  return (
    <div>
      <BasketIcon className="product-page-basket-icon" />
      <div className="product-card">
        <div className="product-container">
          <div className="product-image-container">
            <div className="name-and-bullet-container">
              <h2 className="product-name">{product.name}</h2>
              <div className="bullet-points-container" >
                <div className="bullet-points">
                  <BsFillHexagonFill className="hexagon-icon" />
                  <p className="product-bullet-points">225g of Caffeine Anhydrous per capsule</p>
                </div>
                <div className="bullet-points">
                  <BsFillHexagonFill className="hexagon-icon" />
                  <p className="product-bullet-points">200mg of Kola Nut Extract (3% Caffeine, 2% Theobromine)</p>
                </div>
                <div className="bullet-points">
                  <BsFillHexagonFill className="hexagon-icon" />
                  <p className="product-bullet-points">125g of Guarana Seed Extract per capsule</p>
                </div>
                <div className="bullet-points">
                  <BsFillHexagonFill className="hexagon-icon" />
                  <p className="product-bullet-points">75mg of 5-HTP 5-Hydroxytophan per capsule</p>
                </div>
                <div className="bullet-points">
                  <BsFillHexagonFill className="hexagon-icon" />
                  <p className="product-bullet-points">75mg 0f Hordenine HCL per capsule</p>
                </div>
                <div className="bullet-points">
                  <BsFillHexagonFill className="hexagon-icon" />
                  <p className="product-bullet-points">40mg of Paradoxine Grains of paradise. Std. to 12.5% 6- paradol</p>
                </div>
              </div>
            </div>
            <img
              className="product-card-image"
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="product-card-info">

            <div className="product-price">
              <p>Price: {product.price}</p>
            </div>

            <div className="product-description">
              <p>{product.description}</p>
            </div>
            <div className="servings-info">
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
    </div>
  );
}

export default StageRipped;
