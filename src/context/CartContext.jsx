import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

// Initial state
const initialState = {
  cartItems: localStorage.getItem('cartItems') 
    ? JSON.parse(localStorage.getItem('cartItems')) 
    : [],
  totalPrice: 0,
};

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.cartItems.findIndex(
        item => item.id === action.payload.id
      );
      
      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex] = {
          ...updatedCartItems[existingItemIndex],
          quantity: updatedCartItems[existingItemIndex].quantity + 1
        };
        
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        // Item doesn't exist, add it
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };
    
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item => 
          item.id === action.payload.id 
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    
    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
      };
    
    case 'CALCULATE_TOTALS':
      const totalPrice = state.cartItems.reduce(
        (total, item) => total + (item.price * item.quantity), 
        0
      );
      
      return {
        ...state,
        totalPrice,
      };
    
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  // Calculate totals whenever cartItems changes
  useEffect(() => {
    dispatch({ type: 'CALCULATE_TOTALS' });
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  }, [state.cartItems]);
  
  // Helper functions
  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };
  
  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };
  
  const updateQuantity = (productId, quantity) => {
    dispatch({ 
      type: 'UPDATE_QUANTITY', 
      payload: { id: productId, quantity } 
    });
  };
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  
  return (
    <CartContext.Provider value={{
      cartItems: state.cartItems,
      totalPrice: state.totalPrice,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
