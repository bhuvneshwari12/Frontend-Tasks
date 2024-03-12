import React, { useEffect, useReducer, useState } from 'react';
import CartContext from './CartContext';

const defaultCartState = { items: [], totalPrice: 0, totalQuantity: 0 };

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updateTotalPrice = state.totalPrice + action.item.price;
    const updateTotalQuantity = state.totalQuantity + 1;

    const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
    const existingItem = state.items[existingItemIndex];
    let updateItems;
    let updateItem;
    if (existingItem) {
      updateItem = { ...existingItem, quantity: existingItem.quantity + 1 };
      updateItems = [...state.items];
      updateItems[existingItemIndex] = updateItem;
    } else {
      const newItem = { ...action.item, quantity: 1 };
      updateItems = state.items.concat(newItem);
    }

    return { items: updateItems, totalQuantity: updateTotalQuantity, totalPrice: updateTotalPrice };
  }

  if (action.type === 'FETCH') {
    if (!action.data) {
      return state; // Return current state if action.data is null
    }
    return {
      ...state,
      items: action.data.items || [],
      totalPrice: action.data.totalPrice || 0,
      totalQuantity: action.data.totalQuantity || 0 // Corrected to 'totalQuantity'
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);
  const [postData, setPostData] = useState(false);
  const CurrentEmailOfUser = localStorage.getItem("email")
  const userName = CurrentEmailOfUser && CurrentEmailOfUser.split('@')[0] ;
  const fetchUrl = `https://mail-box-client-5d7e8-default-rtdb.firebaseio.com/Ecommerce/${userName}.json`;


  useEffect(() => {
    if (postData) {
      fetch(fetchUrl, {
        method: 'PUT',
        body: JSON.stringify({
          items: cartState.items,
          totalPrice: cartState.totalPrice,
          totalQuantity: cartState.totalQuantity // Corrected to 'totalQuantity'
        }),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(res => {
          console.log(res);
          setPostData(false)
        } )
        .then(data => console.log(data))
        .catch(error => console.error('Error updating cart data:', error));
    }
  }, [postData]);




  useEffect(() => {
    fetch(fetchUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch cart data');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        dispatchCart({ type: "FETCH", data: data }); // Corrected to 'data'
      })
      .catch(error => console.error('Error fetching cart data:', error));
  }, [userName, fetchUrl, dispatchCart]);

  const addCartItemHandler = (item) => {
    dispatchCart({ type: "ADD_ITEM", item: item });
    setPostData(true);
  };

  const value = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    totalQuantity: cartState.totalQuantity,
    addItem: addCartItemHandler
  };

  return (
    <CartContext.Provider value={value}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
