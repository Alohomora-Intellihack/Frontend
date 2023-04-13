import React from "react";
import { AuthStyles } from "../styles";
import { Box,Button } from "@mui/material";
import { Link } from "react-router-dom";

const SignIn = () => {
  const classes = AuthStyles();
  return (
    <>
      <Box className={classes.container}>
        <h1>Sign In</h1>
        <Link to="/">
          <Button color="error" variant="contained">
            Sign Up
          </Button>
        </Link>

        <Link to="/home">
          <Button color="success" variant="contained">
            Sign In
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default SignIn;
