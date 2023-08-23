import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./jumbotron.module.css";

import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";

function Jumbotron() {
  return (
    <Carousel interval={null}>
      <Carousel.Item>
        <Slide1 />
      </Carousel.Item>
      <Carousel.Item>
        <Slide2 />
      </Carousel.Item>
      <Carousel.Item>
        <Slide3 />
      </Carousel.Item>
    </Carousel>
  );
}

export default Jumbotron;

// From https://react-bootstrap.github.io/components/carousel/
