import React from "react";
import {Lists, Paragraph, SectionContainer } from "../../components/shared";

const BenefitsAI = ({ id }) => {
    const ListData = [
        "Flowing traffic, with no traffic jams, is good for the environment. And this calls not so much for the use of hardware as for the further development of software, making it another relevant environmental aspect.",
        "It enables the optimization of many business processes, such as deliveries, which is of great benefit to the economy.",
        "Humanerror, by far the most frequent cause of accidents, can be largely eliminated by comprehensively managing the flow of traffic. Eliminating the human factor could drastically reduce the number of accidents.",
        " It also presents attractive opportunities in the transport sector: the term Truck Platooning describes the concept of electronically linking several trucks driving in a convoy on the highway. Here, a human driver only sits in the leading vehicle. AI takes over the control of all the following trucks.",
    ];
    return (
        <SectionContainer id={id} heading="Benefits of AI">
            <Heading> What are the Benefits of using AI in traffic management?
            </Heading>
            <Paragraph>
                Many road traffic processes can be significantly improved. Every
                driver who has to wait at a traffic light for minutes on end– even
                though there is no apparent reason for doing so– except that the
                traffic light system works according to a fixed pattern that is
                completely independent of the current traffic situation can relate to
                this. The use of artificial intelligence to keep traffic moving in
                response to the current situation has many advantages:
            </Paragraph>
            <Paragraph>
                Flowing traffic– With the power of AI</Paragraph>
            <Lists list={ListData} />




            <Paragraph>
                All these factors contribute to the optimization of the overall traffic
                system. Every road user benefits from this– even those who were
                previously only able to participate in road traffic to a limited extent
                without the aid of digital tools.
            </Paragraph>
            <Paragraph> By identifying upcoming events and displaying them on an easy-to
                use visual map, Event flow helps transportation managers plan their
                routes more effectively. This can lead to increased ridership and
                service levels, as well as reduced manual searches.</Paragraph>

            <Paragraph> Event flow also has two API– one for developers, the other for non
                developers who want data in an open format. This makes it easy for
                transportation managers to leverage existing systems to create new opportunities for levels. ridership and service</Paragraph>




        </SectionContainer>
    );
};

export default BenefitsAI;
