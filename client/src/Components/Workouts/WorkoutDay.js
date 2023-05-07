import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './../../Context/UserContext';
import { HomeStyles } from './../Dashboard/styles';
import { Grid, Card, CardContent, Button, Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

const WorkoutDay = () => {
  const { userId } = useContext(UserContext);
  const classes = HomeStyles();
  const data = JSON.parse(localStorage.getItem("workoutSchedule"));   

  return (
    <>
      <div className={classes.pageContainer}>
        <div className={classes.heading}>Workout Schedule</div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card sx={{ backgroundColor: 'purple' }}>
            <CardContent>
              <Grid container>
                <Grid item>
                  <p className={classes.dashText} style={{ color: 'white' }}>
                    Total Calories Burned: 35
                  </p>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>

        {Object.entries(data).map(([day, exercises]) => (
        <Accordion key={day}>
          <AccordionSummary><Link to={`/home/${userId}/workouts/exercise?propName=${day}`}><Button>{day}</Button></Link></AccordionSummary>
          <AccordionDetails>
            <Typography>
              {exercises.map((exercise, index) => (
                <div key={index}>{exercise}</div>
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
