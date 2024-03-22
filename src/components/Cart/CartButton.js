// CartButton.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { toggle } from '../../Store/store';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartTotalQuantity = useSelector(state => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    console.log("button working");
    dispatch(toggle());
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotalQuantity}</span>
    </button>
  );
};

export default CartButton;
