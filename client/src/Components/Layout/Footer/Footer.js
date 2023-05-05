import React from "react";
import { LayoutStyles } from "./../styles";

const Footer = () => {
  const classes = LayoutStyles();

  return (
    <>
      <div className={classes.footer}>
        <div className={classes.footerText}>
          &copy; {new Date().getFullYear()} All rights reserved by Alohomora - TrainWell
        </div>
      </div>
    </>
  );
};

export default Footer;
