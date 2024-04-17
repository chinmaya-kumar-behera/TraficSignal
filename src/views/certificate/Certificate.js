import React from 'react'
import { Paragraph, SectionContainer } from '../../components/shared';

const Certificate = ({ id }) => {
  return (
    <SectionContainer id={id} heading="CERTIFICATE OF ORIGINALITY">
      <Paragraph>
        This is to certify that the project report entitled Intelligent Traffic
        Control System using Artificial intelligence submitted to School of
        Computer Application, KIIT University in partial fulfillment of the
        requirement for the award of the degree of MASTER OF COMPUTER
        APPLICATIONS (MCA), is an authentic and original work carried out by Ms.
        Digbijayalaxmi Swain with Roll no. 2270129 and Regd. No. 22275288456
        under my guidance. The matter embodied in this project is genuine work
        done by the student and has not been submitted whether to this
        University or to any other University / Institute for the fulfillment of
        the requirements of any course of study.
      </Paragraph>
    </SectionContainer>
  );
};

export default Certificate