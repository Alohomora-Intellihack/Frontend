import { Grid } from "@mui/material";
import React from "react";
import { HomeStyles } from "./../Dashboard/styles";

const DietPrediction = () => {
  const classes = HomeStyles();

  return (
    <>
      <div className={classes.heading}>Predicting Food Calories</div>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <div className={classes.predictContainer}>Prediction container</div>
        </Grid>
        <Grid item xs={5}>
          <div className={classes.predictContainer}>Camera container</div>
        </Grid>
      </Grid>
    </>
  );
};

export default DietPrediction;
