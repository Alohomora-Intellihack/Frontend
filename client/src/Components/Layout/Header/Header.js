import { Button, AppBar, Toolbar, IconButton, Badge, Box, Typography } from "@mui/material";
import { AccountCircle, Notifications } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { LayoutStyles } from "./../styles";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const classes = LayoutStyles();

  return (
    <>
      <Box  sx={{ flexGrow: 1 }} className={classes.headerContainer}>
        <AppBar position="static" className={classes.headerBox}>
          <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontFamily:'Asap' }}>
            TrainWell
          </Typography>
            <div>
              <IconButton size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit">
                <Badge badgeContent={1} color="secondary">
                  <Notifications />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <AccountCircle />
              </IconButton>
              <Link to="/signin" style={{ textDecoration: "none" }}>
                <Button sx={{color:'white',fontFamily:'Asap'}}>Log Out</Button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
