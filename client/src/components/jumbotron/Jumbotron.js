import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./jumbotron.module.css";

import Slide1 from "./slides/Slide1";

function Jumbotron() {
  return (
    <Carousel interval={null}>
      <Carousel.Item>
        <Slide1 />
      </Carousel.Item>
      <Carousel.Item>
        <image src="https://via.placeholder.com/800x400" alt="placeholder" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <image src="https://via.placeholder.com/800x400" alt="placeholder" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Jumbotron;

// From https://react-bootstrap.github.io/components/carousel/
