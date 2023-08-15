/*import React, { useState } from "react";
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

  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleClick = () => {
    setPopupVisible(true);
  };


  const handleConfirmClearance =() => {
    handleBasketClearance();
    setPopupVisible(false);
  }

  const handleCancelClearance = () => {
    setPopupVisible(false);
  }

  const shipping = 3.99;
  const totalPriceIncludingShipping = (totalPrice + shipping).toFixed(2);

  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    navigate("/Checkout");
  };

  return (
    <div className="basket-items">
      <div className="basket-product-container">
        <div className="basket-product-card-info">
          <h2 className="basket-items-header">Basket Items</h2>
          <div className="clear-basket">
            {basketItems.length >= 1 && (
              <button
                className="clear-basket-button"
                onClick={handleClick}
              >
                Clear Basket
              </button>
            )}
            
            {isPopupVisible && (
              <div className="basket-popup">
                <div className="basket-popup-message">
                Proceed?
                </div>
                <div className="popup-buttons">
                    <button 
                    className="popup-button confirm"
                    onClick={handleConfirmClearance}>
                      Yes
                    </button>
                    <button 
                    className="popup-button cancel"
                    onClick={handleCancelClearance}>
                      No
                    </button>
                </div>
              </div>
            )}
          </div>
          {basketItems && basketItems.length === 0 && (
            <div className="basket-items-empty">No items are added.</div>
          )}
          <div className="basket-items-container">
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

          <div className="basket-totals-container">
            {basketItems.length > 0 && (
              <div className="basket-totals">Basket Totals:</div>
            )}

            {basketItems.length > 0 && (
              <div className="basket-items-total-price-name">
                <div>Subtotal :</div>
                <div className="basket-subtotal">£{totalPrice.toFixed(2)}</div>
              </div>
            )}

            {basketItems.length > 0 && (
              <div className="basket-shipping">
                <h2 className="basket-shipping-header">Shipping :</h2>
                <h2 className="basket-shipping-price">Flat rate : £3.99</h2>
                <p className="basket-shipping-estimate">
                  This is only an estimate. Prices will be updated during
                  checkout.
                </p>
              </div>
            )}

            {basketItems.length > 0 && (
              <div className="total-price-including-shipping">
                <div className="total-price-including-shipping-header">
                  Total price :
                </div>
                <div className="total-price-including-shipping-price">
                  £{totalPriceIncludingShipping}
                </div>
              </div>
            )}
          </div>

          {basketItems.length > 0 && (
            <div>
              <button className="checkout-button" onClick={handleCheckoutClick}>
                Proceed to checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
*/
import React /*{ useState } */ from "react";
import "../components/Basket.css";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

const BasketPage = ({
  basketItems,
  handleAddProduct,
  handleRemoveProduct,
  //handleBasketClearance,
}) => {
  const totalPrice = basketItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  ).toFixed(2);

  /*const totalItemPrice = basketItems.reduce(
    (price, item) => item * price,
  )
  */
  const totalItemPrice = basketItems.map(item => (item.quantity * item.price).toFixed(2));


  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    navigate("/Checkout");
  };
  const COLORS = {
    background: '#e1dddd',
  }

  return (
    <section className="h-100" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                Shopping Cart
              </MDBTypography>
            </div>
            {basketItems.map((item, index) => (
              <MDBCard key={item.id} className="rounded-3 mb-4">
                <MDBCardBody className="p-4">
                  <MDBRow className="justify-content-between align-items-center">
                    <MDBCol md="2" lg="2" xl="2">
                      <MDBCardImage
                        className="rounded-3"
                        style={{ backgroundColor: COLORS.background }}
                        fluid
                        src={item.image}
                        alt={item.name}
                      />
                    </MDBCol>
                    <MDBCol md="3" lg="3" xl="3">
                      <p className="lead fw-normal mb-2">{item.name}</p>
                    </MDBCol>
                    <MDBCol
                      md="3"
                      lg="3"
                      xl="2"
                      className="d-flex align-items-center justify-content-around"
                    >
                      <MDBBtn
                        color="link"
                        className="px-2"
                        onClick={() => handleRemoveProduct(item)}
                      >
                        <MDBIcon fas icon="minus" />
                      </MDBBtn>
                      <MDBInput
                        min={0}
                        value={item.quantity || 0}
                        type="number"
                        size="sm"
                        className="basket-input-bar"
                        onChange={(e) =>
                          handleAddProduct({
                            ...item,
                            quantity: parseInt(e.target.value),
                          })
                        }
                      />
                      <MDBBtn
                        color="link"
                        className="px-2"
                        onClick={() => handleAddProduct(item)}
                      >
                        <MDBIcon fas icon="plus" />
                      </MDBBtn>
                    </MDBCol>
                    <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                      <MDBTypography tag="h5" className="mb-0">
                        £{totalItemPrice[index]}
                      </MDBTypography>
                    </MDBCol>
                    <MDBCol md="1" lg="1" xl="1" className="text-end">
                      {basketItems.length >= 1 && (
                        <a href="#!" className="text-danger" onClick={ handleAddProduct}>
                          <MDBIcon fas icon="trash text-danger" size="lg" />
                        </a>
                      )}
                    </MDBCol>
                  </MDBRow>
                  
                </MDBCardBody>
                
              </MDBCard>
              
            ))}
            <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
            <MDBTypography tag="h5" className="mb-0">
              Total Price: £{totalPrice}
            </MDBTypography>
          </MDBCol>
          {basketItems.length > 0 && (
              <div>
                <div className="d-grid gap-2 col-6 mx-auto mt-4" onClick={handleCheckoutClick}>
                  <MDBBtn>Proceed to checkout</MDBBtn>
                </div>
              </div>
            )} 
            {/* ... */}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default BasketPage;

