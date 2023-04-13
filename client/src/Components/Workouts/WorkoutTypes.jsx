import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const WorkoutTypes = () => {
  return (
    <>
      <h1>Workout Types</h1>
      <Link to="/home/workouts/exercises"><Button variant="contained">Workouts 01</Button></Link>
    </>
  );
};

export default WorkoutTypes;
