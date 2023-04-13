import { makeStyles, createStyles } from "@mui/styles";

export const AuthStyles = makeStyles(() =>
  createStyles({
    container: {
      margin: "100px 50px 100px 35%",
      width: "450px",
      backgroundColor: "#d8d8d8",
      borderRadius: "30px",
      paddingBottom: "25px",
      paddingTop:"30px",
      paddingLeft:"30px",
    },
    label: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      paddingBottom: "10px",
      fontfamily: "Asap",
    },
    textField: {
      paddingBottom: "20px !important",
    },
    FormContainer: {
      padding: "10px 80px 10px 50px",
    },
    submitButton: {
      paddingLeft:'35%'
    },
    heading : {
      textAlign:'center',
      fontSize:'28px',
      paddingBottom : '15px',
      color:'purple',
      fontWeight:'bolder'
    },
    text : {
      textAlign :'center',
      fontWeight : 'bold',
      color:'grey',
      fontSize:'16px',
      margin:'10px 0px 20px 0px'
    },
  })
);
