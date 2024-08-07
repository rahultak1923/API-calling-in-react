import React, {useContext} from "react";
import { CartContext } from "../context/Cart";

const Table = () => {
    const cart = useContext(CartContext);

  // Safely calculate the total price only if cart.items is defined
  const total = cart && cart.items && cart.items.length > 0 
  ? cart.items.reduce((acc, item) => acc + parseFloat(item.price), 0)
  : 0;

      return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Item</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        <Tableitems />
       
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <th>:</th>
          <th>$ {total}</th>
        </tr>
      </tfoot>
    </table>
  );
};

export const Tableitems = () => {
    const cart = useContext(CartContext);
  return (
    <>
    {cart && cart.items && cart.items.length > 0 ? (
      cart.items.map((item, index) => (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{item.name}</td>
          <td>$ {item.price}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="3">No items in the cart</td>
      </tr>
    )}
  </>
);
};
    


export default Table;
