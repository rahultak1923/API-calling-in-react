import React, { useContext } from "react";
import { CartContext } from "../context/Cart";

const Cart = () => {
  // Accessing cart data from CartContext
  const cart = useContext(CartContext);

  return (
    <div className="row">
      {cart && cart.items && cart.items.length > 0 ? (
        cart.items.map((item, index) => (
          <div key={index} className="p-3 col-lg-6">
            <div className="card" style={{ width: "100%" }}>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Price $ {item.price}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  );
};

export default Cart;
