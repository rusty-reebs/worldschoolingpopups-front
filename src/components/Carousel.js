import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComp = (props) => {
  return (
    <Carousel>
      <div>
        <img src={props.images.image1} alt="eventimage1" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={props.images.image2} alt="eventimage2" />
        <p className="legend">Legend 1</p>
      </div>
    </Carousel>
  );
};

export default CarouselComp;
