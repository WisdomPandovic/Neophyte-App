const initialState = {
    items: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        console.log("Received ADD_TO_CART action with payload:", action.payload);
        const { payload } = action;
  
        // Check if the product already exists in the cart
        const isProductInCart = state.items.some(item => item.id === payload.id);
  
        if (isProductInCart) {
          // Product already in the cart, return current state
          alert("Product already in cart");
          return state;
        }
  
        // Product not in cart, add it to the cart
        const updatedState = {
          ...state,
          items: [...state.items, payload],
        };
  
        // **Added console.log to display updated state:**
        console.log("Updated state after ADD_TO_CART:", updatedState);
  
        return updatedState;
  
      // Add cases for other cart actions
      default:
        return state;
    }
  };
  
  export default cartReducer;