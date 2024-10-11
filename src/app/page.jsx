
import { Box} from "@mui/material";
import {CtaHero, CloudsSection, SleepDisorderTreatment, OsdHero, Services} from "./Sections";
import Image from "next/image";
import section5 from "../assets/home_section5.png";

export default function Home() {
  return (
    <Box
    id="home"
    width="100%"
    overflow="hidden"
    minHeight="100%"
    >
      <CtaHero/>

      <SleepDisorderTreatment/>

      <CloudsSection/>

      <OsdHero/>

      <a href="https://onlinesleepdoctors.com/sleep-assessment-questionnaire/">
        <Box bgcolor="white">
          <Image
          src={section5}
          style={{width:"100%", height:"50%",backgroundSize:"contain"}}
          alt="woman sleeping on desk"/>

        </Box>
      </a>
        
      <Services/>


    </Box>
  );
}
