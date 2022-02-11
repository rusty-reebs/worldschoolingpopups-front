import React from "react";
import "../output.css";
import CarouselComp from "./Carousel";

const Detail = (props) => {
  return (
    <div>
      <CarouselComp images={props.images} />
    </div>
  );
};

export default Detail;
