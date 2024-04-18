import React from "react";
import { Paragraph, SectionContainer } from "../../components/shared";

const AITrafficManagement = ({ id }) => {
  return (
    <SectionContainer id={id} heading="How is AI used in traffic management?">
      <Paragraph>
        AI is used in road traffic management to help analyze real-time data
        from various means of transportation, including cars, buses and trains.
        The AI analyzes this information for patterns that could indicate safety
        risks. This information is then used to suggest ways to mitigate these
        risks and reduce the number of accidents that occur. Phoenix is
        implementing a new traffic management system which uses AI in order to
        coordinate lights. Phoenix has seen a 40% decrease in vehicle delay time
        through this system.
      </Paragraph>
      <Paragraph>
        Phoenix Street Transportation Director Joseph Brown thinks AI will make
        traffic management more efficient: “We’re using technology that wasn’t
        available five or 10 years ago.”
      </Paragraph>
      <Paragraph>
        Phoenix is one of many cities that are currently testing the use of AI
        in traffic management as part of larger initiative by Maricopa
        Association of Governments, which tests new technologies for viability
        before large-scale investments are made. Safety and the real world are
        paramount to this roll-out process.
      </Paragraph>
    </SectionContainer>
  );
};

export default AITrafficManagement;
