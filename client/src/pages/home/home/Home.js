import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import guidelineVideos from "../../../assets/guidelineVideos";

// components
import Jumbotron from "../../../components/jumbotron/Jumbotron";
import GuideLineVideoCard from "../../../components/guidelineVideoCard/GuidelineVideoCard";

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
            <h1 id="homeTitle">Universal Design for Learning Guidelines</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col id="videosContainer">
          {guidelineVideos.map((video) => (
          <GuideLineVideoCard
            guidelineInt={video.guidelineInt}
            guidelineNum={video.guidelineNum}
            guidelineTitle={video.guidelineTitle}
            embedWidth={video.embedWidth}
            embedHeight={video.embedHeight}
            embedId={video.embedId}
            embedTitle={video.embedTitle}
            guidelinePath={video.guidelinePath}
            guidelineElement={video.guidelineElement}
          />
          ))}
        </Col>
        </Row>
    </Container>
  );
}

export default Home;
