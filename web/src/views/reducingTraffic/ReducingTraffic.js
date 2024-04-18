import React from 'react'
import { Image, Paragraph, SectionContainer } from '../../components/shared';
import ReduceCongestion from "../../assets/images/Image10.jpeg";

const ReducingTraffic = ({ id }) => {
    return (
    <SectionContainer
        id={id}
        heading="Reducing Traffic Congestions– Improving Road Traffic Flow. "
      >
        <Paragraph>
          Artificial intelligence can reduce traffic congestion by routing cars
          around clogged areas, optimizing delivery routes and reducing the need
          for construction. Smart cameras at junctions can automatically identify
          different road users, such as pedestrians, cyclists, and cars. Traffic
          management systems should be adjusted according to the needs of road
          users, such as air quality or school traffic. For example, if there is
          an accident on a certain road, the system would need to reroute traffic
          accordingly.
        </Paragraph>
  
        <Paragraph>
          However, humans are still required to make decisions that require
          long-term planning, like where new roads should be built. Although many
          tasks can be automated for immediate issues like accidents and traffic
          rerouting, humans are still necessary for the overall management of the
          city’s traffic flow.
        </Paragraph>
  
        <div>
          <Image
            image={ReduceCongestion}
            alt={"Reduce_Congestion"}
            className={"h-[600px]"}
          />
          <div style={{ backgroundColor: "grey" }}>
            <Paragraph>
              The construction of a RapidX station near the junction further
              complicates the situation. The decision on whether to build an
              underpass, an elevated structure, or a combination of both will be
              based on the study's findings and land availability
            </Paragraph>
          </div>
        </div>
  
        <Paragraph>
          In a bid to alleviate the perpetual traffic congestion at Rajiv Chowk,
          one of Gurgaon's most bustling intersections, the National Highways
          Authority of India (NHAI) is formulating an all-encompassing plan. This
          development comes as a response to the increasing vehicular chaos
          witnessed at the junction, mainly due to the intersecting Delhi Jaipur
          highway (NH-8) and Delhi-Mumbai Expressway
        </Paragraph>
  
        <Paragraph>
          NHAI officials have disclosed that they are currently engaged in an
          extensive study aimed at identifying measures to mitigate traffic
          conflicts arising from the coexistence of intercity travelers and local
          commuters at Rajiv Chowk. The issue was recently deliberated upon in a
          coordination committee meeting led by GMDA's Chief Executive Officer
          (CEO), PC Meena. Instructing the officials from both NHAI and GMDA to
          devise a decongestion strategy for the area, Meena expressed the urgency
          of the situation
        </Paragraph>
      </SectionContainer>
  )
}

export default ReducingTraffic