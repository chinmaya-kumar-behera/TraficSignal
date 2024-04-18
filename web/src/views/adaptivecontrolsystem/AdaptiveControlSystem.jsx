import React from "react";
import { Image, Paragraph, SectionContainer } from "../../components/shared";
import AdaptiveControl1 from "../../assets/images/Image6.jpeg";
import AdaptiveControl2 from "../../assets/images/Image7.jpeg";


const AdaptiveControlSystem = ({ id }) => {

    return (
        <SectionContainer id={id} heading=" Adaptive traffic control system (ATCS)">
            <Paragraph>
                An adaptive road traffic control system, or ATCS, is a type of traffic
                management system that uses artificial intelligence (AI) to optimize
                the flow of vehicles through an urban area. It can reduce waiting time
                at traffic lights by up to half and help city authorities better
                understand ground conditions and traffic trends.
            </Paragraph>
            <Paragraph>
                ATCS is a key component of the growing smart traffic or intelligent
                traffic systems (ITS) market. According to MarketsandMarkets, The
                global ITS market is to reach USD 68.0 billion by 2026
            </Paragraph>
            <Image image={AdaptiveControl1} alt={"adaptive_control_system"} className={'h-[400px]'} />

            <Paragraph> This dynamic vehicle actuated traffic control system is designed to
                address the highly heterogeneous traffic conditions by continuously
                assessing real time traffic demand from vehicle detectors deployed at
                strategic locations.</Paragraph>
            <Paragraph>
                Based on the assessment, the system generated optimum signal
                timings for signal coordination in vehicle actuated mode of traffic
                signal operation, there by minimizing stops and delay at traffic
                junctions and reduce overall journey time.
            </Paragraph>
            <div>
                <Paragraph>
                    Adaptive Traffic Signal Controller
                </Paragraph>
                <Paragraph>
                    ATSC is a vehicle actuated road traffic signal controller that controls
                    the signal lamps over wired medium. ATSC is Area Traffic Control
                    System (ATCS) compatible having features to perform at isolated
                    intersections or as part of a synchronized chain of controllers. The
                    controller supports remote monitoring and management of signal
                    plans over various medium of communication network. Optimized
                    Solar power operation, PWM based intensity control of signal lamps,
                    GPS / Server based distributed time synchronization, pole mountable /
                    plinth mountable miniature architecture are other features of Cute.
                </Paragraph>
            </div>

            <Paragraph>Cute has been developed by CDAC (T) under the "Intelligent
                Transportation System Endeavour (InTranSe) for Indian Cities"
                which is a National level Collaborative Research and Development
                Program funded by the Department of Electronics and Information
                Technology (DeitY), Ministry of Communications and Information
                Technology, Government of India.</Paragraph>

                <Image image={AdaptiveControl2} alt={"adaptive_control_system"} className={'h-[400px]'} />


        </SectionContainer>
    );
};

export default AdaptiveControlSystem;
