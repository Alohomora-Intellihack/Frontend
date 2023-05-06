import React from "react";
import { HomeStyles } from "./../Dashboard/styles";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./../../Context/UserContext";
import { DoubleArrowSharp } from "@mui/icons-material";

const Guide = () => {
  const classes = HomeStyles();
  const userId = useContext(UserContext);

  return (
    <>
      <div className={classes.heading}>
        Guide on Measuring Body Fat Parameters
      </div>
      <Link to={`/home/${userId}/body-fat/calculate`}>
        <div className={classes.predictDietButton}>
          <Button variant="contained" sx={{ backgroundColor: "#8d67af" }}>
            Calculate Body Fat <DoubleArrowSharp sx={{ fontSize: 20 }} />
          </Button>
        </div>
      </Link>

      <div>
       
          <h4>Density </h4>
          <p>This is typically measured using specialized equipment like
          hydrostatic weighing or a bod pod, which may not be easily accessible
          to most people. It's not a measurement that can be easily taken at
          home. Age This is a straightforward measurement that you can obtain by
          knowing your birthdate.</p>

          <h4> Weight</h4> 
          <p>This can be measured using a scale.
          Ideally, you should weigh yourself in the morning before eating or
          drinking anything and after using the bathroom, as your weight can
          fluctuate throughout the day. </p>
          
          Height This can be measured using a tape
          measure or a wall-mounted ruler. Stand up straight with your back
          against the wall, and measure from the top of your head to the bottom
          of your feet. Neck Measure around the neck at the level of the Adam's
          apple. Keep the tape measure snug but not too tight. Chest Measure
          around the chest at the level of the nipple. Keep the tape measure
          snug but not too tight. Abdomen Measure around the waist at the level
          of the belly button. Keep the tape measure snug but not too tight. Hip
          Measure around the widest part of the hips. Keep the tape measure snug
          but not too tight. Thigh Measure around the thigh at the widest point.
          Keep the tape measure snug but not too tight. Knee Measure around the
          knee at the center of the patella. Keep the tape measure snug but not
          too tight. Ankle Measure around the ankle at the narrowest point. Keep
          the tape measure snug but not too tight. Biceps Measure around the
          biceps at the widest point. Keep the arm relaxed and the tape measure
          snug but not too tight. 
          <h4>Forearm</h4>
          <p>Measure around the forearm at the
          widest point. Keep the arm relaxed and the tape measure snug but not
          too tight. </p> 
          <h4>Wrist</h4> 
          <p>Measure around the wrist at the narrowest point. Keep
          the tape measure snug but not too tight.</p>
  
      </div>
    </>
  );
};

export default Guide;
