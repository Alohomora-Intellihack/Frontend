import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './../../Context/UserContext';
import { HomeStyles } from './../Dashboard/styles';
import { Grid, Card, CardContent, Button, Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const WorkoutDay = () => {
  const { userId } = useContext(UserContext);
  const classes = HomeStyles();

  return (
    <>
      <div className={classes.pageContainer}>
        <div className={classes.heading}>Workout Plan</div>
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
                <Link to={`/home/${userId}/workouts/exercise`}>
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
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Link to={`/home/${userId}/workouts/exercise?propName=pullup`}>
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
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Link to={`/home/${userId}/workouts/exercise`}>
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
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Link to={`/home/${userId}/workouts/exercise`}>
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
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Link to={`/home/${userId}/workouts/exercise`}>
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
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Link to={`/home/${userId}/workouts/exercise`}>
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
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Link to={`/home/${userId}/workouts/exercise`}>
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
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkoutDay;
