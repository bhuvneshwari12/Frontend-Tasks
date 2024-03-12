import Modal from "../Modal/Modal";
import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import CartContext from "../Context/CartContext";
import './Cart.css'

const Cart = (props) => {
  const ctx=useContext(CartContext)
  const list=ctx.items

  return (
    <Modal cartCloseHandler={props.cartCloseHandler}>
     <div className="cart-container">
     <ul>
        {list.map((goods) => (
          <li >
            <Card className="card">
             <img src={goods.image}></img>
              <Card.Body>
                <Card.Title>{goods.title}</Card.Title>
                <Card.Text>${goods.price}</Card.Text>
                <Card.Text>quantity: {goods.quantity}</Card.Text>
              </Card.Body>
            </Card>
          </li>    
          
        ))}
      </ul>
      <div className="total">
        <h2>Total Amount:</h2>
        <h2>${ctx.totalPrice.toFixed(1)}</h2>
      </div>
     </div>
     
    </Modal>
    
  );
};
export default Cart;