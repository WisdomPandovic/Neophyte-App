
import NavBar from "../NavBar";
import Footer from "../Footer";
import image1 from '../../images/profile-photo.jpg';
import React, { useContext, useEffect, useState } from 'react';
import { NeophyteContext } from '../Context/NeophyteContext';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function UserInformation() {
    const navigate = useNavigate();
    const { isLoggedIn, setIsLoggedIn, getCartDetails, handleCheckout, cart } = useContext(NeophyteContext);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const rawData = localStorage.getItem("Neophyte_USER");
        if (rawData) {
            setIsLoggedIn(true);
            let localData = JSON.parse(rawData);
            setUserData(localData);
            console.log("User is logged in:", isLoggedIn);
        }
    }, [setIsLoggedIn]);

    const handleLogout = () => {
        // Clear user data from localStorage and set isLoggedIn to false
        localStorage.removeItem('Neophyte_USER');
        setIsLoggedIn(false);
        navigate('/');
    };

    return (
        <div>
            <NavBar/>
            <div className="container-fluid mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-3 col-md-12">
                        <div className="card mt-5">
                            <div className="card-header">
                                User Information
                            </div>
                            <div className="card-body text-center">
                                <img src={image1} className="rounded-image" alt="User" />
                                {isLoggedIn && userData && (
                                    <>
                                        <h5 className="card-title" id="userName">{userData.name}</h5>
                                        <p className="card-text" id="userEmail">{userData.email}</p>
                                        <p className="card-text" id="userPhone">{userData.phone}</p>
                                    </>
                                )}
                               {/* <p className="card-text" id="cartItems">Number of Cart Items: <span id="cartCount"></span></p> */}
                                    <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-9 col-md-12 mt-4">
                        <div className="card mt-5 mb-4">
                            <div className="card-body">
                                <div className="subtotal d-flex justify-content-between list-group-item">
                                    <p className="font-weight-bold card-text" id="cartItems">Number of Cart Items: </p>
                                    <span id="cartCount">{cart.length}</span>
                                </div>
                                <div className="checkout-summary">
                                    <div className="subtotal d-flex justify-content-between list-group-item">
                                        <span className="summary-label font-weight-bold">Subtotal</span>
                                        <span className="summary-value">$ {getCartDetails().subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="discount d-flex justify-content-between pt-3">
                                        <span className="summary-label font-weight-bold">Discount on Order</span>
                                        <span className="summary-value">$ -{-getCartDetails().discount.toFixed(2)}</span>
                                    </div>
                                    <div className="shipping d-flex justify-content-between pt-3">
                                        <span className="summary-label font-weight-bold">Shipping & Handling for</span>
                                        <span className="summary-value">$ 0.00</span>
                                    </div>
                                </div>
                                <hr />
                                {/* Total */}
                                <div className="total d-flex justify-content-between">
                                    <span className="summary-label font-weight-bold">Total</span>
                                    <span className="summary-value">$ {getCartDetails().total.toFixed(2)}</span>
                                </div>
                                <div className="user-button">
                                <button className="btn btn-success ml-5" onClick={handleCheckout}>Checkout</button>
                                <button className="btn btn-primary ml-5" ><a className="text-white text-decoration-none" href="/ShopWears">Continue Shopping</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <ToastContainer />
        </div>
    );
}
export default UserInformation;