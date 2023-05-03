import { makeStyles, createStyles } from "@mui/styles";

export const WorkoutStyles = makeStyles(() =>
  createStyles({
    heading: {
      fontSize: "3rem",
      fontWeight: "bold",
      color: "#5b5b5b",
      marginBottom: "1rem",
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
      fontSize: "2rem",
      fontWeight: "bold",
      borderRadius: "10px",
      padding: "1rem 2rem",
      border: "none",
      backgroundColor: "#8d67af",
      color: "#fff",
      cursor: "pointer",
      transition: "background-color 0.2s",
      "&:hover": {
        backgroundColor: "#6c4f9e",
      },
    },
    count: {
      fontSize: "3rem",
      fontWeight: "bold",
      color: "#8d67af",
      marginTop: "2rem",
    },
    calories: {
      fontSize: "3rem",
      fontWeight: "bold",
      color: "#8d67af",
      marginTop: "1rem",
    },
  })
);
