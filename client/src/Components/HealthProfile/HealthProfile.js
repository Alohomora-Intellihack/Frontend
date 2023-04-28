import React,{useContext} from "react";
import { HomeStyles } from "./../Dashboard/styles";
import { Button, Grid } from "@mui/material";
import PersonalInfo from './PersonalInfo';
import { Link } from "react-router-dom";
import { UserContext } from './../../Context/UserContext';

const HealthProfile = () => {
  const classes = HomeStyles();
  const {userId} = useContext(UserContext);

  return (
    <>
      <div className={classes.heading}>User Profile</div>
      <div className={classes.profilePage}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div className={classes.profileContainer}><PersonalInfo/></div>
          </Grid>
          <Grid item xs={2} >
            <Link to={`/home/${userId}/profile/medical`}><Button variant="contained">Medical History</Button></Link>
          </Grid>
          <Grid item xs={2}>
            <Link to={`/home/${userId}/profile/body`}><Button variant="contained">Body Parameters</Button></Link>
          </Grid>
          <Grid item xs={2}>
            <Link to={`/home/${userId}/profile/work`}><Button variant="contained">Work Schedule</Button></Link>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default HealthProfile;
