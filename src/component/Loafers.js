import React, { useEffect, useState } from 'react';
import { FaHeart, FaArrowRight } from 'react-icons/fa';
import { Oval } from 'react-loader-spinner';

const  Loafers = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://neophyte-garments-react-app-api.onrender.com/api/product");
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                console.log(data); 
                
                // Filter products by category
                const neophyteProducts = data.filter(product => product?.category?.name === "Neophytegarments-Loafers");
                
                // Sort products by creation date (assuming the date is stored in a property named "createdAt")
                neophyteProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                
                // Limit to 4 products
                const filteredProducts = neophyteProducts.slice(0, 4);
                
                setProducts(filteredProducts);
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
        <div className="flex justify-center items-center h-screen">
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
            <div className="mt-5" id="loafers">
          <div className="custom-width-section">
            <p className="best-sellers fs-3">Loafers</p>
            <div className="row">
              {products.map((product, index) => (
                <div key={product.id} className="col-lg-3 col-md-6 mb-4">
                  <div className="h-100">
                  {product.images && product.images.length > 0 ? (
                            <img src={product.images[0]} alt={product.name} className="img-fluid rounded-4 product-image" />
                        ) : (
                            <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-white text-sm">No Image Available</div>
                        )}
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

export default Loafers;