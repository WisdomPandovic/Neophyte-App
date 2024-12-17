import React, { useState, useEffect } from "react";
import { FaHeart, FaArrowRight } from "react-icons/fa";

function ProductDisplay() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const categories = ["Neophytegarments", "Neophytegarment-SwimSuit", "Neophytegarments-Sneakers", "Neophyte-women-wedding-collection",
  "Neophyte-men-wedding-collection", "Neophytegarments-Loafers", "Neophyte-Jewelry"];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoryProducts = await Promise.all(
                    categories.map(async (category) => {
                        const response = await fetch(`http://159.65.21.42:9000/product/category/${category}`);
                        if (!response.ok) {
                            throw new Error(`Failed to fetch products for category ${category}`);
                        }
                        const products = await response.json();
                        return { category, products };
                    })
                );
                setProducts(categoryProducts);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, [categories]);

    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
  };

    return (
        <div className="mt-5">
            <div className="custom-width-section">
                <p className="best-sellers fs-3">More Product</p>
                {error && <p>Error fetching products: {error}</p>}
                {products.map(({ category, products }) => (
                    <div key={category}>
                        <h2 className="category-name">{category}</h2>
                        <div className="row">
                            {products && products.map((product) => (
                                <div key={product._id} className="col-lg-3 col-md-6 mb-4">
                                    <div className="h-100">
                                        <img src={`http://159.65.21.42:9000${product.image}`} alt={product.name} className="img-fluid rounded-4 product-image" />
                                        <FaHeart className="heart-icon" />
                                        <div className="d-flex justify-content-between card-body p-3">
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
                ))}
                   <button className="btn btn-dark back-to-top mb-5" onClick={handleScrollToTop}>
                Back to Top
            </button>
            </div>
         
        </div>
    );
}

export default ProductDisplay;