import React from "react";
import { Box,Button } from "@mui/material";
import { AuthStyles } from "../styles";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  const classes = AuthStyles();
  return (
    <>
      <Box className={classes.container}>
        <div className={classes.heading}>Sign Up with TrainWell</div>
        <SignUpForm />
        <div className={classes.text}>Already have an Account?</div>
        <Link to="signin">
          <span className={classes.submitButton}>
          <Button sx={{backgroundColor:'purple'}} variant="contained">
            Sign In
          </Button>
          </span>
        </Link>
      </Box>
    </>
  );
};

export default SignUp;
