import React, { useEffect, useState } from 'react';
import { FaHeart, FaArrowRight } from 'react-icons/fa';
import { MutatingDots } from "react-loader-spinner"; 
import { Oval } from 'react-loader-spinner';

const  WeddingCollections = () => {
    const [products, setProducts] = useState([]);
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
      
            // Filter products by category
            const neophyteProducts = data.filter(product => product.category === "Neophyte-women-wedding-collection");
      
            // Sort products by creation date (assuming the date is stored in a property named "createdAt")
            neophyteProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      
            // **Remove the limit to show all products:**
            setProducts(neophyteProducts);
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
            <div className="mt-5" >
          <div className="custom-width-section">
            <p className="best-sellers fs-3">Women Wedding Collection</p>
            <div className="row">
              {products.map((product) => (
                <div key={product.id} className="col-lg-3 col-md-6 mb-4">
                  <div className="h-100">
                  <img src={`http://159.65.21.42:9000${product.image}`} alt={product.name} className='img-fluid rounded-4 product-image' />
                    <FaHeart className="heart-icon" />
                    <div className="d-flex justify-content-between card-body p-3">
                      <div>
                        <p className="card-text overflow-hidden mt-2">{product.name}</p>
                        <p className="price">$ {product.price}</p>
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
        </div>
    );
}

export default WeddingCollections;