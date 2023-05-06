import { Grid, Button, Card, CardMedia, CardContent,Typography, CircularProgress, Switch,FormControlLabel,TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { HomeStyles } from "./../Dashboard/styles";
import { AddCircleRounded } from '@mui/icons-material';

const DietPrediction = () => {
  const classes = HomeStyles();
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [nutrients, setNutrients] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(true);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleInputSubmit = async(e)=>{
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/text",
        { "food_name" : text}
      );
      setNutrients(response.data);
      swal({
        text: "Nutrient profile of uploaded food image updated",
        icon: "success",
        timer: 2000,
        buttons: false,
      });
      console.log("cholestrol: ", response.data.foods);
    } catch (error) {
      console.error("Error fetching nutrients:", error);
      swal({
        text: "Errpr in getting Nutrient Profile",
        icon: "error",
        timer: 2000,
        buttons: false,
      });
    }finally {
      setIsLoading(false); 
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      swal({
        text: "Image of the food is not uploaded",
        icon: "error",
        timer: 2000,
        buttons: false,
      });
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/nutrients",
        formData
      );
      setNutrients(response.data);
      swal({
        text: "Nutrient profile of uploaded food image updated",
        icon: "success",
        timer: 2000,
        buttons: false,
      });
      console.log("cholestrol: ", response.data.foods);
    } catch (error) {
      console.error("Error fetching nutrients:", error);
      swal({
        text: "Errpr in getting Nutrient Profile",
        icon: "error",
        timer: 2000,
        buttons: false,
      });
    }finally {
      setIsLoading(false); 
    }
  };

  return (
    <>
      <div className={classes.heading}>Predicting Food Calories</div>
      
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <div className={classes.predictContainer}>
            <p className={classes.formText}>
              Upload the image of the food you consume and click on the
              <b> Get Nutrients</b> button to track the nutrient profile you
              consume at this moment.
            </p>
            <p className={classes.formText}>You also can provide the food name instead. slide the switch towards left for this.</p>
            <FormControlLabel
            control={<Switch checked={isChecked} onChange={handleToggle} />}
            label="Image Input"
            style={{ justifyContent: 'flex-start',fontFamily:'Asap',color:'purple'}}
            labelPlacement="end"/>
    
            {isChecked && (
              <>
              <form onSubmit={handleSubmit}>
              <input type="file" onChange={handleChange} />
              <Button type="submit">Get Nutrients</Button>
              </form>
              </>
            )}
            {!isChecked && (
              <>
              <form onSubmit={handleInputSubmit}>
              <TextField
              name="text"
              type="text"
              value={text}
              onChange={handleInput}/>
              <Button type="submit">Get Nutrients</Button>
              </form>
              </>
            )}
          </div>

        </Grid>

        <Grid item xs={7}>
          <div className={classes.predictContainer}>
            <h2 style={{ color: "purple", paddingTop: "20px" }}>
              Nutritional Values
            </h2>
            {isLoading && <CircularProgress sx={{color:'#8d67af'}}/> }
            {nutrients && (
              <div>
                <Card sx={{ width :'500px'}}>
                  <CardMedia
                    component="img"
                    sx={{ width: '400px',margin:"40px 40px 0px 40px",padding:'0px 10px 0px 20px'}}
                    image={nutrients.foods[0].photo.thumb}
                    alt="food"/>
                  <CardContent>
                      <div className={classes.cardHeading}>{nutrients.foods[0].food_name}</div>
                    <Typography variant="body2" color="text.secondary" style={{backgroundColor:'#d8d8d8',padding:'10px 0px 10px 0px'}}>
                      <pre className={classes.cardText}>Calories :{" "}{JSON.stringify(nutrients.foods[0].nf_calories,null,2)} kCal</pre>
                      <pre className={classes.cardText}>Cholestrol :{" "}{JSON.stringify(nutrients.foods[0].nf_cholesterol,null,2)} mg</pre>
                      <pre className={classes.cardText}>Protein :{" "}{JSON.stringify(nutrients.foods[0].nf_protein, null, 2)} g</pre>
                      <pre className={classes.cardText}>Total Carbohydrate :{" "}{JSON.stringify( nutrients.foods[0].nf_total_carbohydrate,null,2)} Grid</pre>
                      <pre className={classes.cardText}>Total Fat :{" "}{JSON.stringify(nutrients.foods[0].nf_total_fat,null,2)} g</pre>
                      <pre className={classes.cardText}>Potassium :{" "}{JSON.stringify(nutrients.foods[0].nf_potassium, null,2 )} mg</pre>
                      <pre className={classes.cardText}>Sodium :{" "}{JSON.stringify(nutrients.foods[0].nf_sodium, null, 2)} mg</pre> 
                      <pre className={classes.cardText}>Sugars :{" "}{JSON.stringify(nutrients.foods[0].nf_sugars, null, 2)} g</pre>
                      <pre className={classes.cardText}>Dietary Fiber :{" "}{JSON.stringify(nutrients.foods[0].nf_dietary_fiber,null,2)} g</pre>
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default DietPrediction;
