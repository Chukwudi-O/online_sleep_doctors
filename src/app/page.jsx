
import { Box} from "@mui/material";
import {Services} from "./Sections";
import Image from "next/image";
import section5 from "../assets/home_section5.png";

import Section1 from "./_sections/Section1";
import Section2 from "./_sections/Section2";
import Section3 from "./_sections/Section3";
import Section4 from "./_sections/Section4";
import Section5 from "./_sections/Section5";

export default function Home() {
  return (
    <Box
    id="home"
    width="100%"
    overflow="hidden"
    minHeight="100%"
    >
      <Section1/>

      <Section2/>

      <Section3/>

      <Section4/>

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
