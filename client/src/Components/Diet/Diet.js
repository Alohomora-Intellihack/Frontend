import { DoubleArrowSharp } from "@mui/icons-material";
import { Button } from "@mui/material";
import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { HomeStyles } from "./../Dashboard/styles";
import { UserContext } from './../../Context/UserContext';

const Diet = () => {
  const classes = HomeStyles();
  const {userId} = useContext(UserContext);
  return (
    <>
      <div className={classes.heading}>Diet Progress</div>
      <div className={classes.main}>
        <span className={classes.container}>content 1</span>
        <span className={classes.container}>content 1</span>
        <span className={classes.container}>content 1</span>
      </div>
      <Link to={`/home/${userId}/diet/input`}>
        <div className={classes.predictDietButton}>
          <Button variant="contained" sx={{backgroundColor:'purple'}}>
            Predict Calaries <DoubleArrowSharp sx={{ fontSize: 20 }} />
          </Button>
        </div>
      </Link>
    </>
  );
};

export default Diet;
