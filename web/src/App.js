import "./App.css";
import React, { useEffect } from "react";
import Intro from "./views/Intro";
import Introduction from "./views/introduction";
import { PageContainer, ScrollIndicator } from "./components/shared";
import Abstract from "./views/abstract";
import Navbar from "./views/header";
import SideBar from "./views/sidebar";
import { Acknowledgement, Certificate, Declaration } from "./views";
import Trafficlight from "./views/trafficlight_signal/Trafficlight";
import AutomaticDistanceRecognition from "./views/automaticdistance_recognition/AutomaticDistanceRecognition";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup";
import SmartParking from "./views/smartparking/SmartParking";
import LawEnforcement from "./views/lawenforcement/LawEnforcement";
import BenefitsAI from "./views/benefitsai/BenefitsAI";
import Its from "./views/its/Its";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/auth/authSlice";

function App() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
      const storageData = JSON.parse(localStorage.getItem("user"));
      dispatch(setUser(storageData));
    }, [user?._id]);
  
   console.log(user);

  return (
    <main>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route
          path="/project"
          element={
            <React.Fragment>
              <ScrollIndicator />
              <Navbar />

              <div className="">
                <PageContainer>
                  <section className="flex gap-2 py-2 relative">
                    <SideBar />

                    <div className="p-10">
                      <Intro id={"intro"} />
                      <Certificate id={"certificate"} />
                      <Declaration id={"declaration"} />
                      <Acknowledgement id={"acknowledgement"} />

                      <Abstract id={"abstract"} />
                      <Introduction id={"introduction"} />
                      <Trafficlight id={"traffic-lights"} />
                      <AutomaticDistanceRecognition
                        id={"automatic-distance-recognition"}
                      />
                      <SmartParking id={"smart-parking"} />
                      <LawEnforcement id={"law-enfourcement"} />
                      <Its id={"itms"} />
                      <BenefitsAI id={"benefits-aitm"} />
                    </div>

                    <div className="min-w-[200px]">
                      <div className="bg-gray-200 h-[100px] p-3">
                        hello sir i am chinmaya kumar behera
                      </div>
                    </div>
                  </section>
                </PageContainer>
              </div>
            </React.Fragment>
          }
        />
      </Routes>
    </main>
  );
}

export default App;

