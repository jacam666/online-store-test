import React, { useState } from "react";
import AddToCartButton from "../components/AddToCartButton";
import { BsFillHexagonFill } from "react-icons/bs";

const OnlyWheyPage = ({ productItem, handleAddProduct }) => {

  //const [selectedFlavor, setSelectedFlavor] = useState("");
  const [selectedFlavor, setSelectedFlavors] = useState([]);
  const product = {
    id: "1",
    name: "THE ONLY WHEY 2.2KG",
    price: 39.99,
    image: "/images/only-whey-final-300x300.png",
    //image2: "/images/only-whey-nutritional-info.jpeg",
    to: "./OnlyWheyPage",
    description: [
      "The Only Whey protein shake has been developed to offer a",
      <br />,
      "premium protein powder which can only be expected of SNC. Each",
      <br />,
      "serving delivers up to 24g of protein from instantized whey",
      <br />,
      "protein concentrate, Whey protein isolate and Hydrolysed Whey",
      <br />,
      "Protein to feed muscle tissue growth and aid recovery for",
      <br />,
      "optimum results.",
    ],
    servings: "74 Servings",
    flavors: ["Banana Split", "Chocolate Caramel", "Strawberry Cream", "Clotted Vanilla Ice Cream", "Rhubarb and Custard"],
  };

  /*const handleFlavorChange = (e) => {
    setSelectedFlavor(e.target.value);
  };*/

  const handleFlavorChange = (flavor) => {
    if (selectedFlavor.includes(flavor)) {
      setSelectedFlavors(selectedFlavor.filter((f) => f !== flavor));
    } else {
      setSelectedFlavors([...selectedFlavor, flavor]);
    }
  };

  return (
    <div className="product-card">
      <div className="product-container">
        <div className="product-image-container">
          <div className="bullet-points-container" >
            <h2 className="product-name">{product.name}</h2>
            <div className="bullet-points">
              <BsFillHexagonFill className="hexagon-icon" size={20} />
              <p className="product-bullet-points">23.7g of protein to support growth and maintenance of muscle</p>
            </div>
            <div className="bullet-points">
              <BsFillHexagonFill className="hexagon-icon" size={10} />
              <p className="product-bullet-points">Only 1.1g of sugar per serving.</p>
            </div>
          </div>
          <img
            className="product-card-image"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="product-card-info">

          <div className="product-flavors-container">
          <div className="product-flavors">
  <label>Flavors:</label>
  {product.flavors.map((flavor) => {
    const flavorKey = flavor.replace(/ /g, "-");
    return (
      <div key={flavorKey} className="flavor-checkbox">
        <input
          type="checkbox"
          id={flavorKey}
          checked={selectedFlavor.includes(flavor)}
          onChange={() => handleFlavorChange(flavor)}
        />
        <label htmlFor={flavorKey} className={`flavor-label flavor-${flavorKey}`}>
          {flavor}
        </label>
      </div>
    );
  })}
</div>
            {/*<div className="product-flavors">
              <label>Flavours:</label>
              {product.flavors.map((flavor) => (
                <div
                  key={flavor}
                  className="flavor-checkbox">
                  <input
                    type="checkbox"
                    id={flavor}
                    checked={selectedFlavor.includes(flavor)}
                    onChange={() => handleFlavorChange(flavor)}
                  />
                  <label htmlFor={flavorKey} className={`flavor-label flavor-${flavorKey}`}>
                    {flavor}
                  </label>
                </div>
              ))}
              </div>*/}
          </div>

          <div className="product-price">
            <p>Price: £{product.price}</p>
          </div>
          <div className="product-description">
            <p>{product.description}</p>
          </div>
          <div className="servings-info">
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
