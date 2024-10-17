
import { Box} from "@mui/material";
import {Services} from "./Sections";
import Image from "next/image";
import section5 from "../assets/home_section5.png";

import Section1 from "./_sections/Section1";
import Section2 from "./_sections/Section2";
import Section3 from "./_sections/Section3";
import Section4 from "./_sections/Section4";
import Section5 from "./_sections/Section5";
import Section6 from "./_sections/Section6";

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

      <Section5/>
        
      <Section6/>

    </Box>
  );
}
