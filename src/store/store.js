import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk'; // If you're using thunk middleware

// Import your reducers
import cartReducer from '../reducer/cartReducer';
// import userReducer from './reducer/userReducer';

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  cart: cartReducer,
  //   user: userReducer,
  // Add more reducers as needed
});

// Apply middleware
const appliedMiddleware = applyMiddleware(thunk); // Include thunk and/or logger middleware

// Create and export the Redux store
const store = createStore(rootReducer, appliedMiddleware);

export default store;