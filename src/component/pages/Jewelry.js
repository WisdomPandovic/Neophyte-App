import NavBar from "../NavBar";
import Footer from "../Footer";
import image1 from '../../images/Neophyte-jewelry-collection-ad.webp';
import JewelryCollections from "../JewelryCollections";

function Jewelry (){
    return(
        <div>
            <NavBar/>
            <section className="container-fluid p-0 mt-5">
                <div className="position-relative pt-5">
                    <img src={image1} className="img-fluid bk" alt="JewelryImage" />
                    <div className="overlay-text">
                        <h2 className="pt-5 text-white">Introducing our Jeweley Collection. </h2>
                    </div>
                </div>
            </section>
            <JewelryCollections/>
            <Footer/>
        </div>
    )
}
export default Jewelry;