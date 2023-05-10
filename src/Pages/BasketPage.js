import React from "react";
import "../components/Basket.css";

const BasketPage = ({
  basketItems,
  handleAddProduct,
  handleRemoveProduct,
  handleBasketClearance,
}) => {
  const totalPrice = basketItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <div className="basket-items">
      <h2 className="basket-items-header">Basket Items</h2>
      <div className="clear-basket">
        {basketItems.length >= 1 && (
          <button
            className="clear-basket-button"
            onClick={handleBasketClearance}
          >
            Clear Basket
          </button>
        )}
      </div>

      {basketItems && basketItems.length === 0 && (
        <div className="basket-items-empty">No items are added.</div>
      )}
      <div>
        {basketItems?.map((item) => (
          <div key={item.id} className="basket-item-list">
            <img
              className="basket-items-image"
              src={item.image}
              alt={item.name}
            />
            <div className="basket-items-name">{item.name}</div>
            <div className="basket-items-function">
              <button
                className="basket-items-add"
                onClick={() => handleAddProduct(item)}
              >
                +
              </button>
              <button
                className="basket-items-remove"
                onClick={() => handleRemoveProduct(item)}
              >
                -
              </button>
            </div>
            <div>
              <div className="basket-items-price">
                {item.quantity} * £{item.price}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="basket-items-total-price-name">
        Total Price
        <div className="basket-items-total-price">£{totalPrice}</div>
      </div>
    </div>
  );
};

export default BasketPage;
