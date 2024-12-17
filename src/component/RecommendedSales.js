import React, { useState, useEffect, useContext } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { NeophyteContext } from "../component/Context/NeophyteContext";

const RecommendedSales = () => {
    const { addToCart } = useContext(NeophyteContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        //   const productIds = ["65abf4743b88d36925ae237a", "65a7b63e3b88d36925ae1c33"];
        const productIds = ["67574fb247883dbe28e0b179", "67574fec47883dbe28e0b181"];

        const fetchProducts = async () => {
            try {
                const fetchedProducts = [];

                for (const productId of productIds) {
                    const response = await fetch(`https://neophyte-garments-react-app-api.onrender.com/api/product/${productId}`);
                    const product = await response.json();
                    fetchedProducts.push(product);
                }

                setProducts(fetchedProducts);
                //   console.log("Fetched products:", fetchedProducts);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = (productId) => {
        const clickedProduct = products.find(product => product._id === productId);
        addToCart(clickedProduct);
    };


    return (
        <div>
            <section className="custom-width-section py-5 category">
                <div className="row">
                    <div className="col-lg-6">
                        <p className="reco">Recommend for you</p>
                    </div>

                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-4 mb-2">
                                <a className="d-block bg-dark text-white p-3 text-center text-decoration-none rounded" href="/ShopWears">All Categories</a>
                            </div>
                            <div className="col-lg-4 mb-2">
                                <a className="d-block bg-secondary text-white p-3 text-center text-decoration-none rounded" href="/WomenWear">Women</a>
                            </div>
                            <div className="col-lg-4 mb-2">
                                <a className="d-block bg-success text-white p-3 text-center text-decoration-none rounded" href="MenCollectionPage">Men</a>
                            </div>
                            <div className="col-lg-4 mb-2">
                                <a className="d-block bg-danger text-white p-3 text-center text-decoration-none rounded" href="#">Collection 2024</a>
                            </div>
                            <div className="col-lg-4 mb-2">
                                <a className="d-block bg-warning text-white p-3 text-center text-decoration-none rounded" href="#newArrivals">New Arrays</a>
                            </div>
                            <div className="col-lg-4 mb-4">
                                <a className="d-block bg-info text-white p-3 text-center text-decoration-none rounded" href="#">Winter Set</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="custom-width-section">
                <p className="best-sellers fs-3">Recommended Sales</p>

                <div className="row">
                    {products.map((product, index) => (
                        <div key={product.id} className="col-lg-6 col-md-6 mb-4">
                            <div className="h-100 position-relative">
                                {/* <img src={`http://159.65.21.42:9000${product.image}`} alt={product.name} className='d-block w-100 custom-image-ratio' />  */}
                                {product.images && product.images.length > 0 ? (
                                    <img src={product.images[0]} alt={product.name} className="d-block w-100 custom-image-ratio" />
                                ) : (
                                    <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-white text-sm">No Image Available</div>
                                )}
                                <FaHeart className="heart-icon" onClick={() => handleAddToCart(product._id)} />
                                <div className="d-flex justify-content-between card-body p-3 mb-4">
                                    <div>
                                        <p className="card-text overflow-hidden mt-2">{product.name}</p>
                                        <p className="price">$ {product.price}</p>
                                    </div>

                                    <div className="d-flex align-items-center bg-success p-3 rounded-circle" style={{ width: "50px", height: "50px" }}>
                                        <a href={`/ViewProduct/${product._id}`} className="text-white">
                                            <FaArrowRight />
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RecommendedSales;