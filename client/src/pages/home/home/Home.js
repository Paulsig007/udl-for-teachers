import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./Home.module.css";

import guidelineVideos from "../../../assets/guidelineVideos";

// components
import Jumbotron from "../../../components/jumbotron/Jumbotron";
import GuideLineVideoCard from "../../../components/guidelineVideoCard/GuidelineVideoCard";

function Home() {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {/* Jumbotron contains a carousel of videos and a brief description of the site */}
        <Jumbotron />
      </Grid>
      <Grid item xs={12}>
            <h1 className={styles.homeTitle}>Universal Design for Learning Guidelines</h1>
      </Grid>
      <Grid container spacing={2}>
          {guidelineVideos.map((video) => (
          <Grid item sm={12} md={6} lg={4} className={styles.videosContainer} key={video.guidelineNum}>
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
          </Grid>
          ))}
        </Grid>
        </Grid>
  );
}

export default Home;

