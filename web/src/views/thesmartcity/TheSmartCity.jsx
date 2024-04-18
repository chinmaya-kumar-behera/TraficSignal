import React from "react";
import { Heading, Paragraph, SectionContainer } from "../../components/shared";

const TheSmartCity = ({ id }) => {
    
    return (
        <SectionContainer id={id} heading=" The Smart City– AI Traffic Systems in cities">
            <div style={{backgroundColor:"grey", fontFamily:"inherit"}}>
            <Heading> Smart Cities: Improving Mobility, Access and Safety with Sensor
 Technology- Velodyne Lidar</Heading>
 </div>
            <Paragraph>
            Traffic Management in a Smart City
 The term “smart city” has been around for a few years now, but what
 does it actually mean?
            </Paragraph>

            <Paragraph> A Smart City is a city that makes efficient use of technology to
 provide services and benefits for the citizens. The most famous
 example would be Dubai, which has been built on cutting-edge
 technology that is able to provide the government and citizens with
 services such as public transport, traffic monitoring and waste
 management. Let’s take a look at a few characteristics and features of
 a smart city.</Paragraph>

            

        </SectionContainer>
    );
};

export default TheSmartCity;
