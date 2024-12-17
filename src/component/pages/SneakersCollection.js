import React, { useState, useEffect } from 'react';
import NavBar from "../NavBar";
import Footer from "../Footer";
import { FaHeart, FaArrowRight } from 'react-icons/fa';
import { Oval } from 'react-loader-spinner';

function SneakersCollection() {
    const [sneakers, setSneakers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://159.65.21.42:9000/products");
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                // Filter products by category "Neophytegarments-Sneakers"
                const sneakersData = data.filter(product => product.category === "Neophytegarments-Sneakers");
                // Sort products by creation date in descending order (newest to oldest)
                sneakersData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setSneakers(sneakersData);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
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
        return <p>Error fetching products: {error.message}</p>;
    }

    return (
        <div>
             <NavBar/>
            <h2>Sneakers Collection</h2>
            <div className="mt-5">
          <div className="custom-width-section">
            <p className="best-sellers fs-3">Sneakers</p>
            <div className="row">
              {sneakers.map((product) => (
                <div key={product.id} className="col-lg-3 col-md-6 mb-4">
                  <div className="h-100">
                  <img src={`http://159.65.21.42:9000${product.image}`} alt={product.name} className='img-fluid rounded-4 product-image' />
                    <FaHeart className="heart-icon" />
                    <div className="d-flex justify-content-between card-body p-3">
                      <div>
                        <p className="card-text overflow-hidden mt-2">{product.name}</p>
                        <p className="price">${product.price}</p>
                      </div>
                      <div className="d-flex align-items-center bg-success p-3 rounded-circle" style={{ width: "50px", height: "50px" }}>
                        <a href={`/ViewProduct/${product._id}`} className="text-white"><FaArrowRight /></a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
            <Footer/>
        </div>
    );
}

export default SneakersCollection;