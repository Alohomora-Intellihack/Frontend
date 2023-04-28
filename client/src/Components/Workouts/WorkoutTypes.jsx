import { Button } from "@mui/material";
import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from './../../Context/UserContext';

const WorkoutTypes = () => {
  const {userId} = useContext(UserContext);
  return (
    <>
      <h1>Workout Types</h1>
      <Link to={`/home/${userId}/workouts/exercises`}><Button variant="contained">Workouts 01</Button></Link>
    </>
  );
};

export default WorkoutTypes;
