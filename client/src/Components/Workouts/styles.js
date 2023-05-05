import { makeStyles, createStyles } from "@mui/styles";

export const WorkoutStyles = makeStyles(() =>
  createStyles({
    ImageTitle : {
      position: 'absolute',
      paddingTop:'80px',
      paddingBottom:'80px',
      width: '100%',
      textAlign: 'center'
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "2rem",
    },
    label: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#5b5b5b",
      marginBottom: "1rem",
    },
    input: {
      fontSize: "2rem",
      borderRadius: "10px",
      padding: "1rem",
      border: "none",
      backgroundColor: "#f5f5f5",
      marginBottom: "1rem",
    },
    button: {
      fontSize: "20px",
      fontWeight: "bold",
      borderRadius: "10px",
      padding: "15px 60px",
      border: "none",
      backgroundColor: "#8d67af",
      color: "#fff",
      cursor: "pointer",
      transition: "background-color 0.2s",
      "&:hover": {
        backgroundColor: "#6c4f9e",
      },
    },
    countText:{
      fontSize: "25px",
      fontWeight: "bold",
      color: "#8d67af",
      paddingLeft : '40%',
      paddingTop:'70px',
      lineHeight:'50px'
    },
   
  })
);
