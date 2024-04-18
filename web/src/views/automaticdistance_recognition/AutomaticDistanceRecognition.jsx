import React from "react";
import { Paragraph, SectionContainer } from "../../components/shared";

const AutomaticDistanceRecognition = ({ id }) => {
  
  return (
    <SectionContainer id={id} heading="AutomaticDistance Recognition">
      <Paragraph>
      Automatic distance recognition (ADR) is a technology that uses
 sensors to detect the distance between a car and an object in front of it.
 These sensors include lasers, radar and cameras.
      </Paragraph>
      <Paragraph>
      The purpose of ADR is to maintain a safe distance between the car
 and the object in front, thus reducing the risk of accidents
      </Paragraph>
      <Paragraph> 
        ADRsystems are becoming increasingly common in modern cars.
      </Paragraph>
      <Paragraph>
      Many different companies offer ADR systems, including Tesla,
 Volvo and Mercedes-Benz
      </Paragraph>
      

    
    </SectionContainer>
  );
};

export default AutomaticDistanceRecognition;
