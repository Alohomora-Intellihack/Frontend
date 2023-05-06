import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { WorkoutStyles } from "./styles";
import axios from "axios";
import { HomeStyles } from "./../Dashboard/styles";

const ExerciseCount = () => {
  const location = useLocation();
  const classes = WorkoutStyles();
  const classes2 = HomeStyles();
  const propName = new URLSearchParams(location.search).get("propName");
  const [count, setCount] = useState(0);
  const [calories, setCalories] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const countInput = e.target.elements.co.value;
    console.log("count: ", countInput);

    axios.post(`http://127.0.0.1:5000/${propName}`, {
        count: countInput,
      })
      .then((response) => {
        setCount(response.data.count);
        setCalories(response.data.calories);
        console.log("backend data: ", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className={classes2.heading}>Workout, Count & Burn calories</div>
      <form
        className={classes.form}
        method="POST"
        action={`/${propName}`}
        onSubmit={handleSubmit}
      >
        <label className={classes.label}>{propName} count </label>
        <input className={classes.input} type="number" name="co" />

        <button className={classes.button} type="submit">
          Submit
        </button>
      </form>

      <div className={classes.countText}>
        <div className={classes.calories}>Total count of {propName} : {count}</div>
        <div className={classes.calories}>Total calories burnt  : {calories} </div>
      </div>
    </>
  );
};

export default ExerciseCount;
