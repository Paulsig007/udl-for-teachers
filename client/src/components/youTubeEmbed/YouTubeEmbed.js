import React from "react";
import PropTypes from "prop-types";

const YouTubeEmbed = ({ embedWidth, embedHeight, embedId, embedTitle }) => (
  <div className="iframeContainer">
    <iframe
      className="embedVideo"
      width={`${embedWidth}`}
      height={`${embedHeight}`}
      src={`https://www.youtube.com/embed/${embedId}`}
      title={`${embedTitle}`}
      allow="autoplay; encrypted-media;"
      allowFullScreen
    />
  </div>
);

YouTubeEmbed.propTypes = {
  embedWidth: PropTypes.string.isRequired,
  embedHeight: PropTypes.string.isRequired,
  embedId: PropTypes.string.isRequired,
  embedTitle: PropTypes.string.isRequired,
};

export default YouTubeEmbed;
