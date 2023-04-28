import React,{ useContext} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from './../Context/UserContext';
import  {BodyInfo, Dashboard,
  Diet,
  DietPrediction,
  HealthProfile,
  HomePage,
  MedicalInfo,
  SignIn,
  SignUp,
  WorkInfo,
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

            <Route path="profile" >
              <Route index element={<HealthProfile />}/>
              <Route path="body" element={<BodyInfo/>}/>
              <Route path="medical" element={<MedicalInfo/>}/>
              <Route path="work" element={<WorkInfo/>}/>
            </Route>

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
