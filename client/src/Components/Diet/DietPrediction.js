import { Grid } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { HomeStyles } from "./../Dashboard/styles";

const DietPrediction = () => {
  const classes = HomeStyles();
  const [image, setImage] = useState(null);
  const [nutrients, setNutrients] = useState(null);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/nutrients",
        formData
      );
      setNutrients(response.data);
    } catch (error) {
      console.error("Error fetching nutrients:", error);
      alert("Error fetching nutrients");
    }
  };

  return (
    <>
      <div className={classes.heading}>Predicting Food Calories</div>
      {/* <Grid container spacing={2}>
        <Grid item xs={7}>
          <div className={classes.predictContainer}>Prediction container</div>
        </Grid>
        <Grid item xs={5}>
          <div className={classes.predictContainer}>Camera container</div>
        </Grid>
      </Grid> */}
    
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} />
        <button type="submit">Get Nutrients</button>
      </form>
      {nutrients && (
        <div>
          <h2>Nutritional Values</h2>
          <pre>{JSON.stringify(nutrients, null, 2)}</pre>
        </div>
      )}

    </>
  );
};

export default DietPrediction;
