import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../jumbotron.module.css";

import YouTubeEmbed from "../../youTubeEmbed/YouTubeEmbed";

const Slide1 = () => {
  return (
    <Container fluid className="slideContainer">
      <Row>
        <Col>
          <h1 className="jumbotronTitle">
            An Introduction to Universal Design
          </h1>
          <p id="slide1Text">
            Get to know Universal Design for Learning with this brief
            introduction. The Universal Design for Learning guidelines are
            adapted with permission from CAST, 2018.
          </p>
        </Col>
        <Col>
          <YouTubeEmbed
            embedId="ylkD02EjG4A"
            embedTitle="Video: Introduction to Universal Design"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Slide1;

// <iframe width="544" height="306" src="https://www.youtube.com/embed/ylkD02EjG4A" title="UDL Introduction" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
