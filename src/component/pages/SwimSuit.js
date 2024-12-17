import NavBar from "../NavBar";
import image1 from '../../images/swimsuit-gals.jpg';
import image2 from '../../images/NeophyteGarment-SwimSuit-one-piece  (1).jpg';
import image3 from '../../images/men-swimsuit.jpg';
import image5 from '../../images/NeophyteGarment-SwimSuit-one-piece  (3).webp';
import image6 from '../../images/swimsuit-ad.webp';
import image7 from '../../images/swimsuit-ad-2.webp';
import OnePieceSwimSuit from "../OnePieceSwimSuit";
import TwoPieceSwimSuit  from "../TwoPieceSwimSuit";
import MenSwimSuit from '../MenSwimSuit'
import Footer from "../Footer";

const SwimSuit = () => {
    return (
        <div>
            <NavBar/>

            <section className="container-fluid p-0 mt-5">
                <div className="position-relative pt-5">
                <img src={image1} className="img-fluid bk" alt="shop Image" />
                <div className="overlay-text">
                <h2 className="pt-5 text-white">Introducing our exquisite one-piece swimsuit collection, where elegance meets versatility. </h2>
                <p> Dive into a world of style with our stunning swimsuits that redefine beach glamour. Whether you're basking in the sun or making a splash, our one-piece swimsuits offer the perfect blend of comfort, fashion, and confidence.

                </p>
                </div>
                </div>
            </section>

            <section className="image-grid-section mt-5">
                <div className="container pt-5">
                   <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="image-grid-item">
                                <img src={image5} alt="Image 1" className="img-fluid" />
                                <a href="#onepiece" className="grid-link">One Piece</a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="image-grid-item">
                                <img src={image2} alt="Image 2" className="img-fluid" />
                                <a href="#twopiece" className="grid-link">Two Piece</a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="image-grid-item">
                                <img src={image3} alt="Image 4" className="img-fluid" />
                                <a href="#menswimsuit" className="grid-link">Men Swim Suit</a>
                            </div>
                        </div>
                   </div>
                </div>
            </section>
            
            <OnePieceSwimSuit/>
            <TwoPieceSwimSuit />

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

            <MenSwimSuit/>
            <Footer/>
        </div>
    );
}

export default SwimSuit;