
import { Box, Stack } from "@mui/material";
import {CtaHero, CloudsSection, OsdHero, SleepDisorderTreatment, BannerHero} from "./Sections";
import Image from "next/image";
import section4 from "../assets/home_section4.png";
import section2 from "../assets/home_section2.png";


export default function Home() {
  return (
    <Box
    width="100%"
    minHeight="100%"
    >
      <CtaHero/>

      <Box
      component="div"
      position="sticky"
      zIndex={-3}
      top={0}>

        <Image
        src={section2}
        style={{width:"100%",height:"50vw",margin:"auto"}}
        alt="woman sleeping on desk"/>
        
      </Box>

      <CloudsSection/>

      <Box p="0 2rem 0 0" bgcolor="white">
        <Image
          src={section4}
          style={{width:"100%", height:"50%",backgroundSize:"contain"}}
          alt="woman sleeping on desk"/>
      </Box>

      <BannerHero/>

    </Box>
  );
}
