import React from "react";
import { Lists, Paragraph, SectionContainer } from "../../components/shared";

const Trafficlight = ({ id }) => {
  const ListData = [
    "Atraffic signal control system can monitor and ensure that motorists do not exceed the stated speed limits",
    "Since motorists can follow a standardized traffic system, there are minimal accidents on the roads",
 "At times when some roads experience heavy traffic, a signal system can intercept heavy traffic and give priority to other traffic to cross the road for convenience.",
    " It gives authority to motorists to use the road with confidence.",
    " Allows for traffic to move on different routes with very minimal congestion.",
    "Compared to a manual system, it provides a lot of efficiency and productivity"
  ];
  return (
    <SectionContainer id={id} heading="INTRODUCTION">
      <Paragraph>
      Traffic lights are an important part of the transportation infrastructure.
 They help to keep traffic flowing and organized.
      </Paragraph>
      <Paragraph>
      In the past, traffic lights were run by humans. They used timers and
 other tools to keep things running smoothly. However, that is no
 longer the case. Today, traffic lights are run by computers. This
 change was made in order to make things more efficient. It allows for
 better control over the timing of traffic lights.
      </Paragraph>
      <Paragraph>
      In recent years, there has been a push to make traffic lights smarter.
 This is done with the goal of increasing efficiency for drivers.
      </Paragraph>
      <Paragraph>
      One company that is leading this effort is called NoTraffic. It’s
 behind the new effort to make traffic lights smart. This company is
 trying to use artificial intelligence to improve traffic management.
      </Paragraph>
      <Lists list={ListData} />
      <Paragraph>
      Even in foggy and rainy weather, a signal is visible, unlike a manual
 sign given by a police officer
      </Paragraph>

    
    </SectionContainer>
  );
};

export default Trafficlight;
