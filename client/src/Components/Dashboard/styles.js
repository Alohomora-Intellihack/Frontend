import { makeStyles, createStyles } from '@mui/styles';

export const HomeStyles = makeStyles(() =>
  createStyles({
    pageContainer: {
      padding: '5px 10px 150px 120px',
    },
    pageContainer2: {
      padding: '5px 10px 150px 50px',
    },
    dashText: {
      textAlign: 'center',
      fontWeight: 'bolder',
      color: '#5a5a5a',
    },
    heading: {
      textAlign: 'center',
      fontSize: '40px',
      paddingBottom: '42px',
      color: 'purple',
      fontWeight: '1000',
    },
    chartHeading: {
      textAlign: 'center',
      fontSize: '25px',
      color: '#8d67af',
      fontWeight: 'bolder',
      padding: '60px 0px 50px 0px',
    },
    pie: {
      width: '450px',
      height: '400px',
      padding: '10px 10px 20px 100px',
    },
    line: {
      paddingTop: '40px',
    },
    bar: {
      padding: '10px 30px 20px 20px',
    },
    formContainer: {
      backgroundColor: '#f5f5f5',
      margin: '40px 50px 120px 60px',
      padding: '40px 30px 60px 80px',
      borderRadius: '10px',
      fontFamily: 'Asap',
    },
    textField: {
      paddingBottom: '20px !important',
      paddingRight: '50px !important',
    },
    label: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      paddingBottom: "10px",
      fontfamily: "Asap",
    },
    profilePage: {
      margin: '20px 50px 30px 30px',
    },
    profileContainer: {
      borderRadius: '10px',
      height: '100px',
      backgroundColor: 'purple',
    },
    dietContainer: {
      borderRadius: '10%',
      margin: '10px 40px 150px 40px',
      height: '450px',
      width: '450px',
      backgroundColor: '#4b2c4d',
    },
    dietChart: {
      paddingTop: '80px',
      fontFamily: 'Asap',
    },
    dietText: {
      paddingLeft: '140px',
      paddingTop: '20px',
      color: '#d8d8d8',
      fontSize: '15px',
    },
    predictDietButton: {
      paddingLeft: '80%',
    },
    formText: {
      padding: '20px 30px 0px 30px',
      color: '#4b2c4d',
      fontWeight: '700px',
      lineHeight: '30px',
    },
    cardText: {
      paddingLeft: '30%',
      fontSize: '14px',
      fontFamily: 'Asap',
      fontWeight: 'bolder',
    },
    cardHeading: {
      textAlign: 'center',
      color: 'white',
      fontFamily: 'Asap',
      padding: '13px 0px 0px 0px',
      fontSize: '25px',
      fontWeight: 'bold',
      backgroundColor: '#8d67af',
      height: '50px',
    },
    predictContainer: {
      backgroundColor: '#d8d8d8',
      margin: '30px 50px 50px 30px',
      paddingBottom: '30px',
      marginBottom: '240px',
      borderRadius: '10px',
      minHeight: '200px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '& form': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& input': {
          margin: '20px 20px 10px 20px',
          paddingLeft: '60px',
          fontFamily: 'Asap',
          color: 'purple',
        },
        '& button': {
          margin: '10px',
          padding: '8px 16px',
          borderRadius: '4px',
          backgroundColor: '#8d67af',
          color: '#fff',
          border: 'none',
          fontWeight: 'bold',
          fontFamily: 'Asap',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '#4b2c4d',
          },
        },
      },
    },
  })
);
