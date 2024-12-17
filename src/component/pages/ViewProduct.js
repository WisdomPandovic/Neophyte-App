import React, { useState, useEffect, useContext } from 'react';
import NavBar from "../NavBar";
import BestSellers from "../BestSellers";
import { useParams } from "react-router-dom";
import { NeophyteContext } from "../Context/NeophyteContext";
import Footer from "../Footer";
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../../actions/cartActions';
import { ToastContainer } from 'react-toastify'; 
import { Oval } from 'react-loader-spinner';

function ViewProduct() {
    const { _id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart} = useContext(NeophyteContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const dispatch = useDispatch();

//   const handleAddToCart = () => {
//     console.log("Adding product to cart:", product);
//     dispatch(addToCart(product));
//     alert("Product added to cart");
//   };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://neophyte-garments-react-app-api.onrender.com/api/product/${_id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const productData = await response.json();
                setProduct(productData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (_id) {
            fetchProduct();
        }
    }, [_id]);

    const handleAddToCart = () => {
        addToCart(product); // Call addToCart from context
        // Display a success toast notification
    };

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Oval
                    height="80"
                    width="80"
                    color="#a8bf95"
                    secondaryColor="#a8bf95"
                    radius="12.5"
                    ariaLabel="mutating-dots-loading"
                    visible={true}
                />
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <NavBar />
            <div className="container text-center mt-5">
                <img src={product.images[0]} alt={product.name} className='img-fluid mt-5 img' />
                <div className="mt-5">
                    <h2 className="shop-p1x">{product.name}</h2>
                    <p className="amt">$ {product.price}</p>
                    <button className="btn btn-primary text-uppercase custom-add-to-cart rounded-0" onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="border p-3">
                            <h3>Additional Information</h3>
                            <p className="shop-p2x">{product.description}</p>
                            <p>Shipping calculated at checkout.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="border p-3">
                            <h3>Customer Reviews</h3>
                            <p>Reviews and comments from customers.</p>
                        </div>
                    </div>
                </div>
            </div>
            <BestSellers/>
            <Footer />
            <ToastContainer />
        </div>
    );
}

export default ViewProduct;
