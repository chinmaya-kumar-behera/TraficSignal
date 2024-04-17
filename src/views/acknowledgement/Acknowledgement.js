import React from "react";
import { Paragraph, SectionContainer } from "../../components/shared";

const Acknowledgement = ({ id }) => {
  return (
    <SectionContainer id={id} heading="ACKNOWLEDGEMENT">
      <Paragraph>
        This satisfaction which accompanies the successful completion of any
        task is incomplete without the mention of those persons whose hands are
        behind the success. Because the success is the epitome of hard work,
        prevention, real, determination and the most encouraging guidance and
        advice serving as beacon of light and crowing our effort with success
      </Paragraph>
      <Paragraph>
        I am grateful to Dr Chinmaya Misra and the faculty members of KIIT
        Deemed to be University who have constantly strives to support us.
      </Paragraph>
    </SectionContainer>
  );
};

export default Acknowledgement;
