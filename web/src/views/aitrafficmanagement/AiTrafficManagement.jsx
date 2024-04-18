import React from "react";
import {Paragraph, SectionContainer } from "../../components/shared";

const AiTrafficManagement = ({ id }) => {
    
    return (
        <SectionContainer id={id} heading="AI in traffic management– A controversial support.">
            <Paragraph>
            The use of artificial intelligence (AI) in traffic management is a
 controversial topic. While some believe that it could help reduce
 congestion and improve fuel consumption, others are unsure of the
 benefits that AI can bring to this field.
            </Paragraph>

            <Paragraph>
            Traffic congestion is often seen as a bane to city life. It can cause
 frustration for drivers, lead to increased emissions, and even increase
 the likelihood of road fatalities. However, it is not clear how much of
 an impact AI can have in reducing these factors
            </Paragraph>

            <Paragraph>
            There are many applications for which AI can be used in traffic
 management. For example, emergency vehicle preemption allows
 vehicles such as ambulances and fire trucks to bypass red lights or
 other obstacles when responding to an emergency. Transit signal
 priority gives buses priority at intersections so they do not get stuck in
 traffic, which improves overall travel times for passengers. And
 pedestrian safety systems use sensors embedded in the road surface to
 detect when someone is crossing the street so that the crossing signal
 will change more quickly.
            </Paragraph>

            <Paragraph>
            While there are many potential benefits to using AI in traffic
 management, it remains a controversial topic due to concerns about its
 reliability and efficacy.
            </Paragraph>

            

        </SectionContainer>
    );
};

export default AiTrafficManagement;
