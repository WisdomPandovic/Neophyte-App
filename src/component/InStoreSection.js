import React, { useState, useEffect, useContext } from 'react';
import product1 from '../images/IMG_0382_460x.webp';
import { NeophyteContext } from "./Context/NeophyteContext";
import { ToastContainer } from 'react-toastify';


const InStoreSection = () => {

    const [products, setProducts] = useState([]);
    const { addToCart } = useContext(NeophyteContext);

    useEffect(() => {
        const productIds = ["675752a247883dbe28e0b1d1", "675752dc47883dbe28e0b1d9"];

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

    return (
        <div>
            <section className="in-store">
                <div className="text-center text-white p-3">
                    <h2 className="pt-5">What's in store?</h2>
                    <p className="text-center">Discover our latest arrivals and explore a world of style and innovation. From trendy fashion to cutting-edge designs, we have something special just for you.</p>
                    <p className="text-center pb-5">Embark on a journey of discovery as you explore our latest arrivals, unveiling a world of unparalleled style and innovation. From the latest trends in fashion to cutting-edge designs, we curate something truly special, just for you. Immerse yourself in the essence of elegance and sophistication.</p>
                </div>
            </section>

            <section className="container mt-5 mb-5">
                <div className="row">
                    {products.map((product) => (
                        <div key={product.id} className='mb-5'>
                            <div className='row'>
                                <div className="col-lg-6">
                                    {/* <img src={`http://159.65.21.42:9000${product.image}`} alt={product.name} className='img-fluid rounded-4 mb-3' /> */}
                                    {product.images && product.images.length > 0 ? (
                                        <img src={product.images[0]} alt={product.name} className="img-fluid rounded-4 mb-3" />
                                    ) : (
                                        <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-white text-sm">No Image Available</div>
                                    )}
                                </div>

                                <div className="col-lg-6">
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                    <p>$ {product.price}</p>

                                    <div className="mb-3">
                                        <select className="form-select" id="sizeSelect" style={{ backgroundColor: '#D9D9D9' }}>
                                            <option value="small">Small</option>
                                            <option value="medium">Medium</option>
                                            <option value="large">Large</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <select className="form-select" id="colorSelect" style={{ backgroundColor: '#D9D9D9' }}>
                                            <option value="red">Red</option>
                                            <option value="blue">Blue</option>
                                            <option value="green">Green</option>
                                        </select>
                                    </div>

                                    <button className="btn btn-primary w-100" onClick={() => addToCart(product)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={product1} className="img-fluid rounded-4 mb-3" alt="Product 1" />
                    </div>

                    <div className="col-lg-6">
                        <h3>Wool knit</h3>
                        <p>Soft to the touch, perfect for all seasons. Heavy weight and breathable lamb's wool pullover knit jersey.</p>
                        <p>$ 94352</p>

                        <div className="mb-3">
                            <select className="form-select" id="sizeSelect" style={{ backgroundColor: '#D9D9D9' }}>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <select className="form-select" id="colorSelect" style={{ backgroundColor: '#D9D9D9' }}>
                                <option value="red">Red</option>
                                <option value="blue">Blue</option>
                                <option value="green">Green</option>
                            </select>
                        </div>

                        <button className="btn btn-primary w-100">Add to Cart</button>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </div>
    );
}
export default InStoreSection;