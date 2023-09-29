import React from "react";
import { useParams } from "react-router-dom";

function Guideline() {
  const { currGuideline } = useParams();
  return (
    <div>
      <h1>This is the page for guideline: {currGuideline}</h1>
    </div>
  );
}

export default Guideline;
