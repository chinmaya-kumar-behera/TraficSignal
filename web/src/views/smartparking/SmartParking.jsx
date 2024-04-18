import React from "react";
import {Lists, Paragraph, SectionContainer } from "../../components/shared";

const SmartParking = ({ id }) => {
  const ListDataHardware=[
    " RFID (radio frequency identification) or AIDC (automatic identification and data collection) tags",
    "Temperature sensors"
  ]
  const ListDataSoftware=[
    " Traffic data platform/data lake",
    "Cloud-based traffic control systems",
    "Geographic information systems (GIS)",
    " Air quality sensors",
    " All supporting transportation apps"
  ]
  const ListDataSensors=[
    " Radio frequency identification (RFID) tags",
    "Automatic identification and data collection (AIDC) tags",
    "Temperature sensors",
    " Air quality sensors",
  ]

  return (
    <SectionContainer id={id} heading="Smart Parking">
      <Paragraph>
      AI can help predict parking situations. For example, if there is a
 concert or other major event in town, AI can help identify the areas
 that are most likely to be congested and recommend parking spots
 ahead of time. This would help drivers avoid traffic jams and save
 time.
      </Paragraph>
      <Paragraph>
      One of the cornerstones in smart city design is having an integrated
 smart transportation solution.
      </Paragraph>
      <Paragraph> 
      It can be argued that a city is not completely intelligent without a
 smart traffic management system.
       </Paragraph>
      <Paragraph>
      Intelligent transportation systems, or smart traffic management
 systems provide an organized, integrated approach to minimizing
 congestion and improving safety on city streets through connected
 technology.
      </Paragraph>

<div>
<h1 style={{fontSize:'24px', fontWeight:'bold'}}>Increased Demand for Smart Traffic Management Systems</h1>
      <Paragraph> PR Newswire expects the intelligent traffic management system
 market to grow to $19.91 billion by 2028 at a 10.1% CAGR. The
 demand and increased adoption rate of smart traffic management
 solutions can be attributed to the boom of smart city technology.
 Guide house Insights reports that there are more than 250 smart city
 projects globally.</Paragraph>
 </div>
      
      <div>
        <h1 style={{fontSize:'24px', fontWeight:'bold'}}>The Technology Behind Intelligent Traffic Systems
</h1>
<Paragraph> Symmetry Electronics supplier, Digi International, defines smart
 traffic
 management systems as technology solutions that
 municipalities can integrate into their traffic cabinets and intersections
 today for fast, cost-effective improvements in safety and traffic flow
 on their city streets. Efficient and successful smart traffic
 management systems utilize next-generation hardware and software to
 optimize traffic infrastructure</Paragraph>
      </div>

      <div>
        <h1 style={{fontSize:'24px', fontWeight:'bold'}}>Hardware</h1>
        <h2 style={{fontSize:'20px'}}> loT road sensors including:</h2>
        <Lists list={ListDataHardware}></Lists>
      </div>

      <div>
        <h1 style={{fontSize:'24px', fontWeight:'bold'}}>Software</h1>
        <h2 style={{fontSize:'20px'}}> Cloud computing and edge processing capabilities:</h2>
        <Lists list={ListDataSoftware}></Lists>
      </div>

      <div>
        <h1 style={{fontSize:'24px', fontWeight:'bold'}}>Smart Traffic Sensors</h1>
        <h2 style={{fontSize:'20px'}}> loT sensors provide the backbone of data that intelligent
 transportation management systems analyze to increase actionable
 insights. Smart traffic management systems use integrated sensors
 like:</h2>
        <Lists list={ListDataSensors}></Lists>
        <Paragraph>With amount of data that ITS generate, it's crucial that the system
 integrates cloud computing and edge processing.</Paragraph>

 <div style={{marginTop:'10px'}}>
 <h1 style={{fontSize:'24px', fontWeight:'bold'}}> Connected Video Monitoring</h1>
 <Paragraph>One of the main technological aspects of smart traffic management
 systems is video detection systems with integrated edge processing.
 Connected video monitoring solutions within the realm of traffic
 safety are referred to as traffic incident management systems. A TIM
 allows city planners to gain real-time insights on regarding traffic
 conditions and respond to incidents through HD footage, image
 detection, and image recognition.</Paragraph>
 </div>

      </div>
    </SectionContainer>
  );
};

export default SmartParking;
