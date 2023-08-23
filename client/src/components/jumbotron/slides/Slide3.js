import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../jumbotron.module.css";

import YouTubeEmbed from "../../youTubeEmbed/YouTubeEmbed";

const Slide3 = () => {
  return (
    <Container fluid className="slideContainer">
      <Row>
        <Col>
          <h1 className="jumbotronTitle">Navigating UDLforTeachers.com</h1>
          <p id="slide1Text">
            Learn how to implement the methods we have created that focus on
            developing expert learners.
          </p>
        </Col>
        <Col>
          <YouTubeEmbed
            embedId="Czw411nzElM"
            embedTitle="Video: Navigating UDL for Teachers.com"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Slide3;

{
  /* <iframe width="544" height="306" src="https://www.youtube.com/embed/Czw411nzElM" title="Navigating UDLforTeachers.com" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */
}
