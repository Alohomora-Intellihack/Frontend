import { DoubleArrowSharp } from "@mui/icons-material";
import { Button,Grid } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HomeStyles } from "./../Dashboard/styles";
import { UserContext } from "./../../Context/UserContext";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { DietOptions,DietData } from "./DietData";

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Diet = () => {
  const classes = HomeStyles();

  return (
    <>
      <div className={classes.heading}>Daily Nutrient Profile</div>
      <Link to={`/home/nutrition/input`}>
        <div className={classes.predictDietButton}>
          <Button variant="contained" sx={{ backgroundColor: "#8d67af" }}>
            Predict Calories <DoubleArrowSharp sx={{ fontSize: 20 }} />
          </Button>
        </div>
      </Link>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <div className={classes.dietContainer}>
            <div>
              <h2 style={{color: "white", paddingTop: "50px",textAlign: "center",}}>Nutrient Profile for today </h2>
              <div className={classes.dietText}>
                <p>Calories : 732.9 kCal</p>
                <p>Cholestrol : 754.82 mg</p>
                <p>Protein : 30.15 g</p>
                <p>Total Carbohydrate : 30.18 g</p>
                <p>Total Fat : 54.85 g</p>
                <p>Potassium : 569.98 mg</p>
                <p>Sodium :1945.8 mg</p>
                <p>Sugars : 1.24 g</p>
                <p>Dietary Fiber : 2.17 g</p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={7}>
          <div className={classes.dietChart}>
            <Bar data={DietData} options={DietOptions} />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Diet;
