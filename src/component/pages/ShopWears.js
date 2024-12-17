import React from 'react';
import product1 from '../../images/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdHAyMjktcG9zdGVyLTA1LTQ1Mi1wcy5qcGc.webp'
import NavBar from "../NavBar";
import Footer from "../Footer";
import NewArrivals from "../NewArrivals";
import ProductDisplay from "../ProductDisplay";
import image6 from '../../images/swimsuit-ad.webp';
import image7 from '../../images/swimsuit-ad-2.webp';

function ShopWears() {
    return (
        <div>
             <NavBar/>
             <section className="container-fluid p-0 mt-5">
            <div className="position-relative pt-5">
                <img src={product1} className="img-fluid bk" alt="shop Image" />
                <div className="overlay-text">
                    <h2 className="pt-5 text-dark">Indulge in a world of style and sophistication at our exclusive online shop.</h2>
                    <p> Discover curated collections that blend fashion-forward trends with timeless elegance. From chic apparel to must-have accessories, elevate your wardrobe with our carefully selected pieces. Immerse yourself in a shopping experience that caters to your unique style.</p>
                </div>
            </div>
            </section>

            <NewArrivals/>
            <div className="container-fluid py-5">
                <div className="row">
                    <div className="col-lg-6 col-md-126 mb-1">
                        <img src={image6} className="img-fluid fixed-height" alt="shop Image" />
                    </div>
                    <div className="col-lg-6 col-md-12 mb-1">
                        <img src={image7} className="img-fluid fixed-height" alt="shop Image" />
                    </div>
                </div>
            </div>
            <ProductDisplay/>
            <Footer/>
        </div>
      
    );
}

export default ShopWears;