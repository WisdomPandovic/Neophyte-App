import React from 'react';
import { Carousel } from 'react-bootstrap';
import './SectionWithSlider.css'; 
import slide1 from '../images/19Nkunzi Jacket.webp';
import slide2 from '../images/Neophyte-garment-images (6).webp';
import slide3 from '../images/Neophyte-garment-images (7).webp';


const MySlider = () => {

  return (
    <div className="">
      <div className="arrow-slider-contain">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100 custom-aspect-ratio" src={slide1} alt="First slide"/>
            <Carousel.Caption>
              <h3>About Us</h3>
              <p> Neophyte Garments embody the spirit of a new era on the African continent, a vibrant energy that rises above cultural boundaries, unmistakably reflected in our values. </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
             <img className="d-block w-100 custom-aspect-ratio" src={slide2} alt="Second slide"/>
            <Carousel.Caption>
              <p>Crafted with boundless affection and innate creative skill, these designs intertwine with fashion, meant to be embraced as a part of daily life by those who exude self-assured excellence and even those aspiring to do so.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100 custom-aspect-ratio" src={slide3} alt="Third slide"/>
            <Carousel.Caption>
              <p>Welcome to a shop where every piece tells a story, and your style takes center stage. Shop with confidence, and let your fashion journey unfold.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default MySlider;