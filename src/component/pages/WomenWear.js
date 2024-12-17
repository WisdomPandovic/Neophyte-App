import NavBar from "../NavBar";
import Footer from "../Footer";
import WeddingCollections from "../WeddingCollections"
import OnePieceSwimSuit from "../OnePieceSwimSuit";
import TwoPieceSwimSuit from "../TwoPieceSwimSuit";
import image6 from '../../images/swimsuit-ad.webp';
import image7 from '../../images/swimsuit-ad-2.webp';

function WomenWear() {
    return (
        <div>
            <NavBar />
            <div className="container mt-5">
                <h2 className="text-center pt-5">Women's Wear Collection</h2>
                <p className="text-center">Enhance Your Elegance: Elevate Your Style with Neophyte Women's Wear Collection. Each piece is a brushstroke of sophistication, adding a touch of glamour to your wardrobe. Just as makeup transforms, our collection embodies the art of fashion, bringing out the beauty, confidence, and allure in every woman. Discover the perfect ensemble that reflects your individuality and captivates your timeless charm.</p>
            </div>

            <WeddingCollections />

            <div className="container-fluid py-5">
                <div className="row">
                    <div className="col-lg-6 col-md-126 mb-1">
                        <img src={image6} className="img-fluid fixed-height" alt="shop" />
                    </div>
                    <div className="col-lg-6 col-md-12 mb-1">
                        <img src={image7} className="img-fluid fixed-height" alt="shop" />
                    </div>
                </div>
            </div>
            <div className="p-3">
                <OnePieceSwimSuit />

                <TwoPieceSwimSuit />
            </div>
            <Footer />
        </div>
    )
}
export default WomenWear;