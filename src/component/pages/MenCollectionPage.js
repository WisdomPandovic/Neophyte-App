import NavBar from "../NavBar";
import image1 from '../../images/Neophyte-garment-images (17).jpg';
import image2 from '../../images/Neophyte-garment-images (12).jpg';
import image3 from '../../images/Neophyte-loafers (2).jpg';
import image4 from '../../images/IMG_0382_460x.webp';
import MenTop from "../MenTop";
import Accessories from "../Accessories";
import Loafers from '../Loafers'
import NewArrivals from "../NewArrivals";
import Footer from "../Footer";

const MenCollectionPage = () => {
    return (
        <div>
            <NavBar/>
            <section className="image-grid-section mt-5">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-3 mb-4">
                        <div className="image-grid-item">
                            <img src={image1} alt="Image 1" className="img-fluid" />
                            <a href="#tops" className="grid-link">Tops</a>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="image-grid-item">
                            <img src={image2} alt="Image 2" className="img-fluid" />
                            <a href="#accessories" className="grid-link">Accessories</a>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="image-grid-item">
                            <img src={image3} alt="Image 4" className="img-fluid" />
                            <a href="#loafers" className="grid-link">Loafers</a>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="image-grid-item">
                            <img src={image4} alt="Image 3" className="img-fluid" />
                            <a href="#newIn" className="grid-link">New In</a>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <MenTop/>
            <Accessories/>
            <Loafers/>
            <NewArrivals/>
            <Footer/>
        </div>
    );
}

export default MenCollectionPage;