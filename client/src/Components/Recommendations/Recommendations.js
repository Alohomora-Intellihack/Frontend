import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  CircularProgress,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Select,
  MenuItem,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import axios from "axios";
import { HomeStyles } from "./../Dashboard/styles";
import swal from "sweetalert";

const Recommendations = () => {
  const [inputs, setInputs] = useState({
    Type: "bodybuilding",
    BodyPart: "",
    Equipment: "1",
    Level: "Beginner",
    Agegroup: "20-30",
  });

  const [Recommendations, setRecommendations] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]:
        event.target.name === "equipments"
          ? parseInt(event.target.value)
          : event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formattedData = {
      Type: [inputs.Type],
      BodyPart: [inputs.BodyPart],
      Equipment: [parseInt(inputs.Equipment)],
      Level: [inputs.Level],
      Agegroup: [inputs.Agegroup],
    };

    axios
      .post("http://localhost:8000/recommend", formattedData)
      .then((response) => {
        setRecommendations(response.data.workout_schedule);
        console.log(response.data.workout_schedule);
        swal({
          text: "Recommended Workout Schedule generated successfully",
          icon: "success",
          timer: 2000,
          buttons: false,
        });
        setIsLoading(false);

        const daysOfWeek = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        const workoutSchedule = {};

        const parsedData = JSON.parse(response.data.workout_schedule);

        if (parsedData) {
          for (const day of daysOfWeek) {
            if (parsedData.hasOwnProperty(day)) {
              workoutSchedule[day] = parsedData[day];
            } else {
              workoutSchedule[day] = ["Rest Day"];
            }
          }
        } else {
          // Handle the case when parsedData is undefined or has unexpected structure
          console.log("Error: Invalid workout schedule data");
        }
        
        localStorage.setItem("workoutSchedule", JSON.stringify(workoutSchedule));
       
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const classes = HomeStyles();
  console.log("data : ", localStorage.getItem("workoutPlan"));

  return (
    <>
      <div className={classes.heading}>Work Schedule Recommendation</div>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <form className={classes.formContainer} onSubmit={handleSubmit}>
            <FormLabel className={classes.label}>Workout Type</FormLabel>
            <Select
              style={{ height: "35px", textAlign: "center", width: "50%" }}
              name="Type"
              autoWidth
              value={inputs.Type}
              onChange={handleInputChange}
            >
              <MenuItem value="cardio">Cardio</MenuItem>
              <MenuItem value="bodybuilding">Body Building</MenuItem>
              <MenuItem value="strength">Strength</MenuItem>
              <MenuItem value="Powerlifting">Power Lifting</MenuItem>
              <MenuItem value="Stretching">Stretching</MenuItem>
              <MenuItem value="plyometrics">Plyo metrics</MenuItem>
            </Select>

            <FormLabel className={classes.label} style={{ paddingTop: "20px" }}>
              Body Part
            </FormLabel>
            <TextField
              name="BodyPart"
              type="text"
              value={inputs.BodyPart}
              className={classes.textField}
              onChange={handleInputChange}
            />
            <FormLabel className={classes.label}>
              Do you prefer workouts using Equipments ?
            </FormLabel>

            <RadioGroup
              style={{ paddingBottom: "15px" }}
              name="Equipment"
              value={inputs.Equipment}
              required
              onChange={handleInputChange}
            >
              <FormControlLabel
                value={1}
                control={<Radio sx={{ color: "purple" }} />}
                label="Yes"
              />
              <FormControlLabel
                value={0}
                control={<Radio sx={{ color: "purple" }} />}
                label="No"
              />
            </RadioGroup>

            <FormLabel className={classes.label}>
              Workout Difficulty Levl
            </FormLabel>
            <Select
              style={{ height: "35px", textAlign: "center", width: "50%" }}
              name="Level"
              autoWidth
              value={inputs.Level}
              onChange={handleInputChange}
            >
              <MenuItem value="Beginner">Beginner</MenuItem>
              <MenuItem value="Intermediate">Intermediate</MenuItem>
              <MenuItem value="Advanced">Advanced</MenuItem>
            </Select>

            <FormLabel className={classes.label} style={{ paddingTop: "20px" }}>
              Age group
            </FormLabel>

            <RadioGroup
              style={{ paddingBottom: "15px" }}
              name="Agegroup"
              value={inputs.Agegroup}
              required
              onChange={handleInputChange}
            >
              <FormControlLabel
                value="20-30"
                control={<Radio sx={{ color: "purple" }} />}
                label="20-30"
              />

              <FormControlLabel
                value="30-40"
                control={<Radio sx={{ color: "purple" }} />}
                label="30-40"
              />

              <FormControlLabel
                value="Over 40"
                control={<Radio sx={{ color: "purple" }} />}
                label="Over 40"
              />
            </RadioGroup>

            <div style={{ padding: "20px 10px 0px 20%" }}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#8d67af" }}
                type="submit"
              >
                Get Recommendations
              </Button>
            </div>
          </form>
        </Grid>

        <Grid item xs={6}>
          <div className={classes.predictContainer}>
            <h2
              style={{
                color: "#8d67af",
                paddingTop: "20px",
                textAlign: "center",
              }}
            >
              Recommended Work Schedule
            </h2>
            {isLoading && (
              <div style={{ padding: "100px 30px 150px 0px" }}>
                <CircularProgress sx={{ color: "#8d67af" }} />
              </div>
            )}
            {Recommendations && (
              <>
                {/* <pre className={classes.cardText}>
                  {JSON.stringify(Recommendations, null, 2)}{" "}
                </pre> */}

                {Object.entries(Recommendations).map(([day, exercises]) => (
                  <Card sx={{ margin: "10px", width: "85%" }}>
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{
                          backgroundColor: "#8d67af",
                          color: "white",
                          fontFamily: "Asap",
                          fontWeight: "bolder",
                          textAlign: "center",
                          padding: "6px",
                        }}
                        gutterBottom
                      >
                        {day}
                      </Typography>
                      <ul>
                        {exercises.map((exercise, index) => (
                          <li key={index}>{exercise}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </>
            )}
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Recommendations;
