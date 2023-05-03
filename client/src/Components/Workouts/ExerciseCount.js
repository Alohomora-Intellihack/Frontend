import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { WorkoutStyles } from "./styles";
import axios from "axios";

const ExerciseCount = () => {
  const location = useLocation();
  const classes = WorkoutStyles();
  const propName = new URLSearchParams(location.search).get("propName");
  const [count, setCount] = useState(0);
  const [calories, setCalories] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const countInput = e.target.elements.co.value;
    console.log("count: ", countInput);

    axios.post(`http://localhost:5000/${propName}`, {
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
      <div className={classes.heading}>{propName}</div>
      <form
        className={classes.form}
        method="POST"
        action={`/${propName}`}
        onSubmit={handleSubmit}
      >
        <label className={classes.label}>Count</label>
        <input className={classes.input} type="number" name="co" />

        <button className={classes.button} type="submit">
          Submit
        </button>
      </form>

      <h3 className={classes.count}>Count {count}</h3>
      <h3 className={classes.calories}>Calories {calories} </h3>
    </>
  );
};

export default ExerciseCount;
