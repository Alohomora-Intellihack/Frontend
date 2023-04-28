import React from "react";
import { HomeStyles } from './styles';

const Dashboard = () => {
  const classes = HomeStyles();
  return (
    <>
      <>
        <div className={classes.heading}>Dashboard</div>
        <div className={classes.main}>
          <span className={classes.container}>content 1</span>
          <span className={classes.container}>content 1</span>
          <span className={classes.container}>content 1</span>
        </div>
      </>
    </>
  );
};

export default Dashboard;
