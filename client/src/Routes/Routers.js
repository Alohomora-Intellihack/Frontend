import React,{ useContext} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from './../Context/UserContext';
import  {Dashboard,
  Diet,
  DietPrediction,
  HealthProfile,
  HomePage,
  SignIn,
  SignUp,
  Workouts,
  WorkoutTypes,
} from "../Components/index";

const Routers = () => {
  const {userId} = useContext(UserContext);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />

          <Route path="/home/:userId" element={<HomePage />}>
            <Route path="" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />

            <Route path="profile" element={<HealthProfile />} />

            <Route path="workouts">
              <Route index element={<WorkoutTypes />} />
              <Route path="exercises" element={<Workouts />} />
            </Route>

            <Route path="diet">
              <Route index element={<Diet />} />
              <Route path="input" element={<DietPrediction />} />
            </Route>
            
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
