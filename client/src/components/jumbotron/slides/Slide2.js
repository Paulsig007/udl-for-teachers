import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../jumbotron.module.css";

import YouTubeEmbed from "../../youTubeEmbed/YouTubeEmbed";

const Slide2 = () => {
  return (
    <Container fluid className="slideContainer">
      <Row>
        <Col>
          <h1 className="jumbotronTitle">Case Studies in Universal Design</h1>
          <p className="slideText">
            See how Universal Design for Learning can be used in real-world
            classroom scenarios.
          </p>
        </Col>
        <Col>
          <YouTubeEmbed
            embedWidth="544"
            embedHeight="306"
            embedId="_Jzqfoqi1bk"
            embedTitle="Video: Case Studies in UDL"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Slide2;

{
  /* <iframe width="544" height="306" src="https://www.youtube.com/embed/_Jzqfoqi1bk" title="Case Studies in UDL" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */
}
