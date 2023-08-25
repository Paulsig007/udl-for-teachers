import React from "react";
import PropTypes from "prop-types";

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
      <h2 id="glvcTitle">{guidelineTitle}</h2>
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
};

export default GuideLineVideoCard;
