import React from "react";
import "../components/Basket.css";
import { useNavigate } from "react-router-dom";

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
  const shipping = 3.99;
  const totalPriceIncludingShipping = totalPrice + shipping;

  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    navigate('/Checkout');
  };

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
      {basketItems.length > 0 && (
        <div className="basket-totals">Basket Totals:</div>
      )}
      

      {basketItems.length > 0 && (
        <div className="basket-items-total-price-name">
        <div>Subtotal :</div>
        <div>£{totalPrice}</div>
      </div>
      )}
      
      {basketItems.length > 0 && (
        <div className="basket-shipping">
        <h2 className="basket-shipping-header">Shipping :</h2>
        <h2 className="basket-shipping-price">Flat rate : £3.99</h2>
        <p className="basket-shipping-estimate">This is only an estimate. Prices will be updated during checkout.</p>
      </div>
      )}
      


      {basketItems.length > 0 && (
        <div className="total-price-including-shipping">
        <div className="total-price-including-shipping-header">Total price :</div>
        <div className="total-price-including-shipping-price">£{totalPriceIncludingShipping}</div>
      </div>
      )}
      

      {basketItems.length > 0 && (
        <div>
        <button className="checkout-button" onClick={handleCheckoutClick}>
          Proceed to checkout
        </button>
      </div>
      )}
      
    </div>
  );
};

export default BasketPage;
