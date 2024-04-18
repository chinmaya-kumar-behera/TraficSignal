import React from "react";
import { Heading, Paragraph, SectionContainer } from "../../components/shared";

const CyberSecurityIssues = ({ id }) => {
    
    return (
        <SectionContainer id={id} heading=" Cyber security issues.">
            <Heading> IT Security is of most importance for AI Traffic Systems</Heading>
            <Paragraph>
            Cyber security is a very important issue that affects the data and
 operations of modern day technology. The reason why cyber security
 is so important for systems such as these, which are directly focused
 on managing road traffic, is that they are subject to potential attacks
 from hackers who may cause serious damage. These systems cannot
 function correctly if they’re not secure and there’s a chance that the
 data could be manipulated.
            </Paragraph>
            <Paragraph>
            Cyber security issues for road traffic management systems are the
 potential vulnerability of computer-based components including GPS,
 mobile apps and websites to cyber attacks. This can lead to a loss in
 traffic flow and operational disruption.
            </Paragraph>

        <Heading>Economic questions.
</Heading>
<Paragraph> Advantages of AI in traffic will save time and money for a city’s
 transportation department, as well as have less of an impact on the
 environment. Improving an individual’s ability to maximize their time
 can also improve efficiency. If individuals are able to efficiently
 manage their time, then they will be able to make more money.</Paragraph>

 <Paragraph>
 An economic question is whether the system of autonomous cars will
 actually be cost-effective in the long term. There are some major
 concerns over how to deal with the cost of replacing human-driven
 cars with self-driving ones, as well as an issue that needs to be
 resolved before autonomous vehicles are permitted on public roads.
 </Paragraph>

            

        </SectionContainer>
    );
};

export default CyberSecurityIssues;
