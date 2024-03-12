import React, { useContext } from "react";
import './CartButton.css'
import CartContext from "../../Context/CartContext";
import { BsFillHandbagFill } from 'react-icons/bs';


const CartButton = (props) => {
    const ctx=useContext(CartContext)
    
  return (
    <div>
      <button className="badge" onClick={props.cartShowHandler}>
        <span>𝕮𝖆𝖗𝖙</span>
        <BsFillHandbagFill />
        <span>{ctx.totalQuantity}</span>
      </button>
    </div>
  );
};

export default CartButton;