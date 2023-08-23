import React from "react";
import PropTypes from "prop-types";

const YouTubeEmbed = ({ embedId, embedTitle }) => (
  <div className="video-responsive">
    <iframe
      className="embedVideo"
      width="544"
      height="306"
      src={`https://www.youtube.com/embed/${embedId}`}
      title={`${embedTitle}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>
);

YouTubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
  embedTitle: PropTypes.string.isRequired,
};

export default YouTubeEmbed;
