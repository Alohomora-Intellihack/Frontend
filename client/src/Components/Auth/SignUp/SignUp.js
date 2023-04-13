import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { AuthStyles } from "../styles";
import { Link } from "react-router-dom";

const SignUp = () => {
  const classes = AuthStyles();
  return (
    <>
      <Box className={classes.container}>
        <Typography>Sign Up</Typography>
        <form>
          <h1>name</h1>
          <h2>password</h2>
        </form>
        <h3>Already have an account</h3>
        <Link to="signin">
          <Button color="success" variant="contained">
            Sign In
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default SignUp;
