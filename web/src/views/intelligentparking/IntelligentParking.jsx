import React from "react";
import { Paragraph, SectionContainer } from "../../components/shared";

const IntelligentParking = ({ id }) => {

    return (
        <SectionContainer id={id} heading="Intelligent parking planning.">
            <Paragraph>
                Imagine you are driving in to the city for a meeting. You know there
                is a lot of construction going on, so you leave extra time to find
                parking. As you get closer to your destination, you realize that finding
                parking is going to be even more challenging than you thought!
            </Paragraph>

            <Paragraph>
                But what if there was an app that could predict parking situations up
                to 5 hours in advance? That’s where Eventflow comes in. They are a
                company that specializes in predictive analytics and event forecasting.
                Their application predicts everything from traffic congestion and
                blocked roads, to parking availability and rest periods for truck
                drivers. This information is then made available through an easy-to
                use HTML5 visualization tool, which is available through an open
                API.
            </Paragraph>





        </SectionContainer>
    );
};

export default IntelligentParking;
