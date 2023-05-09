import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HomeStyles } from "./../Dashboard/styles";
import {
  Grid,
  Card,
  CardContent,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

const WorkoutDay = () => {
  const classes = HomeStyles();
  const data = JSON.parse(localStorage.getItem("workoutSchedule"));

  return (
    <>
      <div className={classes.pageContainer}>
        <div className={classes.heading}>Workout Schedule</div>
        <div style={{ display: "flex", justifyContent: "center", paddingBottom:'50px'}}>
          <Card sx={{ backgroundColor: "purple" }}>
            <CardContent>
              <Grid container>
                <Grid item>
                  <p style={{ color: "white",fontSize:'20px',fontWeight:'bolder'}}>
                    Total Calories Burned: 35
                  </p>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>

        {Object.entries(data).map(([day, exercises]) => (
          <Accordion
            key={day}
            sx={{
              margin: "0px 300px 0px 300px",
              padding: "8px",
              backgroundColor: "#f5f5f5",
            }}
          >
            <AccordionSummary>
              <Link to={`/home/workouts/exercise?propName=${day}`} style={{color:'inherit'}}>
                <Button>
                  <div
                    style={{
                      textAlign: "center",
                      fontWeight: "bolder",
                      fontSize: "28px",
                    }}>
                    {day}
                  </div>
                </Button>
              </Link>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {exercises.map((exercise, index) => (
                  <div
                    key={index}
                    style={{ lineHeight: "30px", fontFamily: "Asap" }}
                  >
                    {exercise}
                  </div>
                ))}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </>
  );
};

export default WorkoutDay;
