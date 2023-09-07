import React from "react";
import PropTypes from "prop-types";
import { Routes, Route, Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import styles from "./GuidelineVideoCard.module.css";

// components
import YouTubeEmbed from "../youTubeEmbed/YouTubeEmbed";

function GuideLineVideoCard({
  guidelineInt,
  guidelineNum,
  guidelineTitle,
  embedWidth,
  embedHeight,
  embedId,
  embedTitle,
  guidelinePath,
  guidelineElement,
}) {
  return (
    //   card for guidline video
    <Grid container className={`${styles.glvcContainer} ${styles[guidelineInt]}`}>
    <Grid item xs={12} >
      <YouTubeEmbed
        embedWidth={embedWidth}
        embedHeight={embedHeight}
        embedId={embedId}
        embedTitle={embedTitle}
      />
    </Grid>
    <Grid item xs={12}>
      <h1>{guidelineNum}</h1>
    </Grid>
    <Grid item xs={12}>
      <Link className={styles.techniqueLink} to={guidelinePath}>Techniques that provide options for {guidelineTitle}</Link>
    </Grid>
      <Routes>
        <Route path={guidelinePath} element={`<${guidelineElement}>`} />
      </Routes>
    </Grid>
  );
}

GuideLineVideoCard.propTypes = {
  guidelineInt: PropTypes.string.isRequired,
  guidelineNum: PropTypes.string.isRequired,
  guidelineTitle: PropTypes.string.isRequired,
  embedWidth: PropTypes.string.isRequired,
  embedHeight: PropTypes.string.isRequired,
  embedId: PropTypes.string.isRequired,
  embedTitle: PropTypes.string.isRequired,
  guidelinePath: PropTypes.string.isRequired,
  guidelineElement: PropTypes.string.isRequired,
};

export default GuideLineVideoCard;

// import React from "react";
// import PropTypes from "prop-types";
// import { Routes, Route, Link } from "react-router-dom";
// import Grid from "@mui/material/Grid";
// import styles from "./GuidelineVideoCard.module.css";

// // components
// import YouTubeEmbed from "../youTubeEmbed/YouTubeEmbed";

// function GuideLineVideoCard({
//   guidelineInt,
//   guidelineNum,
//   guidelineTitle,
//   embedWidth,
//   embedHeight,
//   embedId,
//   embedTitle,
//   guidelinePath,
//   guidelineElement,
// }) {
//   return (
//     //   card for guidline video
//     <Grid container>
//     <Grid item xs={12} className={`styles.glvcContainer ${guidelineInt}`}>
//       <YouTubeEmbed
//         embedWidth={embedWidth}
//         embedHeight={embedHeight}
//         embedId={embedId}
//         embedTitle={embedTitle}
//       />
//     </Grid>
//     <Grid item xs={12}>
//       <h1>{guidelineNum}</h1>
//     </Grid>
//     <Grid item xs={12}>
//       <Link to={guidelinePath}>Techniques that provide options for {guidelineTitle}</Link>
//     </Grid>
//       <Routes>
//         <Route path={guidelinePath} element={`<${guidelineElement}>`} />
//       </Routes>
//     </Grid>
//   );
// }

// GuideLineVideoCard.propTypes = {
//   guidelineInt: PropTypes.string.isRequired,
//   guidelineNum: PropTypes.string.isRequired,
//   guidelineTitle: PropTypes.string.isRequired,
//   embedWidth: PropTypes.string.isRequired,
//   embedHeight: PropTypes.string.isRequired,
//   embedId: PropTypes.string.isRequired,
//   embedTitle: PropTypes.string.isRequired,
//   guidelinePath: PropTypes.string.isRequired,
//   guidelineElement: PropTypes.string.isRequired,
// };

// export default GuideLineVideoCard;