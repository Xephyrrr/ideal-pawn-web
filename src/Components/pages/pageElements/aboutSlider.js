import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


function AboutSlider() {
  return (
      <div className="slider">
        <Carousel>
          <Carousel.Item>
            <img
            className="d-block w-100"
            src="/images/aboutSlide.jpg"
            alt="First slide"
            />
          </Carousel.Item>
          </Carousel>
      </div>
  );
}

export default AboutSlider;
