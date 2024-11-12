import React, { useContext } from 'react'
import { CartContext } from '../context/Cart'
import Images from './img/image.png'


const Cartnew = () => {
    const cart = useContext(CartContext);
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
    </div>
  )
}

export default Cartnew
