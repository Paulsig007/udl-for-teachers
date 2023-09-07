import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import styles from "./Slide.module.css";
import PropTypes from "prop-types";

import YouTubeEmbed from "../youTubeEmbed/YouTubeEmbed";

function Slide({
  slideTitle,
  slideText,
  embedId,
  embedTitle,
}) {
  return (
    <Container fluid className={styles.slideContainer}>
      <Grid container>
        <Grid item sm={12} md={6}>
          <h1 className={styles.jumbotronTitle}>
            {slideTitle}
          </h1>
          <p className={styles.slideText}>
            {slideText}
          </p>
        </Grid>
        <Grid item sm={12} md={6}>
          <YouTubeEmbed
            embedWidth="544"
            embedHeight="306"
            embedId={embedId}
            embedTitle={embedTitle}
          />
        </Grid>
        </Grid>
    </Container>
  );
  }

  Slide.propTypes = {
    slideTitle: PropTypes.string.isRequired,
    slideText: PropTypes.string.isRequired,
    embedId: PropTypes.string.isRequired,
    embedTitle: PropTypes.string.isRequired,
  };

export default Slide;
