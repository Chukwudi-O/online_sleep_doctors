import { GetStartedButton } from "@/components/Buttons";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import woman_sleeper from "../assets/woman_sleeper_desk.png";
import tt_flag from "../assets/round_TT_flag.png";
import jam_flag from "../assets/round_JAM_flag.png";
import brd_flag from "../assets/round_BRD_flag.png";
import slca_flag from "../assets/round_SLCA_flag.png";
import ky_flag from "../assets/round_KY_flag.png";
import clouds from "../assets/cloud_shape.png";
import SymptomSlider from "@/components/SymptomSlider";
import logo from "../assets/osd_logo.png"

export  function CallToAction(){
    return (
        <Box
        className="sleeper">

            <Stack
            position="absolute"
            width="50%" gap={2}
            alignItems="flex-end"
            right="5%" top="40%">

            <Typography className="bold" textAlign="end" color="#294c71" component="h1" variant="h4">START THE JOURNEY TO <br/> A BETTER NIGHT'S SLEEP</Typography>

            <Box display="flex" gap="1rem">

                <Typography className="bold" textAlign="end" color="#9278b6" component="h3" variant="body1">WITH BOARD CERTIFIED <br/> SLEEP SPECIALISTS</Typography>
                
                <GetStartedButton/>
            </Box>

            </Stack>
            

        </Box>
    );
}

export function SleepDisorderTreatment(){
    return (
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

              <Typography className="bold" color="white" component="h1" variant="h4">SLEEP DISORDER TREATMENT</Typography>

              <Stack>
                
                <Typography fontSize="0.75rem" color="white" component="h2" variant="body2">SERVICES AVAILABLE IN THE CARIBBEAN</Typography>
                
                <Typography className="bold" fontSize="0.8rem" color="black" component="h2" variant="body2">TRINIDAD, JAMAICA, BARBADOS, ST. LUCIA & THE CAYMAN ISLANDS</Typography>

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
    );
}


export function CloudsSection(){
    return (
        <>
            <Stack
            bgcolor="#f6f8fc"
            textAlign="center">

                <Typography
                className="highlight"
                component="h1"
                variant="h5">
                WE IDENTIFY THE PROBLEM
                </Typography>

                <Typography
                className="text"
                component="h3"
                variant="body2">

                Our <span className="highlight">Board-Certified Specialist</span> can finally put a finger on your restless sleep

                </Typography>

            </Stack>

            <SymptomSlider/>
        </>
    );
}

export function OsdHero(){
    return (
        <Box
        width="100%"
        height="100vh"
        className="osdHero">

            <Stack
            gap={1}
            width="35%"
            alignItems="center"
            pt="4rem"
            ml="auto" mr="5rem"
            >

                <Box
                position="relative"
                width="100%">

                    <Typography
                    className="highlight"
                    position="absolute"
                    top={0} left={5}
                    component="h1"
                    variant="h4">
                    
                        YOUR
                    
                    </Typography>

                    <Image
                    style={{width:"100%",height:"100%"}}
                    src={logo}
                    alt="osd logo"/>
                </Box>

                <Typography className="text" mb={2}>
                    
                    At Online Sleep Doctors, our team of board-certified 
                    sleep physicians understand just how much sleep 
                    issues can impact your life. With <span className="accent1">over 50 years of combined experience,</span>
                    we've seen it all--from snoring to sleep-walking and more.

                </Typography>

                <Typography className="text">

                    We're here to help you figure out what's going on 
                    with your sleep, and create a personalized 
                    treatment plan that fits your needs. <span className="accent1">
                    We're with you every step of the way: helping you
                    sleep better, feel better and overall improve your quality of life.</span>
                </Typography>

            </Stack>

        </Box>
    );
}