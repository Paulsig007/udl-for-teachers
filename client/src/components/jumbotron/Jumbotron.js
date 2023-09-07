import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import slideData from "../../assets/slideData";

import Slide from "../slide/Slide";


function Jumbotron() {
  return (
    <Carousel interval={null}>
        {slideData.map((slide) => (
      <Carousel.Item>
          <Slide
            key={slide.slideTitle}
            slideTitle={slide.slideTitle}
            slideText={slide.slideText}
            embedId={slide.embedId}
            embedTitle={slide.embedTitle}
          />
      </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default Jumbotron;

// From https://react-bootstrap.github.io/components/carousel/
