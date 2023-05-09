import React,{ useContext} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from './../Context/UserContext';
import  {BodyFat, BodyInfo, 
  Dashboard,
  Diet,
  DietPrediction,
  ExerciseCount,
  Exercises,
  HealthProfile,
  HomePage,
  MedicalInfo,
  Recommendations,
  SignIn,
  SignUp,
  WorkInfo,
  WorkoutDay,
  WorkoutTypes,
  Test,
  Guide
} from "../Components/index";

const Routers = () => {
  const {userId} = useContext(UserContext);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />

          <Route path="/home" element={<HomePage />}>
            <Route path="" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />

            <Route path="profile" >
              <Route index element={<HealthProfile />}/>
              <Route path="body" element={<BodyInfo/>}/>
              <Route path="medical" element={<MedicalInfo/>}/>
              <Route path="work" element={<WorkInfo/>}/>
            </Route>

            <Route path="workouts">
              <Route index element={<WorkoutDay/>}  />
              <Route path="exercise" element={<Exercises/>}/>
              <Route path="exerciseCount" element={<ExerciseCount/>} />
            </Route>

            <Route path="nutrition">
              <Route index element={<Diet/>} />
              <Route path="input" element={<DietPrediction />} />
            </Route>

            <Route path="body-fat">
              <Route index element={<Guide/>}/>
              <Route path="calculate" element={<BodyFat/>}/>
            </Route>

            <Route path="recommendations">
              <Route index element={<Recommendations/>}/>
            </Route>

             <Route path="test">
              <Route index element={<Test/>}/>
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
