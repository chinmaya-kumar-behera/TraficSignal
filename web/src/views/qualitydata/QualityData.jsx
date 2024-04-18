import React from "react";
import { Heading, Paragraph, SectionContainer } from "../../components/shared";

const QualityData= ({ id }) => {

    return (
        <SectionContainer id={id}>
            <Heading>Quality Data– The Key to artificial intelligence in road traffic.</Heading>
            <Paragraph>
                Self-driving cars are going to rely on AI traffic management systems
                being implemented as part of the infrastructure. It’s important that
                these systems have access to high-quality data so they can function
                correctly and keep everyone safe on the roads. That’s why we’re
                committed to providing the best possible data for our customers.
            </Paragraph>

            <Paragraph> The quality of the software designed for use in road traffic is
                influenced on the one hand by the programming of the algorithms, but
                also to a large extent by the quantity and quality of the training data.
                The more reliable and realistic datasets for machine learning
                are,
                the more potential there is for safe road traffic design.</Paragraph>
            <Paragraph> It is obvious that AI in road traffic has to accept many setbacks,
                especially in the current stage of development. Accidents caused by
                faulty software have made the headlines again and again. However,
                from a realistic point of view, these individual incidents are only
                partially suitable for questioning autonomous driving in principle. A
                final statement on the contribution of autonomous driving to road
                safety and the reduction of accident figures calls for a reliable
                comparison that puts two figures in relation to each other:</Paragraph>
        <div className="ms-20">
            <Paragraph> 1. How many accidents are caused by faulty programming?</Paragraph>
            <Paragraph> 2.How many accidents occur in the same situations due to human
                error?</Paragraph>
                </div>
            <Paragraph>Accidents that result from software errors are closely monitored by
                the public. In contrast, lack of human attention as a cause of accidents
                rarely makes it into the headlines. However, this does not necessarily
                reflect the everlasting superiority of human control.</Paragraph>

        </SectionContainer>
    );
};

export default QualityData;
