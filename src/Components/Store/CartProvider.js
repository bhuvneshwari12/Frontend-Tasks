import React, { useReducer } from 'react';
import CartContext from './CartContext';

const defaultCartState = { items : [] , totalPrice: 0, totalQuantity : 0 }


const cartReducer =(state,action)=>{
           
    if(action.type === "ADD_ITEM")
    {  
       const updateTotalPrice = state.totalPrice + action.item.price ; 
       const updateTotalQuantity = state.totalQuantity + 1 ; 
       
       const existingItemIndex = state.items.findIndex(item=> item.id === action.item.id ) ;
       const existingItem  = state.items[existingItemIndex];
       let updateItems;
       let updateItem 
       if(existingItem)
       { 
          updateItem = {...existingItem , quantity : existingItem.quantity + 1 } 
          updateItems = [...state.items]
          updateItems[existingItemIndex] =updateItem
       }
       else
       {
        const newItem = {...action.item , quantity : 1}  // item.quantity
         updateItems = state.items.concat(newItem)
       }
    
       return {items : updateItems , totalQuantity : updateTotalQuantity ,totalPrice : updateTotalPrice  }
    }
   

    return defaultCartState ;
}

const CartProvider = (props) => {

    const[cartState , dispatchCart] = useReducer(cartReducer , defaultCartState) 

    const addCartItemHandler =(item) =>{
       dispatchCart({type : "ADD_ITEM" , item : item })

    }
    


   const value= { 
    items : cartState.items,
    totalPrice : cartState.totalPrice,
    totalQuantity : cartState.totalQuantity,
    addItem : addCartItemHandler
    }


  return (
    <CartContext.Provider  value = { value }>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;
