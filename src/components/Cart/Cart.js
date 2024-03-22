import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import Card from '../UI/Card';

const CartItemsList = () => {
  const cartItems = useSelector(state => state.cart.items);

  return (
      <Card>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
      </Card>
  );
};

export default CartItemsList;
