//This will do the actual rendering of all of the technique cards

import React from "react";
import Techniques from "../../assets/Techniques";

function TechniqueCard({ guidelineInt }) {
  console.log(`The current guideline int is ${guidelineInt}`);
  var currTechniqueList = null;
  //This switch statement will determine which list of techniques to use based on the guidelineInt
  switch (guidelineInt) {
    case "glvc1":
      currTechniqueList = Techniques.guideline1Techniques;
      break;
    case "glvc2":
      currTechniqueList = Techniques.guideline2Techniques;
      break;
    case "glvc3":
      currTechniqueList = Techniques.guideline3Techniques;
      break;
    case "glvc4":
      currTechniqueList = Techniques.guideline4Techniques;
      break;
    case "glvc5":
      currTechniqueList = Techniques.guideline5Techniques;
      break;
    case "glvc6":
      currTechniqueList = Techniques.guideline6Techniques;
      break;
    case "glvc7":
      currTechniqueList = Techniques.guideline7Techniques;
      break;
    case "glvc8":
      currTechniqueList = Techniques.guideline8Techniques;
      break;
    case "glvc9":
      currTechniqueList = Techniques.guideline9Techniques;
      break;
    default:
      currTechniqueList = null;
  }
  return (
    <div>
      {currTechniqueList.map((technique) => (
        <div>
          <h1>{technique.title}</h1>
          <p>{technique.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TechniqueCard;
