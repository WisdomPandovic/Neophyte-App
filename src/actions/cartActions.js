export const addToCart = (product) => {
    console.log("Dispatching ADD_TO_CART action");
    return {
      type: 'ADD_TO_CART',
      payload: product,
    };
  };
  
  // Add the new action creator
export const fetchCartItems = () => {
    return {
      type: 'FETCH_CART_ITEMS',
      // Optional payload for API call
    };
  };