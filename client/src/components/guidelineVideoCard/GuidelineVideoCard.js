import React from "react";
import PropTypes from "prop-types";
import { Routes, Route, Link } from "react-router-dom";

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
    <div className={`glvcContainer ${guidelineInt}`}>
      <YouTubeEmbed
        embedWidth={embedWidth}
        embedHeight={embedHeight}
        embedId={embedId}
        embedTitle={embedTitle}
      />
      <h1 id="glvcNum">{guidelineNum}</h1>
      <Link to={guidelinePath}>Techniques that provide options for {guidelineTitle}</Link>
      <Routes>
        <Route path={guidelinePath} element={`<${guidelineElement}>`} />
      </Routes>
    </div>
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
