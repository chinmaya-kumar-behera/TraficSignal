import React from "react";
import { Paragraph, SectionContainer } from "../../components/shared";

const LawEnforcement = ({ id }) => {

    return (
        <SectionContainer id={id} heading="Law Enforcement">
            <Paragraph>
                AI is used in traffic management to enforce the law. ITMS provides a
                tool to automatically challan offenders as per law of the land, with
                supporting evidence data in terms of snapshots & videos. AI is also
                used for speed violation detection which alerts the user when there are
                multiple people riding on a bicycle or motorcycle with no helmet, this
                helps prevent accidents involving those two modes of transportation
                and other motorized means of transport. The system can also be
                integrated with CCTV and Traffic Control systems, which results in a
                holistic solution towards preventing the current traffic menace.
            </Paragraph>
            <Paragraph>
                Its a computer vision applied field, which is focused on vehicle
                classification, traffic violation detection, and traffic flow analysis. Its
                often helps reduce the amount of congestion by paying attention to
                factors such as the distance between two moving vehicles and
                pedestrians at crossroads.
            </Paragraph>
            <Paragraph>
                ADRsystems are becoming increasingly common in modern cars.
            </Paragraph>
            <Paragraph>
                Many different companies offer ADR systems, including Tesla,
                Volvo and Mercedes-Benz
            </Paragraph>

            <Paragraph> 1. Facial recognition of criminals: The integration of machine
                learning into surveillance systems has proven to be valuable in recognizing human faces and this can help in preventing and detecting
                crimes in addition to intercepting criminals. These surveillance
                systems can be installed at airports, railway stations, and major public
                areas to help police identify and arrest criminals based on images fed
                into the system.</Paragraph>

            <Paragraph> 2. Predictive analytics: Another area related to machine learning that
                can help police is predictive analytic. Predictive analytic that
                leverages machine learning is a powerful tool that police can use to
                improve public safety measures and achieve operational efficiency.</Paragraph>

            <Paragraph> Machine learning tools focus on patterns and trends in historical
                crime data, making it easier for police to anticipate where and when
                such crimes are most likely to occur. When such trends are spotted,
                police can proactively take action by allocating necessary resources
                and concentrating their efforts.</Paragraph>

            <Paragraph> For example, when the system identifies a trend in a crime being
                committed in a particular area, police can then allocate resources or
                increase patrolling to that area so that they can proactively manage the
                situation and prevent a crime from occurring.</Paragraph>

            <Paragraph> 3. Pattern recognition: One of the most powerful applications of
                machine learning in policing is in the field of pattern recognition.
                Crimes often exhibit distinct patterns, whether carried out by the same
                individuals or those who share a similar modes operand.</Paragraph>

            <Paragraph>
                Police can benefit if they are able to spot patterns in crimes. The data
                that police get from crimes is essentially unstructured data. This data
                needs to be organized and sifted through to find patterns. Machine
                learning tools can compare various crimes easily and generate a
                similarity score. Machine learning’s ability to transform raw and
                unstructured crime data into actionable intelligence can lead to more
                effective crime prevention.
            </Paragraph>



        </SectionContainer>
    );
};

export default LawEnforcement;
