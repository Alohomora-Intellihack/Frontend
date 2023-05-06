import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './../../Context/UserContext';
import { HomeStyles } from './../Dashboard/styles';
import { Grid, Card, CardContent, Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const WorkoutDay = () => {
  const { userId } = useContext(UserContext);
  const classes2 = HomeStyles();
  const classes = HomeStyles();

  const [monday, setMonday] = useState([]);
  const [tuesday, setTuesday] = useState([]);
  const [wednesday, setWednesday] = useState([]);
  const [thursday, setThursday] = useState([]);
  const [friday, setFriday] = useState([]);
  const [saturday, setSaturday] = useState([]);
  const [sunday, setSunday] = useState([]);

  const [calories, setCalories] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response1 = await fetch(
        'http://localhost:3004/workout/exercises/monday'
      );
      const data1 = await response1.json();
      setMonday(data1);

      const response2 = await fetch(
        'http://localhost:3004/workout/exercises/tuesday'
      );
      const data2 = await response2.json();
      setTuesday(data2);
      const response3 = await fetch(
        'http://localhost:3004/workout/exercises/wednesday'
      );
      const data3 = await response3.json();
      setWednesday(data3);
      const response4 = await fetch(
        'http://localhost:3004/workout/exercises/thursday'
      );
      const data4 = await response4.json();
      setThursday(data4);
      const response5 = await fetch(
        'http://localhost:3004/workout/exercises/friday'
      );
      const data5 = await response5.json();
      setFriday(data5);
      const response6 = await fetch(
        'http://localhost:3004/workout/exercises/saturday'
      );
      const data6 = await response6.json();
      setSaturday(data6);
      const response7 = await fetch(
        'http://localhost:3004/workout/exercises/sunday'
      );
      const data7 = await response7.json();
      setSunday(data7);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'http://localhost:3004/workout/totcalories/monday'
      );
      const data = await response.json();
      setCalories(data[0].totCalories);
      console.log(data[0].totCalories);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className={classes2.pageContainer}>
        <div className={classes2.heading}>Workout Plan</div>
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

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '50px',
          }}
        >
          <div style={{ width: '50%' }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Link to={`/home/${userId}/workouts/exercise?propName=monday`}>
                  <Button
                    className={classes.dashText}
                    style={{
                      fontSize: '24px',
                      textAlign: 'center',
                      color: '#5a5a5a',
                    }}
                  >
                    Monday
                  </Button>
                </Link>
              </AccordionSummary>
              <AccordionDetails>
                {monday.map((items) =>
                  items.map((item) => (
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        marginBottom: '0.5rem',
                        color: 'grey',
                      }}
                    >
                      {item.exercise_name}
                      <br />
                    </Typography>
                  ))
                )}
                <h1>Total Calories : {calories}</h1>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Link
                  to={`/home/${userId}/workouts/exercise??propName=tuesday`}
                >
                  <Button
                    className={classes.dashText}
                    style={{
                      fontSize: '24px',
                      textAlign: 'center',
                      color: '#5a5a5a',
                    }}
                  >
                    Tuesday
                  </Button>
                </Link>
              </AccordionSummary>
              <AccordionDetails>
                {tuesday.map((items) =>
                  items.map((item) => (
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        marginBottom: '0.5rem',
                        color: 'grey',
                      }}
                    >
                      {item.exercise_name}
                    </Typography>
                  ))
                )}
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Link
                  to={`/home/${userId}/workouts/exercise/?propName=wednesday`}
                >
                  <Button
                    className={classes.dashText}
                    style={{
                      fontSize: '24px',
                      textAlign: 'center',
                      color: '#5a5a5a',
                    }}
                  >
                    Wednesday
                  </Button>
                </Link>
              </AccordionSummary>
              <AccordionDetails>
                {wednesday.map((items) =>
                  items.map((item) => (
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        marginBottom: '0.5rem',
                        color: 'grey',
                      }}
                    >
                      {item.exercise_name}
                    </Typography>
                  ))
                )}
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Link
                  to={`/home/${userId}/workouts/exercise/?propName=thursday`}
                >
                  <Button
                    className={classes.dashText}
                    style={{
                      fontSize: '24px',
                      textAlign: 'center',
                      color: '#5a5a5a',
                    }}
                  >
                    Thursday
                  </Button>
                </Link>
              </AccordionSummary>
              <AccordionDetails>
                {thursday.map((items) =>
                  items.map((item) => (
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        marginBottom: '0.5rem',
                        color: 'grey',
                      }}
                    >
                      {item.exercise_name}
                    </Typography>
                  ))
                )}
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Link to={`/home/${userId}/workouts/exercise/?propName=friday`}>
                  <Button
                    className={classes.dashText}
                    style={{
                      fontSize: '24px',
                      textAlign: 'center',
                      color: '#5a5a5a',
                    }}
                  >
                    Friday
                  </Button>
                </Link>
              </AccordionSummary>
              <AccordionDetails>
                {friday.map((items) =>
                  items.map((item) => (
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        marginBottom: '0.5rem',
                        color: 'grey',
                      }}
                    >
                      {item.exercise_name}
                    </Typography>
                  ))
                )}
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Link
                  to={`/home/${userId}/workouts/exercise/?propName=saturday`}
                >
                  <Button
                    className={classes.dashText}
                    style={{
                      fontSize: '24px',
                      textAlign: 'center',
                      color: '#5a5a5a',
                    }}
                  >
                    Saturday
                  </Button>
                </Link>
              </AccordionSummary>
              <AccordionDetails>
                {saturday.map((items) =>
                  items.map((item) => (
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        marginBottom: '0.5rem',
                        color: 'grey',
                      }}
                    >
                      {item.exercise_name}
                    </Typography>
                  ))
                )}
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Link to={`/home/${userId}/workouts/exercise/?propName=sunday`}>
                  <Button
                    className={classes.dashText}
                    style={{
                      fontSize: '24px',
                      textAlign: 'center',
                      color: '#5a5a5a',
                    }}
                  >
                    Sunday
                  </Button>
                </Link>
              </AccordionSummary>
              <AccordionDetails>
                {sunday.map((items) =>
                  items.map((item) => (
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        marginBottom: '0.5rem',
                        color: 'grey',
                      }}
                    >
                      {item.exercise_name}
                    </Typography>
                  ))
                )}
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkoutDay;
