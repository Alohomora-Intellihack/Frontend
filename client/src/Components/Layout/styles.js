import { makeStyles, createStyles } from "@mui/styles";

export const LayoutStyles = makeStyles(() =>
  createStyles({
    drawer: {
        width: '240px',
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width:'240px',
          boxSizing: "border-box",
        },
    },
    sidebar : {
      display: "flex" 
    },
    content : {
      flexGrow: 1, 
      padding: '30px'
    },
  })
);
