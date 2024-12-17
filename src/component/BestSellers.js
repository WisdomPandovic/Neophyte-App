import React, { useEffect, useState } from 'react';
import { FaHeart, FaArrowRight } from 'react-icons/fa';
import { Oval } from 'react-loader-spinner';

function BestSellers({ data }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const productIds = ["67574fb247883dbe28e0b179", "67574fec47883dbe28e0b181", "675752a247883dbe28e0b1d1", "675752dc47883dbe28e0b1d9"];

    const fetchProducts = async () => {
      try {
        const fetchedProducts = [];

        for (const productId of productIds) {
          const response = await fetch(`https://neophyte-garments-react-app-api.onrender.com/api/product/${productId}`);
          const product = await response.json();
          fetchedProducts.push(product);
        }

        setProducts(fetchedProducts);
        // console.log("Fetched products:", fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
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
    <div className="mt-5">
      <div className="custom-width-section">
        <p className="best-sellers fs-3">Best Sellers</p>
        <div className="row">
          {products.map((product) => (
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
  );
}
export default BestSellers;