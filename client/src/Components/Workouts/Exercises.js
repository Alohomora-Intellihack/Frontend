import {
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Tooltip,
} from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./../../Context/UserContext";
import pullupImg from "../../Assets/pullups.jpg";
import squatsImg from "../../Assets/squats.jpg";
import BicepImg from "../../Assets/gallery4.jpg";
import crunchesImg from "../../Assets/crunches.jpg";
import { WorkoutStyles } from "./styles";
import { HomeStyles } from "./../Dashboard/styles";
import { AddCircleRounded} from "@mui/icons-material";

const Exercises = () => {
  const { userId } = useContext(UserContext);
  const classes = WorkoutStyles();
  const classes2 = HomeStyles();
  //  const [alertOpen,setAlertOpen] = useState(false);

  const itemData = [
    {
      img: pullupImg,
      title: "PullUps",
      // rows: 2,
      // cols: 2,
      // featured: true,
      to: `/home/${userId}/workouts/exerciseCount?propName=pullup`,
    },
    {
      img: squatsImg,
      title: "Squats",
      to: `/home/${userId}/workouts/exerciseCount?propName=squats`,
    },
    {
      img: BicepImg,
      title: "Bicep Curl",
      to: `/home/${userId}/workouts/exerciseCount?propName=biceps`,
    },
    {
      img: crunchesImg,
      title: "Crunches",
      to: `/home/${userId}/workouts/exerciseCount?propName=crunches`,
    },
  ];

  return (
    <>
      <div className={classes2.pageContainer}>
        <div className={classes2.heading}>WorkOuts we offer for you</div>
        <ImageList sx={{ width: "90%" }}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt={item.title}
                style={{ width: "100%", height: "500px" }} 
                loading="lazy"/>
              <ImageListItemBar
                className={classes.ImageTitle}
                title={<Typography variant="h6" sx={{ fontSize: "30px",fontFamily:'Asap' }}> {item.title}</Typography>}  
                actionIcon={
                 <Tooltip title={`Count your ${item.title}`}>
                    <Link to={item.to}>
                    <IconButton sx={{ color: "rgba(255, 255, 255, 0.54)" }}>
                      <AddCircleRounded sx={{ fontSize: "60px" }} />
                    </IconButton>
                  </Link>
                 </Tooltip>}/>
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </>
  );
};

export default Exercises;
