import React from 'react'
import { PageContainer, ScrollIndicator } from '../components/shared';
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
import ReducingTrafficCongestion from '../views/reducingtrafficcongestion/ReducingTrafficCongestion';
const ProjectContents = () => {
  return (
    <div className="px-0 lg:px-10">
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
      <ReducingTrafficCongestion id={"reducing-traffic-congestion"} />
      <SafetyEmergency id={"safety-and-emergency-situations"} />
      <TransitPlanning id={"tpits"} />
      <UrbanPlanning id={"up"} />
    </div>
  );
}

const RightSection = () => {
  return (
    <div className="hidden lg:block min-w-[200px]">
      <div className="bg-gray-200 h-[100px] p-3">
        hello sir i am chinmaya kumar behera
      </div>
    </div>
  );
}


const ProjectPage = () => {
  return (
    <React.Fragment>
      <ScrollIndicator />
      <Navbar />
      <div className="">
        <PageContainer>
          <section className="flex gap-2 py-2 relative">
            <SideBar />
            <ProjectContents />
            <RightSection/>
          </section>
        </PageContainer>
      </div>
    </React.Fragment>
  );
}

export default ProjectPage