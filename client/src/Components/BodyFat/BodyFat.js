import React, { useState } from "react";
import { TextField, Button, Grid, CircularProgress } from "@mui/material";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import { Chart } from "react-chartjs-2";
import { HomeStyles } from "./../Dashboard/styles";
import swal from "sweetalert";

const BodyFat = () => {
  const [inputs, setInputs] = useState({
    Density: "",
    Age: "",
    Weight: "",
    Height: "",
    Neck: "",
    Chest: "",
    Abdomen: "",
    Hip: "",
    Thigh: "",
    Knee: "",
    Ankle: "",
    Biceps: "",
    Forearm: "",
    Wrist: "",
  });

  const [bodyFat, setBodyFat] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const data = {
    labels: ["Body Fat", "other"],
    datasets: [
      {
        data: [bodyFat, 100 - bodyFat],
        backgroundColor: ["#8d67af", "#f5f5f5"],
        // "rgba(54, 162, 235, 0.8)"
        borderColor: ['#d8d8d8','#d8d8d8'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: "50%",
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    axios.post("http://localhost:8000/predict", inputs)
      .then((response) => {
        console.log(response.data.prediction);
        setBodyFat(response.data.prediction);
        swal({
            text: "Body Fat percantage calculated successfully",
            icon: "success",
            timer: 2000,
            buttons: false,
          });
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const classes = HomeStyles();

  return (
    <>
      <div className={classes.heading}>Calculating Body Fat Percentage</div>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <form className={classes.formContainer} onSubmit={handleSubmit}>
            <TextField
              label="Density"
              name="Density"
              type="number"
              value={inputs.Density}
              className={classes.textField}
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Age"
              name="Age"
              type="number"
              value={inputs.Age}
              className={classes.textField}
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Weight"
              name="Weight"
              type="number"
              value={inputs.Weight}
              className={classes.textField}
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Height"
              name="Height"
              type="number"
              value={inputs.Height}
              className={classes.textField}
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Neck"
              name="Neck"
              type="number"
              value={inputs.Neck}
              className={classes.textField}
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Chest"
              name="Chest"
              type="number"
              value={inputs.Chest}
              className={classes.textField}
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Abdomen"
              name="Abdomen"
              type="number"
              value={inputs.Abdomen}
              className={classes.textField}
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Hip"
              name="Hip"
              type="number"
              value={inputs.Hip}
              className={classes.textField}
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Thigh"
              name="Thigh"
              type="number"
              value={inputs.Thigh}
              className={classes.textField}
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Knee"
              name="Knee"
              type="number"
              value={inputs.Knee}
              className={classes.textField}
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Ankle"
              name="Ankle"
              type="number"
              value={inputs.Ankle}
              className={classes.textField}
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Biceps"
              name="Biceps"
              type="number"
              value={inputs.Biceps}
              className={classes.textField}
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Forearm"
              name="Forearm"
              type="number"
              value={inputs.Forearm}
              className={classes.textField}
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Wrist"
              name="Wrist"
              type="number"
              value={inputs.Wrist}
              className={classes.textField}
              onChange={handleInputChange}
              required
            />
            <div style={{padding:'20px 10px 0px 40%'}}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#8d67af" }}
                type="submit">
                Predict
              </Button>
            </div>
          </form>
        </Grid>

        <Grid item xs={5}>
          <h2 style={{ color: "#8d67af", paddingTop: "20px",textAlign:'center'}}>Body Fat percantage</h2>
          {isLoading && <div style={{padding:'100px 30px 150px 0px'}}><CircularProgress sx={{color:'#8d67af'}}/></div> }
          {bodyFat && (
            <>
              <div style={{ width: "300px", height: "300px",padding:'30% 100px 30% 100px'}}>
                <Doughnut data={data} options={options} />
              </div>
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default BodyFat;
