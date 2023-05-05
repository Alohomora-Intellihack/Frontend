import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Sidebar,Header,Footer } from "./index";
import { LayoutStyles } from "./styles";

const HomePage = () => {
  const classes = LayoutStyles();
  return (
    <>
      <Box className={classes.sidebar}>
        <Sidebar />
        <Box component="main" className={classes.content}>
          <Header/>
          <Outlet />
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
