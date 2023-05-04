import React from 'react'
import Navbar from '../Navbar'

function Basket(props) {
  const { basket } = props;

  if (!basket) {
    return <div>Loading...</div>;
  }
  

  return (
    <div>
      <Navbar />
      <h1>Basket</h1>
      {basket.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <div>
          {basket.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.amount} x {item.price}</p>
            </div>
          ))}
          <button>Checkout</button>
        </div>
      )}
      <Basket basket={basket} />
    </div>
  );
}


export default Basket;  



