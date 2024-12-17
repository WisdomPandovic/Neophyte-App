import { useState, createContext, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const NeophyteContext = createContext();

function NeophyteProvider(props) {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Retrieve cart data on mount and update state (using async/await)
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const rawData = localStorage.getItem("Neophyte_USER");
        if (rawData) {
          setIsLoggedIn(true);
          let localData = JSON.parse(rawData);
          console.log("User is logged in:", isLoggedIn);
        }

        const storedCart = await localStorage.getItem("Neophyte-cart");
        if (storedCart) {
          setCart(JSON.parse(storedCart));
        }
      } catch (error) {
        console.error("Error retrieving cart data:", error);
      }
    };

    fetchInitialData(); // Call the async function within useEffect
  }, []);

    // Function to access cart details
    const getCartDetails = () => {
      const cartCount = cart.length;
      const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
      const discount = -7000.00; // Fixed discount amount
      const total = subtotal + discount; // Calculate total with fixed discount
      return { cartCount, subtotal, discount, total };
    };

    // Function to handle checkout
  const handleCheckout = () => {
    // alert("Redirecting to payment gateway for payment processing...");
    toast.success("Redirecting to payment gateway for payment processing...");
  };


  // Function to add a product to the cart
  const addToCart = async (product) => {
    let cartData = [...cart];
    let checkDataExist = cartData.find((data) => data._id === product._id);

    if (checkDataExist) {
      // alert("Product already in cart");
      toast.error("Product already in cart");
      return;
    }

    // alert("Product added to cart");
    toast.success("Product added to cart");
    let newProduct = { ...product, qty: 1, totalPrice: product.price };
    cartData.push(newProduct);

    setCart(cartData); // Update state first

    try {
      await localStorage.setItem("Neophyte-cart", JSON.stringify(cartData));
    } catch (error) {
      console.error("Error saving cart data:", error);
    }
  };
  
  const removeFromCart = async (product) => {
    // Ask for confirmation
    if (window.confirm("Are you sure you want to remove this product?")) {
      try {
        // Retrieve cart data from localStorage
        let initialCart;
        try {
          initialCart = JSON.parse(localStorage.getItem("Neophyte-cart")) || [];
        } catch (error) {
          console.error("Error parsing cart data from localStorage:", error);
          return; // Handle parsing error gracefully
        }
  
        // Check initial cart content (optional)
        console.log("Initial cart:", initialCart);
  
        // Handle undefined product case
        if (!product) {
          console.error("Error: Product to remove is undefined.");
          return; // Handle the case gracefully
        }
  
        // Filter out the product to be removed with debugging logs
        const updatedCart = initialCart.filter((item) => {
          console.log("Comparing product:", item._id, "with to remove:", product._id);
          return item._id !== product._id;
        });
  
        // Check filtered cart content (optional)
        console.log("Updated cart:", updatedCart);
  
        // Update cart state
        setCart(updatedCart);
  
        // Update localStorage
        try {
          await localStorage.setItem("Neophyte-cart", JSON.stringify(updatedCart));
        } catch (error) {
          console.error("Error saving cart data to localStorage:", error);
          // Handle saving error gracefully
        }
  
        console.log("Cart state updated, local storage updated");
        // alert("Product successfully removed from your cart!");
        toast.success("Product successfully removed from your cart!");
      } catch (error) {
        console.error("Error removing product from cart:", error);
        // Handle other errors appropriately
      }
    }
  };
  
  
  
  
  
  // Update localStorage whenever cart changes (no need for a separate function)
  useEffect(() => {
    try {
      if (cart.length > 0) { // Only save if cart has items
        localStorage.setItem("Neophyte-cart", JSON.stringify(cart));
      }
    } catch (error) {
      console.error("Error saving cart data:", error);
    }
  }, [cart]);

  return (
    <NeophyteContext.Provider value={{ cart, setCart, addToCart, removeFromCart, isLoggedIn, setIsLoggedIn, toast,  getCartDetails,  handleCheckout,}}>
      {props.children}
    </NeophyteContext.Provider>
  );
}

export default NeophyteProvider;
