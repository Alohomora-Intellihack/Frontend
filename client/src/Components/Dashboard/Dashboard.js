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
import { Grid,Card,CardContent, } from "@mui/material";
import { AcUnit, LocalFireDepartment, RiceBowl } from "@mui/icons-material";

Chart.register(ArcElement, PointElement, LineElement, CategoryScale);

const Dashboard = () => {
  const classes = HomeStyles();
  return (
    <>
      <div className={classes.heading}> Fitness Tracker Dashboard</div>
      <div className={classes.pageContainer}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card sx={{width:'85%'}}>
              <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={9}> <p className={classes.dashText}>Current Body Fat percantage </p><p style={{fontSize:'35px',paddingLeft:'23px'}}><b>40.5%</b></p></Grid>
                <Grid item xs={3}><div style={{paddingTop:'40px',paddingRight:'-20px'}}><AcUnit  sx={{fontSize:'65px',color:'#296d98'}}/></div> </Grid>
              </Grid> 
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card sx={{width:'85%'}}>
              <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={9}> <p className={classes.dashText}>Total Calories burnt </p><p style={{fontSize:'35px',paddingLeft:'23px'}}><b>40 kCal </b></p></Grid>
                <Grid item xs={3}><div style={{paddingTop:'40px',paddingRight:'-20px'}}><LocalFireDepartment sx={{fontSize:'65px',color:'#ffbd2e'}}/></div> </Grid>
              </Grid> 
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card sx={{width:'85%'}}>
              <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={9}> <p className={classes.dashText}>Total Calories consumed </p><p style={{fontSize:'35px',paddingLeft:'23px'}}><b>150 kCal </b></p></Grid>
                <Grid item xs={3}><div style={{paddingTop:'40px',paddingRight:'-20px'}}><RiceBowl sx={{fontSize:'65px',color:'green'}}/></div> </Grid>
              </Grid> 
              </CardContent>
            </Card>
          </Grid>
        </Grid>

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
