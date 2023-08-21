import React from "react";
import PropTypes from "prop-types";

const YouTubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="544"
      height="306"
      src={`https://www.youtube.com/embed/${embedId}`}
      title="Embedded youtube"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    />
  </div>
);

YouTubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YouTubeEmbed;
