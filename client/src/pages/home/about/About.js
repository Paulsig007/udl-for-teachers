import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div>
            <h1>About Page</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
