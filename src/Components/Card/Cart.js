import Modal from "../UI/Modal";
import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import classes from './Cart.module.css'
import Button from 'react-bootstrap/Button';
import CartContext from "../Store/CartContext";

const Cart = (props) => {

const ctx=useContext(CartContext)

  const DUMMY_MEALS = ctx.items;
  
  return (
    <Modal cartCloseHandler={props.cartCloseHandler}>
      <ul className={classes.scrollable} >
        {DUMMY_MEALS.map((meal) => (
          <li key={meal.id} className={classes.cartItem}>
            <Card style={{ width: "18rem" } }>
              <Card.Img variant="top" src={meal.image} className={classes.cardImg} />
              <Card.Body className={classes.cardBody}>
                <Card.Title className={classes.cardTitle}>{meal.name}</Card.Title>
                <Card.Text className={classes.cardPrice}>${meal.price}</Card.Text>
                <Card.Text className={classes.cardPrice}>Quantity:{meal.quantity} </Card.Text>
              </Card.Body>   
            </Card>
          </li>
        ))}
      </ul>
      <div className={classes.total}>
        <h2 className={classes.totalAmount}>Total amount</h2>
        <span className={classes.amount}>${ctx.totalPrice.toFixed(2)}</span>
      </div>
      <div className={classes.order}>
      <Button variant="danger" onClick={props.cartCloseHandler}>Close</Button>{' '}
      <Button variant="success">Order</Button>{' '}
      </div>
    </Modal>
  );
};
export default Cart;