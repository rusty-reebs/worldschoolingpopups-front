import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComp = (props) => {
  return (
    <Carousel showThumbs={false}>
      <div>
        <img src={props.images.image1} alt="eventimage1" />
      </div>
      <div>
        <img src={props.images.image2} alt="eventimage2" />
      </div>
      <div>
        <img src={props.images.image3} alt="eventimage3" />
      </div>
    </Carousel>
  );
};

export default CarouselComp;
