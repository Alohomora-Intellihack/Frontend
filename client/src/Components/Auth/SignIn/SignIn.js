import React from "react";
import { AuthStyles } from "../styles";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import SignInForm from "./SignInForm";

const SignIn = () => {
  const classes = AuthStyles();
  return (
    <>
      <Box className={classes.container}>
        <div className={classes.heading}>Sign In with TrainWell</div>
        <SignInForm />
        
        <div className={classes.text}>Don't have an Account?</div>
        <Link to="/">
          <span style={{paddingLeft:'28%'}}>
            <Button sx={{ backgroundColor: "purple" }} variant="contained">
              Create An Account
            </Button>
          </span>
        </Link>
      </Box>
    </>
  );
};

export default SignIn;
