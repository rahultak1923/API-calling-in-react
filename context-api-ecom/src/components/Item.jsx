import React,{useContext} from "react";
import { CartContext } from "../context/Cart";

const Item = (props) => {
    const cart = useContext(CartContext);
    console.log("cart", cart);
  return (
    <div className="p-2 col-lg-3">
      <div class="card" style={{width: "100%"}}>
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text">
         Price ${props.price}
          </p>
          <button href="/" class="btn btn-danger" onClick={()=> cart.setItems([...cart.items, {name: props.name , price: props.price}])}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Item;
