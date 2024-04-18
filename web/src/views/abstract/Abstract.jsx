import React from "react";
import { Paragraph, SectionContainer } from "../../components/shared";

const Abstract = ({ id }) => {
  return (
    <SectionContainer id={id} heading="ABSTRACT">
      <Paragraph>
        The increase in both rural and urban road traffic flow in recent years
        has led to several disasters in the transportation sector which include
        traffic congestion, accidents, and high rate of pollution. Alternative
        traffic control measures are needed whenever there is failure of
        conventional traffic control or real time traffic issues at road
        intersection. This current study seeks to investigate the stability and
        efficiency of Artificial Intelligence techniques, the artificial neural
        network for eliminating or reducing traffic volume in the case of non-
        autonomous vehicles in a mixed South African traffic flow conditions.
        Electronic traffic data of one hundred and twenty six vehicles were
        observed from Micros Traffic Monitoring firm, a subsidiary of Syn tell
        Group of Company, South Africa. The traffic data was obtained via the
        traffic technologies employed at which are basically sensor embedded on
        road surfaces to monitor and control vehicles which passes the traffic
        counter daily. The data set obtained from MTM was trained, tested and
        validated using artificial neural network model under signalized road
        intersection in heterogeneous condition by using the class description
        of the vehicles, and corresponding speed as input variables. After
        series of training, the results suggest that ANN model produced the best
        possible results for traffic congestion in a heterogeneous traffic
        condition.
      </Paragraph>
    </SectionContainer>
  );
};

export default Abstract;
