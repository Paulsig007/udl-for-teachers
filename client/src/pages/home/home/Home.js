import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// components
import Jumbotron from "../../../components/jumbotron/Jumbotron";

function Home() {
  return (
    <Container fluid>
      <Row className="jumboTron">
        {/* Jumbotron contains a carousel of videos and a brief description of the site */}
        <Jumbotron />
      </Row>
      <Row>
        <Col>
          <div>
            <h1>Home Page</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <p>Splash Page wth Login.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
