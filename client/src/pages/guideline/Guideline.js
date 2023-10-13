import React from "react";
import { useParams } from "react-router-dom";
import guidelineVideos from "../../assets/guidelineVideos";
import guideline1TechCards from "../../components/techniqueCard/TechniqueCard";
import TechniqueCard from "../../components/techniqueCard/TechniqueCard";

function Guideline() {
  const { currGuidelinePath } = useParams();
  const currGuideline = guidelineVideos.find(
    (path) => path.guidelinePath === "/" + currGuidelinePath
  );
  //This if statement checks if the current guideline is in the guidelineVideos array. If it is then it will render the proper set of technique cards. If it is not then it will render an error message.
  if (currGuideline) {
    return (
      <div>
        <h1>This is the page for guideline: {currGuideline.guidelineTitle}</h1>
        {/* You will put the page that renders all of the technique cards here, possibly wrapped in a grid */}
        <TechniqueCard guidelineInt={currGuideline.guidelineInt} />
      </div>
    );
  } else {
    return (
      <div>
        <h1> ERROR 404: NOT FOUND</h1>
      </div>
    );
  }
}

export default Guideline;
