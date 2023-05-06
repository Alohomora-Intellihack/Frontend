import { makeStyles, createStyles } from "@mui/styles";

export const LayoutStyles = makeStyles(() =>
  createStyles({
    drawer: {
      width: '290px !important',
      flexShrink: 0,
    },
    drawerPaper: {
      width: '300px !important',
      backgroundColor: "#f5f5f5 !important",
    },
    activeNavLink: {
      backgroundColor: "#eee !important",
      color: "#4b2c4d !important",
    },
    sidebar: {
      display: "flex",
    },
    content: {
      flexGrow: 1,
      padding: "30px",
    },
    footer: {
      backgroundColor: "#4b2c4d", // purple
      color: "#fff", // white
      padding: "20px",
      textAlign: "center",
      borderTop: "1px solid #ccc", // grey
      position: "fixed",
      left: "0",
      bottom: "0",
      width: "100%",
      height : '30px'
    },
    footerText : {
      paddingTop : '10px',
      paddingLeft : '250px',
    },
    headerContainer : {
      paddingRight :'30px',
      width : '100%',
      backgroundColor:'#8d67af'
    },
    headerBox : {
      height :'80px',
      flexGrow: 1,
      display: 'flex !important',
      padding :'10px',
      margin :'-30px auto 40px -20px',
      width :'100%',
      justifyContent: 'space-between !important',
      backgroundColor: '#8d67af !important', // purple
    }
  })
);
