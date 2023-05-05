import React from "react";
import { HomeStyles } from "./styles";
import { Pie, Line, Bar, Scatter } from "react-chartjs-2";
import {
  BarData,
  LineData,
  pieData,
  LineOptions,
  BarOptions,
  ScatterData,
  ScatterOptions,
} from "./DashboardData";
import {
  Chart,
  ArcElement,
  PointElement,
  LineElement,
  CategoryScale,
} from "chart.js";
import { Grid } from "@mui/material";

Chart.register(ArcElement, PointElement, LineElement, CategoryScale);

const Dashboard = () => {
  const classes = HomeStyles();
  return (
    <>
      <div className={classes.heading}>Dashboard</div>
      <div className={classes.pageContainer}>
        <div className={classes.dashContainer}>
          <div>
            <div className={classes.dashText}>
              <p>Current Body Fat percantage : 40.5g</p>
              <p>Total Calories burnt : 40</p>
              <p>Workout counts performed : 100</p>
              <p>Total Calories consumed : 150</p>
            </div>
          </div>
        </div>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div className={classes.chartHeading}>Weight Progress</div>
            <div className={classes.line}>
              <Line data={LineData} options={LineOptions} />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.chartHeading}>Workout Breakdown</div>
            <div className={classes.pie}>
              <Pie data={pieData} />
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div className={classes.chartHeading}>
              Calories Burnt and Consumed
            </div>
            <div className={classes.bar}>
              <Bar data={BarData} options={BarOptions} />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.chartHeading}>
              Calories Burnt and Workouts Done
            </div>
            <div className={classes.bar}>
              <Scatter data={ScatterData} options={ScatterOptions} />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Dashboard;
