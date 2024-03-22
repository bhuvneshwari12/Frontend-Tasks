import { configureStore, createSlice } from "@reduxjs/toolkit";

// UI Slice
const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const { toggle, showNotification } = uiSlice.actions;

// Cart Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: {items: [], totalQuantity: 0, },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    setCartData(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
  },
});     //cart -> chnange 
  
export const { addItemToCart, removeItemFromCart, setCartData } = cartSlice.actions;




// Thunk Action Creators
export const postCartData = (cart) => {
  return async (dispatch) => {
    dispatch(showNotification({ status: 'pending', title: 'Sending...', message: 'Sending cart data!' }));
    try {
      const response = await fetch('https://react-http-8e0dd-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      } 
      else {
        dispatch(showNotification({ status: 'success', title: 'Success!', message: 'Sent cart data successfully!' }));
      }
    } 
    
    catch (error) {
      dispatch(showNotification({ status: 'error', title: 'Error!', message: 'Sending cart data failed!' }));
    }
  };
};



export const fetchCartData = () => {
  return async (dispatch) => {
    dispatch(showNotification({ status: 'pending', title: 'Fetching...', message: 'Fetching cart data!' }));
    try {
      const response = await fetch('https://react-http-8e0dd-default-rtdb.firebaseio.com/cart.json');
      if (!response.ok) {
        throw new Error('Fetching cart data failed.');
      }
      const data = await response.json();
      console.log(" Data fetched")
      dispatch(setCartData(data));
      dispatch(showNotification({ status: 'success', title: 'Success!', message: 'Fetched cart data successfully!' }));
    } 
    
    catch (error) {
      dispatch(showNotification({ status: 'error', title: 'Error!', message: 'Fetching cart data failed!' }));
    }
  };
};





const store = configureStore({
  reducer: { 
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
