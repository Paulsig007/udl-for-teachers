//This will do the actual rendering of all of the technique cards

import React from "react";
import Techniques from "../../assets/Techniques";
import { Grid } from "@mui/material";
import styles from "./TechniqueCard.module.css";
import { styled } from "@mui/material/styles";

function TechniqueCard({ guidelineInt }) {
  console.log(`The current guideline int is ${guidelineInt}`);
  var currTechniqueList = null;
  //This switch statement will determine which list of techniques to use based on the guidelineInt
  //The techniques within the list will then be rendered on the page appropriately
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
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });
  return (
    <div>
      {/* This is where the techniques are inserted into the page */}
      {currTechniqueList.map((technique) => (
        <Grid container alignItems={"center"} justifyContent={"center"}>
          <Grid container xs={8} className={`${styles.techniqueContainer}`}>
            <Grid item sx={{ width: 128, height: 128, p: 1 }}>
              <Img src={technique.image} alt="placeholder" />
            </Grid>
            <Grid>
              <Grid container xs={12} sx={{ p: 1 }} justifyItems={"left"}>
                <h1>{technique.title}</h1>
              </Grid>
              <Grid container sx={{ p: 1 }}>
                <p>{technique.description}</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </div>
  );
}

export default TechniqueCard;
