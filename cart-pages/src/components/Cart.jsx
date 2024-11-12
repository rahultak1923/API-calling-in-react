import React, { useContext } from 'react'
import Images from './img/image.png'
import './Style.css'
import { CartContext } from '../context/Cart'


const Cart = () => {
  // context ka data is file me lane ke liye 
  const cart = useContext(CartContext);

  const total = cart.items.reduce((a,b)=> a+b.price,0)
  return (
    <div>
       <div className='container mt-4 d-flex'>
         {cart && cart.items.map((item)=>(

        
    <div className="card align-items-center py-2 mx-2" style={{ width: '17rem' }}>
      <img src={Images} className="card-img-top img-r" alt="Product" width={50}/>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">Price: ${item.price}</p>
        <a href="/" className="btn btn-primary">Add to Cart</a>
      </div>
    </div>
     ))}
    </div>
    <h2>total bill: ${total}</h2>
    </div>
  )
}

export default Cart
