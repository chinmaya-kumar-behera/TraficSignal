import React from "react";
import { Image, Paragraph, SectionContainer } from "../../components/shared";
import EthicalConsideration from "../../assets/images/Image5.jpeg";
const EthicalConsiderations = ({ id }) => {

    return (
        <SectionContainer id={id} heading=" Ethical considerations– Will AI replace us in traffic management?">
            <Paragraph>
                New technology has caused some social questions to be raised about
                employment, though. For instance, will people who have traditionally
                held jobs in the transportation industry now be out of work? Or will
                this just create new opportunities for those who are looking for work?
                For example, if a job can be done faster and more accurately by a
                machine, what happens to the people who used to do that job?
            </Paragraph>

            <Paragraph>
                In some cases, machines may be able to do things better than humans
                can. For example, NVIDIA has developed a machine learning
                algorithm which is able to read traffic signs faster and more
                accurately than humans. This could lead to jobs such as traffic signal
                maintenance workers being replaced by machines.
            </Paragraph>
            <Paragraph>
                Is it fair for someone who has been working in a job for years to lose
                their livelihood because a machine can do it better?
            </Paragraph>

            <Paragraph>
                Fair or not, artificial intelligence is not likely to replace humans in the
                near future due to its current limitations, but it could still increase
                efficiency of human labor by speeding up and automating tasks. For
                example, AI can help us process large amounts of data more quickly
                and efficiently than humans can. It can also help us make better decisions based on complex data sets. As such, it is likely to play an
                important role in many fields, including healthcare, finance, and
                manufacturing.
            </Paragraph>

            <Image image={EthicalConsideration} alt={"ehical_consideration"}  className={'h-[400px]'}/>



        </SectionContainer>
    );
};

export default EthicalConsiderations;
