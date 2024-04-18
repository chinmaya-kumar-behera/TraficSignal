import React, { useState } from 'react'
import { AutoSlider, PageContainer, ScrollIndicator } from '../components/shared';
import Navbar from '../views/header';
import SideBar from '../views/sidebar';
import Abstract from '../views/abstract';
import Introduction from '../views/introduction';
import Trafficlight from '../views/trafficlight_signal/Trafficlight';
import AutomaticDistanceRecognition from '../views/automaticdistance_recognition/AutomaticDistanceRecognition';
import SmartParking from '../views/smartparking/SmartParking';
import LawEnforcement from '../views/lawenforcement/LawEnforcement';
import Its from '../views/its/Its';
import BenefitsAI from '../views/benefitsai/BenefitsAI';
import QualityData from '../views/qualitydata/QualityData';
import AiTrafficManagement from '../views/aitrafficmanagement/AiTrafficManagement';
import ChallengesOfUsingAi from '../views/challengesofusingai/ChallengesOfUsingAi';
import CyberSecurityIssues from '../views/cybersecurityissues/CyberSecurityIssues';
import EthicalConsiderations from '../views/ethicalconsiderations/EthicalConsiderations';
import TheSmartCity from '../views/thesmartcity/TheSmartCity';
import AdaptiveControlSystem from '../views/adaptivecontrolsystem/AdaptiveControlSystem';
import AutomatedVehicle from '../views/automatedvehicle/AutomatedVehicle';
import IntelligentParking from '../views/intelligentparking/IntelligentParking';
import TransitPlanning from '../views/transitplanning/TransitPlanning';
import SafetyEmergency from '../views/safetyemergency/SafetyEmergency';
import UrbanPlanning from '../views/urbanplanning/UrbanPlanning';
import Intro from '../views/Intro';
import Certificate from '../views/certificate';
import Declaration from '../views/declaration';
import Acknowledgement from '../views/acknowledgement/Acknowledgement';
import ReducingTraffic from '../views/reducingTraffic';

import img1 from "../assets/images/Image2.jpeg"
import img2 from "../assets/images/Image3.jpeg";
import img3 from "../assets/images/Image4.jpeg";
import img4 from "../assets/images/Image5.jpeg";
import img5 from "../assets/images/Image6.jpeg";
import img6 from "../assets/images/Image7.jpeg";
import AbsoluteComponent from '../views/absoluteComponent/AbsoluteComponent';

const ProjectContents = () => {
  return (
    <div className="px-0 lg:px-5">
      <Intro id={"intro"} />
      <Certificate id={"certificate"} />
      <Declaration id={"declaration"} />
      <Acknowledgement id={"acknowledgement"} />
      <Abstract id={"abstract"} />
      <Introduction id={"introduction"} />
      <Trafficlight id={"traffic-lights"} />
      <AutomaticDistanceRecognition id={"automatic-distance-recognition"} />
      <SmartParking id={"smart-parking"} />
      <LawEnforcement id={"law-enfourcement"} />
      <Its id={"itms"} />
      <BenefitsAI id={"benefits-aitm"} />
      <QualityData id={"quality-data"} />
      <AiTrafficManagement id={"ai-in-traffic-management"} />
      <ChallengesOfUsingAi id={"challenges-of-using-ai-tm"} />
      <CyberSecurityIssues id={"cyber-security-issues"} />
      <EthicalConsiderations id={"ethical-considerations"} />
      <TheSmartCity id={"smart-city-ai"} />
      <AdaptiveControlSystem id={"adaptive-traffic-control-system"} />
      <AutomatedVehicle id={"automated-vehicles"} />
      <IntelligentParking id={"intelligent-parking-planning"} />
      <ReducingTraffic id={"reducing-traffic-congestion"}/>
      <SafetyEmergency id={"safety-and-emergency-situations"} />
      <TransitPlanning id={"tpits"} />
      <UrbanPlanning id={"up"} />
    </div>
  );
}

const RightSection = () => {
  const photos = [img1, img2, img3, img4, img5, img6];
  return (
    <div className="hidden lg:block min-w-[200px]">
      <div className="space-y-3">
        <h4 className='text-center font-semibold'>Project Lighlights</h4>
        <AutoSlider data={photos} />
      </div>
    </div>
  );
}

const ProjectPage = () => {
  const [sidebar, setSideBar] = useState(false);
  return (
    <div>
      <ScrollIndicator />
      <AbsoluteComponent/>
      <Navbar />
      <div className="">
        <PageContainer>
          <section className="flex gap-2 py-2">
            <aside className="hidden lg:block">
              <SideBar />
            </aside>
            {sidebar && (
              <div className="absolute top-0 left-0 w-[100vw] h-[100vh] bg-gray-900" />
            )}
            {/* <aside className="">
                <SideBar />
              </aside> */}
            <ProjectContents />
            <RightSection />
          </section>
        </PageContainer>
      </div>
    </div>
  );
}

export default ProjectPage