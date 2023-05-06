import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./../../Context/UserContext";

const WorkoutDay = () => {
    const { userId } = useContext(UserContext);
  return (
    <>
      <div>WorkoutDay</div>
      <Link to={`/home/${userId}/workouts/exercise`}><button> Monday</button></Link>
    </>
  );
};

export default WorkoutDay;
