import { Button } from "@mui/material";
import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from './../../Context/UserContext';

const WorkoutTypes = () => {

  return (
    <>
      <h1>Workout Types</h1>
      <Link to={`/home/workouts/exercises`}><Button variant="contained">Exercises</Button></Link>
      <Link to={`/home/workouts/exercises`}><Button variant="contained">Yoga</Button></Link>
      <Link to={`/home/workouts/exercises`}><Button variant="contained">Meditation</Button></Link>
    </>
  );
};

export default WorkoutTypes;
