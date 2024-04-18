import React from "react";
import { Lists, Image, Paragraph, SectionContainer } from "../../components/shared";
import ChallengesAi from "../../assets/images/Image4.jpeg"
const ChallengesOfUsingAi = ({ id }) => {

    const ListData = [
        "Data acquisition and understanding the underlying challenge.",
        "Data processing and feature extraction for predictive modeling.",
        "Model deployment, monitoring, and updating.",
        "Feedback analysis and learning from mistakes.",
        "Dealing with uncertainty and noise in the data.",
        "Scalability– can the system handle increased load as cities get larger?",
        "Privacy concerns– how will personal information be used or shared?",
        "Cost-effectiveness– can AI be used without making significant investments in new infrastructure?",
        "Standardization– will there be a single platform that all municipalities use to manage traffic?"
    ];
    
    return (
        <SectionContainer id={id} heading="Challenges of using AI in traffic management">
            <Paragraph>
            There are several challenges when it comes to using AI in traffic
 management.
            </Paragraph>

            <Lists list={ListData} />

            <Image image={ChallengesAi} alt={"traffic_image"}  className={'h-[400px]'}/>

        </SectionContainer>
    );
};

export default ChallengesOfUsingAi;
