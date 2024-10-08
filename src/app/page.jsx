
import { GetStartedButton } from "@/components/Buttons";
import { Box, Stack, Typography } from "@mui/material";
import woman_sleeper from "../assets/woman_sleeper_desk.png";
import tt_flag from "../assets/round_TT_flag.png";
import jam_flag from "../assets/round_JAM_flag.png";
import brd_flag from "../assets/round_BRD_flag.png";
import slca_flag from "../assets/round_SLCA_flag.png";
import ky_flag from "../assets/round_KY_flag.png";
import clouds from "../assets/cloud_shape.png";
import Image from "next/image";


export default function Home() {
  return (
    <Box
    width="100%"
    minHeight="100%"
    sx={{overflowX:"hidden"}}
    >

      <Box
      className="sleeper">

        <Stack
        position="absolute"
        width="50%" gap={2}
        alignItems="flex-end"
        right="5%" top="40%">

          <Typography textAlign="end" color="#294c71" component="h1" variant="h4"><b>START THE JOURNEY TO <br/> A BETTER NIGHT'S SLEEP</b></Typography>

          <Box display="flex" gap="1rem">

            <Typography textAlign="end" color="#9278b6" component="h3" variant="body1"><b>WITH BOARD CERTIFIED <br/> SLEEP SPECIALISTS</b></Typography>
            
            <GetStartedButton/>
          </Box>

        </Stack>
        

      </Box>

      <Stack
      className="sleep_disorder"
      bgcolor="#9278b6">

        <Box
        maxWidth="100%"
        display="flex"
        justifyContent="center"
        py={5}>

          <Box
          display="flex"
          width="40%"
          height="400px"
          gap={5}
          justifyContent="center">

            <Stack
            justifyContent="center"
            gap={2}>

              <Image
              width={50}
              src={tt_flag}
              alt="round trinidad and tobago flag"/>

              <Image
              width={50}
              src={jam_flag}
              alt="round trinidad and tobago flag"/>

              <Image
              width={50}
              src={brd_flag}
              alt="round trinidad and tobago flag"/>

              <Image
              width={50}
              src={slca_flag}
              alt="round trinidad and tobago flag"/>

              <Image
              width={50}
              src={ky_flag}
              alt="round trinidad and tobago flag"/>

            </Stack>

            <Stack maxWidth="60%" gap={1}>

              <Typography color="white" component="h1" variant="h4"><b>SLEEP DISORDER TREATMENT</b></Typography>

              <Stack>
                
                <Typography fontSize="0.75rem" color="white" component="h2" variant="body2">SERVICES AVAILABLE IN THE CARIBBEAN</Typography>
                
                <Typography fontSize="0.8rem" color="black" component="h2" variant="body2"><b>TRINIDAD, JAMAICA, BARBADOS, ST. LUCIA & THE CAYMAN ISLANDS</b></Typography>

              </Stack>

              <Typography
              component="p"
              variant="body2"
              flex={0}
              color="white">
                Millions of people around the world are
                suffering from chronic sleep deprivation. In
                the Caribbean, people are suffering from a
                range of chronic, non-communicable
                illnesses that have been found to be
                associated with sleep-related issues. These
                include heart disease, diabetes, and more.
              </Typography>
            </Stack>

          </Box>

          <Box my="auto" display="flex" height="400px">
            <Image
            src={woman_sleeper}
            alt="woman sleeping on desk"
            style={{
              width:"100%",
              height:"100%"
            }}/>
          </Box>
        </Box>

        <Image
        src={clouds}
        style={{width:"102%",height:"100%",margin:"auto"}}
        alt="woman sleeping on desk"/>
        
      </Stack>

      <Stack
      bgcolor="#f6f8fc"
      textAlign="center">

        <Typography className="highlight" component="h1" variant="h5">WE IDENTIFY THE PROBLEM</Typography>

        <Typography className="text" component="h3" variant="body2">Our <span className="highlight">Board-Certified Specialist</span> can finally put a finger on your restless sleep</Typography>
      </Stack>

    </Box>
  );
}
