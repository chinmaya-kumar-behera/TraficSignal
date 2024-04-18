import "./App.css";
import React from "react";
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
import QualityData from "./views/qualitydata/QualityData";
import AiTrafficManagement from "./views/aitrafficmanagement/AiTrafficManagement";
import ChallengesOfUsingAi from "./views/challengesofusingai/ChallengesOfUsingAi";
import CyberSecurityIssues from "./views/cybersecurityissues/CyberSecurityIssues";
import EthicalConsiderations from "./views/ethicalconsiderations/EthicalConsiderations";
import TheSmartCity from "./views/thesmartcity/TheSmartCity";
import AdaptiveControlSystem from "./views/adaptivecontrolsystem/AdaptiveControlSystem";
import AutomatedVehicle from "./views/automatedvehicle/AutomatedVehicle";
import IntelligentParking from "./views/intelligentparking/IntelligentParking";
import ReducingTrafficCongestion from "./views/ReducingTrafficCongestion/ReducingTrafficCongestion";
import SafetyEmergency from "./views/safetyemergency/SafetyEmergency";
import TransitPlanning from "./views/transitplanning/TransitPlanning";
import UrbanPlanning from "./views/urbanplanning/UrbanPlanning";


function App() {
  return (
    <main>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<SignUp/>} />
        <Route
          path="/project"
          element={
            <React.Fragment>
              <ScrollIndicator />
              <Navbar />

              <div className="w-full">
                <PageContainer>
                  <section className="flex gap-2 py-2">
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
                       <SmartParking id={'smart-parking'}/>
                       <LawEnforcement id={'law-enfourcement'}/>
                       <Its id={'itms'}/>
                       <BenefitsAI id={'benefits-aitm'}/>
                       <QualityData id={'quality-data'}/>
                       <AiTrafficManagement id={'ai-in-traffic-management'}/>
                       <ChallengesOfUsingAi id={'challenges-of-using-ai-tm'}/>
                       <CyberSecurityIssues id={'cyber-security-issues'}/>
                       <EthicalConsiderations id={'ethical-considerations'}/>
                       <TheSmartCity id={'smart-city-ai'}/>
                       <AdaptiveControlSystem id={'adaptive-traffic-control-system'}/>
                       <AutomatedVehicle id={'automated-vehicles'}/>
                       <IntelligentParking id={'intelligent-parking-planning'}/>
                       <ReducingTrafficCongestion id={'reducing-traffic-congestion'}/>
                       <SafetyEmergency id={'safety-and-emergency-situations'}/>
                       <TransitPlanning id={'tpits'}/>
                       <UrbanPlanning id={'up'}/>

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

