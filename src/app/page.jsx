
import { Box } from "@mui/material";
import {CallToAction, CloudsSection, OsdHero, SleepDisorderTreatment} from "./Sections";


export default function Home() {
  return (
    <Box
    width="100%"
    minHeight="100%"
    sx={{overflowX:"hidden"}}
    >

      <CallToAction/>

      <SleepDisorderTreatment/>

      <CloudsSection/>

      <OsdHero/>
      
    </Box>
  );
}
