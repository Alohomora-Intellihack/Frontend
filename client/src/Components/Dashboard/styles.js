import { makeStyles, createStyles } from "@mui/styles";

export const HomeStyles = makeStyles(() =>
  createStyles({
    main: {
      margin: "30px",
      display:'flex',
    },
    container: {
      backgroundColor: "#d8d8d8",
      width: "280px",
      height :'280px',
      borderRadius: "50%",
      padding: "40px",
      margin:"40px"
    },
    heading: {
      textAlign: "center",
      fontSize: "38px",
      paddingBottom: "15px",
      color: "purple",
      fontWeight: "bolder",
    },
    text: {
      textAlign: "center",
      fontWeight: "bold",
      color: "grey",
      fontSize: "16px",
      margin: "10px 0px 20px 0px",
    },
    profilePage:{
      margin:'20px 50px 30px 30px',
    },
    profileContainer : {
      borderRadius :'10px',
      height : '100px',
      backgroundColor:'purple',
    },
    predictDietButton : {
      paddingLeft :'80%',
    },
    predictContainer:{
      backgroundColor:'#d8d8d8',
      margin:'30px 50px 50px 40px',
      borderRadius:'10px'
    }
  })
);
