import React from "react";
import { Heading, Paragraph, SectionContainer } from "../../components/shared";

const Its = ({ id }) => {
    
    return (
        <SectionContainer id={id} heading="Intelligent Traffic Management System">
            <Heading>What is ITS?– Intelligent Traffic Management System</Heading>
            <Paragraph>
                ITS is a computer vision applied field, which is focused on vehicle
                classification, traffic violation detection, and traffic flow analysis. ITS
                often helps reduce the amount of congestion by paying attention to
                factors such as the distance between two moving vehicles and
                pedestrians at crossroads.
                ITS uses AI to help traffic move more smoothly by
                incorporating IoT
                and AI in order to improve mobility, reduce
                pollution and lower death rates.
            </Paragraph>

            

        </SectionContainer>
    );
};

export default Its;
