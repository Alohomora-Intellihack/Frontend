import React, { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Modal,
  Box,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HomeStyles } from "./../Dashboard/styles";
import axios from "axios";

const Exercises = () => {
  const classes2 = HomeStyles();
  const data = JSON.parse(localStorage.getItem("workoutSchedule"));
  const location = useLocation();
  const propName = new URLSearchParams(location.search).get("propName");

  const getExercisesForDay = (day) => {
    return data[day] || [];
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const dayExercises = getExercisesForDay(propName);
  const [openDialog, setOpenDialog] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState("");
  const [duration, setDuration] = useState(0);
  const [count, setCount] = useState(0);
  const [calories, setCalories] = useState({});

  const handleStartButtonClick = (exercise) => {
    setSelectedExercise(exercise);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleNoButtonClick = () => {
    setOpenDialog(false);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/calories", {
        Gender: "male",
        Age: 30,
        Height: 180,
        Weight: 80,
        Duration: duration,
      })
      .then((response) => {
        console.log(response.data);
        setCalories((prevCalories) => ({
          ...prevCalories,
          [selectedExercise]: response.data.Calories,
        }));
      })
      .catch((error) => {
        console.error(error);
      });
    setOpenModal(false);
  };

  return (
    <>
      <div className={classes2.pageContainer}>
        <div className={classes2.heading} style={{paddingBottom:'100px'}}>WorkOuts plan for {propName}</div>
        {dayExercises.map((exercise, index) => (
          <Card key={index} style={{ marginBottom: "30px", width:'40%',marginLeft:'340px'}}>
            <CardContent>
              <Typography variant="h6" sx={{fontFamily:'Asap',textAlign:'center',paddingBottom:'15px'}}>{exercise}</Typography>
              <Typography variant="h4" sx={{fontFamily:'Asap',fontWeight:'bolder',paddingLeft:'110px'}}>{calories[exercise]} Calories</Typography>
              <div style={{paddingLeft:'150px',paddingTop:'30px',paddingBottom:'10px'}}>
              <Button onClick={() => handleStartButtonClick(exercise)} sx={{backgroundColor:'#8d67af',color :'white',padding:'7px 40px'}}>
                Start
              </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Video Assistance Center</DialogTitle>
        <DialogContent>
          Do you need Video Assistance ?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleNoButtonClick}>No</Button>
          <Link to={`/home/workouts/exerciseCount`}><Button>Yes</Button></Link>
        </DialogActions>
      </Dialog>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
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
          />
          <Button
            variant="contained"
            onClick={handleSave}
            sx={{
              backgroundColor: "purple",
              color: "white",
              mt: 2,
            }}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default Exercises;
