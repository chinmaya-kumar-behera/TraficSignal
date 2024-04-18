import React from "react";
import { Heading, Paragraph, SectionContainer } from "../../components/shared";

const TransitPlanning = ({ id }) => {
    
    return (
        <Heading> AI has its uses for Public Transportation
        </Heading>,
        <SectionContainer id={id} heading=" Transit Planning– Intelligent Transportation Systems.
        ">
            <Paragraph>
            Using AI to plan transit can reduce travel times and traffic congestion
 while increasing the effectiveness of buses, trains and ferries. AI
 helps planners decide which type of transportation is best for a certain
 area and what the most efficient route would be. In order to improve
 public transportation, artificial intelligence can be used to optimize
 the routing of buses and trains so that they are more efficient. AI also
 helps create better schedules for transit authority employees who are
 managing the routes.
            </Paragraph>

            

        </SectionContainer>
    );
};

export default TransitPlanning;
