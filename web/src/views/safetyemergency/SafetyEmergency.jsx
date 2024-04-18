import React from "react";
import { Paragraph, SectionContainer } from "../../components/shared";

const SafetyEmergency = ({ id }) => {
    
    return (
        <SectionContainer id={id} heading="Safety and Emergency Situations.">
            <Paragraph>
            Emergency situations are a cause of great concern for everyone. In
 such times, it is vital that the authorities are able to act quickly and
 efficiently to ensure the safety of all citizens. To this end, agencies are
 going to implement an Integrated Traffic Management System
 (ITMS). The ITMS will automatically regulate the signal light and
 caution motorists on diversions. The new system will play a vital role
 in facilitating a quick passage to emergency vehicles such as
 ambulances and fire tenders. The ITMS will also caution motorists on
 diversions to be taken in case of any congestion ahead.
            </Paragraph>

            

        </SectionContainer>
    );
};

export default SafetyEmergency;
