import React from "react";
import {
  Image,
  Lists,
  Paragraph,
  SectionContainer,
} from "../../components/shared";
import Automated1 from "../../assets/images/Image8.jpeg";
import Automated2 from "../../assets/images/Image9.jpeg";

const AutomatedVehicle = ({ id }) => {
  const ListData1 = [
    "Taxis",
    "Buses",
    "Delivery vans or drones",
    "Trains",
    "Commercial aircraft",
  ];
  const ListData2 = [
    "They can help to reduce energy consumption caused by idling vehicles and help to reduce engine emissions.",
    "They can automate parking processes, freeing up time for drivers to be more productive.",
    "Automated systems are improving at differentiating between road users, which can improve safety.",
  ];
  return (
    <SectionContainer id={id} heading=" Automated vehicles">
      <Paragraph>
        Automated vehicles are becoming increasingly common on our roads. While
        many people think of self-driving cars when they hear the term
        ‘automated vehicle’, this is only one type of automated vehicle.
      </Paragraph>
      <div className="">
        <Image
          image={Automated1}
          alt={"Automated_Vehicle1"}
          className={"w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] mx-auto"}
        />
      </div>
      <Paragraph>Image: A automated delivery using a drone.</Paragraph>
      <Paragraph>Other types of automated vehicles include:</Paragraph>

      <Lists list={ListData1} />
      <Paragraph>
        Automated vehicles can offer a number of advantages over traditional,
        manned vehicles. For example:
      </Paragraph>
      <Lists list={ListData2} />

      <Paragraph>
        {" "}
        However, there are also some disadvantages to using automated vehicles:
      </Paragraph>

      <Paragraph>
        Humans are still required to make decisions that require long-term
        planning, though many tasks can be automated for immediate issues like
        accidents and traffic rerouting. For example, the Vivacity Smart City
        relies on humans and machines working together to alleviate the burden
        of heavy traffic in the city centre. Another disadvantage is that
        automated systems can be expensive to implement and maintain.
      </Paragraph>

      <Image
        image={Automated2}
        alt={"Automated_Vehicle2"}
        className={"h-[600px]"}
      />
    </SectionContainer>
  );
};

export default AutomatedVehicle;
