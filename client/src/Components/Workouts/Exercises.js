import React, { useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { UserContext } from './../../Context/UserContext';
import { HomeStyles } from './../Dashboard/styles';
import { Grid, Button, Box, Paper } from '@mui/material';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Modal,
  TextField,
} from '@mui/material';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Exercises = () => {
  const navigate = useNavigate();
  const { userId } = useContext(UserContext);
  const location = useLocation();
  const classes2 = HomeStyles();

  const [item, setItem] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [open, setOpen] = useState(false);
  const [duration, setDuration] = useState('');

  const propName = new URLSearchParams(location.search).get('propName');

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
    navigate('/home/Vidushika/workouts/exerciseCount');
  };

  const handleModal = () => {
    setOpen(false);
  };

  const handleNoClick = () => {
    handleModal();
    window.location.href =
      'http://localhost:3000/home/Vidushika/workouts/exerciseCount';
  };

  const handleSave = async (e) => {
    e.preventDefault();
    axios
      .post('#', duration)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    navigate(-1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3004/workout/exercises/${propName}`
      );
      const data = await response.json();
      console.log(data);
      setItem(data);
    };
    fetchData();
  }, []);

  // const itemData = [
  //   {
  //     img: pullupImg,
  //     title: 'PullUps',
  //     // rows: 2,
  //     // cols: 2,
  //     // featured: true,
  //     to: `/home/${userId}/workouts/exerciseCount?propName=pullup`,
  //     status: 'Completed',
  //   },
  //   {
  //     img: squatsImg,
  //     title: 'Squats',
  //     to: `/home/${userId}/workouts/exerciseCount?propName=squats`,
  //     status: 'Completed',
  //   },
  //   {
  //     img: BicepImg,
  //     title: 'Bicep Curl',
  //     to: `/home/${userId}/workouts/exerciseCount?propName=biceps`,
  //     status: 'Completed',
  //   },
  //   {
  //     img: crunchesImg,
  //     title: 'Crunches',
  //     to: `/home/${userId}/workouts/exerciseCount?propName=crunches`,
  //     status: 'Not Completed',
  //   },
  // ];

  return (
    <>
      <div className={classes2.pageContainer2}>
        <div className={classes2.heading}>WorkOuts we offer for you</div>
        <Grid container spacing={2} sx={{ paddingLeft: '0px' }}>
          {item.map((exerciseArray) =>
            exerciseArray.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.img}>
                <Paper sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
                  <Box sx={{ mb: 2 }}>
                    <img
                      //src={`${item.exercise_img}`}
                      src={`http://localhost:3004/${item.exercise_img}`}
                      srcSet={`${item.exercise_img}`}
                      alt={item.exercise_name}
                      style={{ width: '100%', height: '350px' }}
                      loading="lazy"
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: '30px',
                        fontFamily: 'Asap',
                        color: 'purple',
                        textAlign: 'center',
                      }}
                    >
                      <b>{item.exercise_name}</b>
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        mt: 2,
                        textAlign: 'center',
                        textDecoration: 'none',
                        color: item.status === 'Completed' ? 'blue' : 'red',
                        fontWeight:
                          item.status === 'Completed' ? 'bold' : 'normal',
                      }}
                    >
                      Status: {item.status}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      mt: 'auto',
                      textAlign: 'center',
                      paddingBottom: '10px',
                    }}
                  >
                    <Button
                      sx={{ mt: 2 }}
                      variant="contained"
                      disabled={item.status === 'Completed'}
                      onClick={handleClickOpen}
                    >
                      Start
                    </Button>
                    <Dialog
                      open={openDialog}
                      onClose={handleClose}
                      aria-labelledby="dialog-title"
                      aria-describedby="dialog-description"
                    >
                      <DialogTitle id="dialog-title">
                        {'Exercise Details'}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="dialog-description">
                          Do you want video assistance?
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions sx={{ justifyContent: 'center' }}>
                        <Button
                          variant="contained"
                          onClick={() => {
                            handleClose();
                          }}
                          sx={{
                            backgroundColor: 'purple',
                            color: 'white',
                            mr: 2,
                          }}
                        >
                          Yes
                        </Button>
                        <Button
                          variant="contained"
                          onClick={() => setOpen(true)}
                          sx={{
                            backgroundColor: 'purple',
                            color: 'white',
                          }}
                        >
                          No
                        </Button>
                      </DialogActions>
                    </Dialog>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          Enter Workout Data
                        </Typography>
                        <TextField
                          label="Duration"
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          value={duration}
                          onChange={(event) => setDuration(event.target.value)}
                        />
                        <TextField
                          label="Count"
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          //value={count}
                          // onChange={(event) => setCount(event.target.value)}
                        />
                        <Button
                          variant="contained"
                          onClick={handleSave}
                          sx={{
                            backgroundColor: 'purple',
                            color: 'white',
                            mt: 2,
                          }}
                        >
                          Submit
                        </Button>
                      </Box>
                    </Modal>
                  </Box>
                </Paper>
              </Grid>
            ))
          )}
        </Grid>
      </div>
    </>
  );
};

export default Exercises;
