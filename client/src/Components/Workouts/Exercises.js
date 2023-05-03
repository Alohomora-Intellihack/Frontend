import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./../../Context/UserContext";

const Exercises = () => {
  const { userId } = useContext(UserContext);

  return (
    <>
      <h1>Exercises</h1>
      <Link to={`/home/${userId}/workouts/exerciseCount?propName=pullup`}>
        <Button variant="contained">Pullups</Button>
      </Link>
      <Link to={`/home/${userId}/workouts/exerciseCount?propName=squats`}>
        <Button variant="contained">Squats</Button>
      </Link>
      <Link to={`/home/${userId}/workouts/exerciseCount?propName=crunches`}>
        <Button variant="contained">Crunches</Button>
      </Link>
      <Link to={`/home/${userId}/workouts/exerciseCount?propName=biceps`}>
        <Button variant="contained">Weight Lifting</Button>
      </Link>
    </>
  );
};

export default Exercises;
