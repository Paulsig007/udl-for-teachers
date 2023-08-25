import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import guidelineVideos from "../../../assets/guidelineVideos";

// components
import Jumbotron from "../../../components/jumbotron/Jumbotron";
import GuideLineVideoCard from "../../../components/guidelineVideoCard/GuidelineVideoCard";

function Home() {
  const rows = [];
  for (let i = 0; i < guidelineVideos.length; i += 3) {
    // this loop creates a grid of 3 cards per row
    rows.push(guidelineVideos.slice(i, i + 3));
  }

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
      {/* create a grid of video cards */}
      {rows.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((video) => (
            <Col key={video.guidelineNum} id="videosContainer" md={4}>
              {/* map through guidelineVideos passing props into GuideLineVideoCard */}
              <GuideLineVideoCard
                guidelineInt={video.guidelineInt}
                guidelineNum={video.guidelineNum}
                guidelineTitle={video.guidelineTitle}
                embedWidth={video.embedWidth}
                embedHeight={video.embedHeight}
                embedId={video.embedId}
                embedTitle={video.embedTitle}
              />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
}

export default Home;
