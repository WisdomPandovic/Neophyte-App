import React from 'react';
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter, FaLinkedin, FaWeixin, FaSearch } from 'react-icons/fa';
import './Footer.css'; 

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic
  };

  return (
    <footer className="container-fluid bg-dark text-light">
      <div className="row py-4">
        <div className="col-md-4">
          <div className="justify-content-center align-items-center pt-5 pb-5">
            <div>
              <h5 className="text-left">Join Our Community</h5>
              <p>Be the first to get the latest updates on our promotion campaigns, products and services.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="justify-content-center align-items-center pt-5 pb-5">
            <form onSubmit={handleSubscribe}>
              <div className="form-group">
                <input type="email" className="form-control bg-dark text-white" id="email" placeholder="Your Email Address" required />
                <button type="submit" className="btn bg-dark text-white">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-md-4">
          <div className="justify-content-center align-items-center pt-5 pb-5">
            <div>
              <h5 className="text-center follow-us">FOLLOW US</h5>
              <div className="dk_foot_icon d-flex justify-content-center">
                <div className="mx-2"><FaInstagram /></div>
                <div className="mx-2"><FaYoutube /></div>
                <div className="mx-2"><FaFacebook /></div>
                <div className="mx-2"><FaTwitter/></div>
                <div className="mx-2"><FaLinkedin /></div>
                <div className="mx-2"><FaWeixin /></div>
                <div className="mx-2"><FaSearch /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="row py-4">
      <div className="col-md-3">
                    <h5>PRODUCTS</h5>
                    <ul className="list-unstyled">
                        <li>T-shirts</li>
                        <li>Sneakers</li>
                        <li>Caps</li>
                        <li>Jewelry</li>
                        <li>Hybrid</li>
                        <li>Classic</li>
                        <li>Never Still</li>
                        <li>Personal</li>
                    </ul>
                </div>
        
                <div className="col-md-3">
                    <h5>NEOPHYTE</h5>
                    <ul className="list-unstyled">
                        <li>Our Story</li>
                        <li>Careers</li>
                        <li>Catalogue</li>
                        <li>News</li>
                        <li>Corporate gifts</li>
                    </ul>
                </div>
        
                <div className="col-md-3">
                    <h5>SUPPORT</h5>
                    <ul className="list-unstyled">
                        <li>Contact Us</li>
                        <li>Create an Account</li>
                        <li>FAG</li>
                        <li>Register my NEOPHYTE</li>
                        <li>Return my product</li>
                        <li>Track orders</li>
                    </ul>
                </div>
        
                <div className="col-md-3">
                    <h5>LEGAL</h5>
                    <ul className="list-unstyled">
                        <li>Data protection</li>
                        <li>Terms & Conditions</li>
                        <li>Return policy</li>
                        <li>Imprint</li>
                        <li>Cookie Policy</li>
                        <li>Cookie Management</li>
                    </ul>
                </div>
      </div>

      <div className="bg-dark copyright text-center text-white">
        <h2>@2024 NEOPHYTE GARMENT | All Right Reserved</h2>
        <p className="pb-2">Developed & Maintained by Panda</p>
       </div>
    </footer>
  );
}

export default Footer;