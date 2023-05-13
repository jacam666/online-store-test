import React from "react";

const BundleDeal2 = () => {
  /*const [basketItems, setBasketItems] = useState([]);

  const addToBasket = (item) => {
    setBasketItems([...basketItems, item]);
  };*/

  const product = {
    image: "./images/BUNDLE-2-FINAL.png",
    name: "BUNDLE DEAL 2",
    price: "£44.99",
    description: ["Stage Ripped together with B4 Train"],
  };

  return (
    <div className="product-card">
        <div>
            <img
                className="product-card-image"
                src={product.image}
                alt={product.name}
            />
            <h2 className="product-name">{product.name}</h2>
            <div className="product-price">
                <p>Price: {product.price}</p>
            </div>

            <div className="product-description">
                <h1>Description:</h1>
                <p>{product.description}</p>
            </div>
            <div className="servings-info">
                <p>{product.servings}</p>
            </div>
            <div className="product-directions">
                <p>{product.directions}</p>
            </div>
            <div>
                <p className="product-advice">{product.advice}</p>
            </div>
            <div>
                <p className="product-storage">{product.storage}</p>
            </div>

            <p className="product-ingredient">{product.ingredients}</p>
        </div>
    </div>
);
}

export default BundleDeal2;
