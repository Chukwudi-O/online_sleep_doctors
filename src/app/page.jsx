
import { Box, Button, Stack, Typography } from "@mui/material";
import {CtaHero, CloudsSection} from "./Sections";
import Image from "next/image";
import section4 from "../assets/home_section4.png";
import section5 from "../assets/home_section5.png";
import section6 from "../assets/home_section6.png";
import section2 from "../assets/home_section2.png";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets:["latin"]
})

export default function Home() {
  return (
    <Box
    id="home"
    width="100%"
    minHeight="100%"
    >
      <CtaHero/>

      <Box
      component="div"
      position="sticky"
      bgcolor="#9278b6"
      zIndex={-3}
      top={-80}>

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

      <Box bgcolor="white">
        <Image
        src={section5}
        style={{width:"100%", height:"50%",backgroundSize:"contain"}}
        alt="woman sleeping on desk"/>

      </Box>
        
      <Stack py="4rem" bgcolor="white">
        <Image
        src={section6}
        style={{width:"100%", height:"50%",backgroundSize:"contain"}}
        alt="woman sleeping on desk"/>

        <Stack
        gap={2}
        mt={2}
        alignItems="center">
          <Typography
          component="h2"
          variant="h6"
          fontSize="2vw"
          fontWeight="750"
          className={`${openSans.className}`}>
            Schedule your online sleep consultation today!
          </Typography>
          <Button
          className={openSans.className}
          variant="contained"
          sx={{
            bgcolor:"#9278b6",
            width:"fit-content",
            fontSize:"2vw",
            fontWeight:"700"
          }}>BOOK A SPECIALIST</Button>
        </Stack>

      </Stack>


    </Box>
  );
}
