import React, { useContext } from 'react';
import Images from './img/image.png';
import './Style.css';
import { CartContext } from '../context/Cart';

const Item = (props) => {
  const cart = useContext(CartContext);
  console.log("cart",cart)
  return (
    <div className="card align-items-center py-2" style={{ width: '17rem' }}>
      <img src={Images} className="card-img-top img-r" alt="Product" width={50}/>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">Price: ${props.price}</p>
        <button href="/" className="btn btn-primary" onClick={()=> cart.setItems([...cart.items,{name: props.name, price: props.price},])}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Item;
