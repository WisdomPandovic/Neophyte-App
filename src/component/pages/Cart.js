import React, {  useContext } from 'react';
import NavBar from "../NavBar";
import Footer from "../Footer";
import { useNavigate } from 'react-router-dom';
import { NeophyteContext } from "../Context/NeophyteContext";
import { ToastContainer } from 'react-toastify';


function Cart() {
  const navigate = useNavigate(); 
  const { cart, removeFromCart } = useContext(NeophyteContext);

  const handleStartShopping = () => {
    navigate('/ShopWears'); 
  };

  return (
    <div>
      <NavBar />

      <div className="center-content mt-5">
        <div className="wishl-con">
          <div className="wishl-cont text-center">
            <div className="wishl-con1 pt-5">
              <p>Your cart (<span id="cartItemCount">{cart?.length || 0}</span>)</p>
            </div>

            <div className="wishl-con2">
              <p>Add items to your wishlist to view or compare them later.</p>
            </div>

            <div className="wishl-con3 mb-5">
              <button className="btn btn-dark" onClick={handleStartShopping}>
                START SHOPPING
              </button>
            </div>
          </div>
        </div>
      </div>
     
     <div className='custom-width-section mt-5'>
      {cart?.length > 0 && (
        <div className="row">
          {cart.map((product) => (
            <div key={product._id} className="col-lg-3 col-md-6 mb-4">
              <div className="h-100">
                <img src={`http://159.65.21.42:9000${product.image}`} alt={product.name} className="img-fluid product-image" />
                <div className="card-body p-3">
                  <div className="product-title">{product.name}</div>
                  <div className="price">$ {product.price}</div>
                  <div className="mt-2">
                    <button className="btn cart-delete" onClick={() => removeFromCart(product)}>REMOVE</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart?.length === 0 && (
        <div className="empty-cart-message mb-5">
          Your cart is currently empty.
        </div>
      )}
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default Cart;
