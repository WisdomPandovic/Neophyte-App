import NavBar from "../NavBar";
import Footer from "../Footer";
import product1 from '../../images/Neophyte-garment-images (12).jpg';
import image2 from '../../images/Neophyte-garment-images (1).webp';
import image3 from '../../images/Neophyte-garment-images (5).jpg';

function About (){
    return(
        <div>
            <NavBar/>

            <div className="about-image-section">
                <img src={product1} className="img-fluid " alt="Product 1" />
                <div className="about-overlay">
                    <h2 className="text-center pt-5">About</h2>
                    <p className="">Neophyte Garments embody the spirit of a new era on the African continent, a vibrant energy that rises above cultural boundaries, unmistakably reflected in our values. Crafted with boundless affection and innate creative skill, these designs intertwine with fashion, meant to be embraced as a part of daily life by those who exude self-assured excellence and even those aspiring to do so.</p>
                </div>
            </div>

            <section className="two-column-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 contact-text">
                        <h2>Have questions regarding our Product?</h2>
                        <p>If you have any questions or if you'd like to share your experience with us, feel free to send us a message using the form below. We're here to help!</p>
                        <p>For our latest experiences and editorials, be the first in the know. You'll learn about upcoming product shipment worldwide and the secrets and lifestyle of our customers.</p>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="contact-form">
                            <h4 className="text-center">Send Us a message</h4>
                            <form action="#" method="post" className="contact-forms">
                                <input type="text" id="name" name="name" required placeholder="Enter name" />
                                <input type="email" id="email" name="email" required placeholder="Enter email address" />
                                <textarea id="message" name="message" rows="4" placeholder="Message"></textarea>
                                <button type="submit">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </section>

            <div className="container-fluid pt-5 bg-darker text-white">
            <div className="row justify-content-center pt-5 pb-5">
                <div className="col-md-6">
                    <div className="text-center mb-4">
                        <h2>Welcome to Neophyte Garments</h2>
                        <p>Enter your email below to receive a 10% discount!</p>
                    </div>
                    <form>
                        <div className="mb-3">
                            <div className="form-group d-flex justify-content-between">
                                <input type="text" className="form-control" id="firstName" aria-describedby="emailHelp" placeholder="First Name" required />
                                <div style={{ width: '10px' }}></div>
                                <input type="text" className="form-control" id="lastName" aria-describedby="emailHelp" placeholder="Last Name" required />
                            </div>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" required />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <button type="submit" className="btn btn-black w-100 border-none">Subscribe</button>
                    </form>
                </div>
            </div>
            </div>

            <div className="bk-smoke">
            <div className="text-center pt-5"><h3>Shop Now</h3></div>
            <div className="container">
                <div className="row pt-5 pb-5">
                    <div className="col-md-6">
                        <div className="image-containers">
                            <div className="grid-column">
                            <img src={image2} className="img-fluid " alt="Product 1" />
                            </div>
                            <div className="overlays">
                                <a href="/MenCollectionPage" className="link-text">Men Collection</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="image-containers">
                            <div className="grid-column">
                            <img src={image3} className="img-fluid " alt="Product 1" />
                            </div>
                            <div className="overlays">
                                <a href="/WomenWear" className="link-text">Women Collection</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
             <Footer/>
        </div>
    )
}
export default About;