import Modal from "../UI/Modal";
import React from "react";
import Card from "react-bootstrap/Card";
import classes from './Cart.module.css'
import Button from 'react-bootstrap/Button';

const Cart = (props) => {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
      image:
        " https://images.healthshots.com/healthshots/en/uploads/2023/02/27153505/Sushi-1600x900.jpg",
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
      image:
        " https://cdn.britannica.com/37/236537-050-B1FD777B/Plate-of-German-Weiner-Schnitzel-with-lemon-and-roast-potatoes.jpg",
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
      image:
        " https://recipes.net/wp-content/uploads/2021/10/the-best-grilled-bbq-burger-recipe.jpg",
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
      image:
        " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlCUOWCWZ-M17dYfL0X2x8_E1Hl4buzdZPh5KlXYxcw&s",
    },
  ];
  
  return (
    <Modal cartCloseHandler={props.cartCloseHandler}>
      <ul className={classes.scrollable}>
        {DUMMY_MEALS.map((meal) => (
          <li key={meal.id} className={classes.cartItem}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={meal.image} className={classes.cardImg} />
              <Card.Body className={classes.cardBody}>
                <Card.Title className={classes.cardTitle}>{meal.name}</Card.Title>
                <Card.Text className={classes.cardPrice}>${meal.price}</Card.Text>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
      <div className={classes.total}>
        <h2 className={classes.totalAmount}>Total amount</h2>
        <span className={classes.amount}>230$</span>
      </div>
      <div className={classes.order}>
      <Button variant="danger" onClick={props.cartCloseHandler}>Close</Button>{' '}
      <Button variant="success">Order</Button>{' '}
      </div>
    </Modal>
  );
};
export default Cart;

