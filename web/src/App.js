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

function App() {
  return (
    <main>
      <ScrollIndicator />
      <Navbar />

      <div className="w-full">
        <PageContainer>
          <section className="flex gap-2 py-2">
            <SideBar />

            <div className="p-10">
              <Intro id={"intro"} />
              <Certificate id={"certificate"} />
              <Declaration id={'declaration'} />
              <Acknowledgement id={'acknowledgement'}/>

              <Abstract id={"abstract"} />
              <Introduction id={"introduction"} />
              <Trafficlight id={'traffic-lights'} />
            </div>

            <div className="min-w-[200px]">
              <div className="bg-gray-200 h-[100px] p-3">
                hello sir i am chinmaya kumar behera
              </div>
            </div>
          </section>
        </PageContainer>
      </div>
    </main>
  );
}

export default App;
