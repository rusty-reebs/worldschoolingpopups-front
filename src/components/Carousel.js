import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//! change to map method
const CarouselComp = (props) => {
  return (
    <Carousel showThumbs={false}>
      <div>
        <img src={props.images[0].url} alt="eventimage1" />
      </div>
      <div>
        <img src={props.images[1].url} alt="eventimage2" />
      </div>
      {/* <div>
        <img src={props.images[2].url} alt="eventimage3" />
      </div> */}
    </Carousel>
  );
};

export default CarouselComp;
