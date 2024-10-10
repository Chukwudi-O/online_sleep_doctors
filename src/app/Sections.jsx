import { GetStartedButton } from "@/components/Buttons";
import { Box, Button, Stack, Typography } from "@mui/material";
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
import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import {Open_Sans} from "next/font/google";

const openSans = Open_Sans({
  subsets:["latin"]
})

export  function CtaHero(){
    return (
        <Box
        className="sleeper">

            <Stack
            className="sleeper_content">

            <Typography
            className={`highlight ${openSans.className}`}
            textAlign="end"
            component="h1"
            variant="h4"
            fontSize="4vw"
            fontWeight={750}>
                START THE JOURNEY TO <br/> A BETTER NIGHT'S SLEEP
            </Typography>

            <Box display="flex" flexShrink={1} gap="1rem">

                <Typography
                className={`accent1 ${openSans.className}`}
                textAlign="end"
                component="h3"
                variant="body1"
                lineHeight={1.2}
                fontWeight={750}>
                    WITH BOARD CERTIFIED <br/> SLEEP SPECIALISTS
                </Typography>
                
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
          gap={5}>

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

            <Stack className="sd_content" gap={1}>

                <Typography
                className="bold"
                color="white" 
                component="h1"
                variant="h4"
                fontSize="3vw">
                    SLEEP DISORDER TREATMENT
                </Typography>

                <Stack>
                    
                    <Typography
                    fontSize="0.75rem"
                    color="white"
                    component="h2"
                    variant="body2">
                        SERVICES AVAILABLE IN THE CARIBBEAN
                    </Typography>
                    
                    <Typography
                    className="bold"
                    fontSize="0.8rem"
                    color="black"
                    component="h2"
                    variant="body2">
                        TRINIDAD, JAMAICA, BARBADOS, ST. LUCIA & THE CAYMAN ISLANDS
                    </Typography>

                </Stack>

                <Typography
                component="p"
                variant="body2"
                fontSize="1.55vw"
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

          <Box display="flex">
            <Image
            src={woman_sleeper}
            alt="woman sleeping on desk"
            style={{
              width:"100%",
              height:"35vw"
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
        <Stack className="cloud_section" position="relative" bgcolor="#f6f8fc">
            <Box overflow="hidden">
                <Image
                src={clouds}
                style={{
                    width:"100%",
                    position:"absolute",
                    top:"-125px",
                    objectFit:"contain",
                    zIndex:-1
                }}
                alt="woman sleeping on desk"/>
            </Box>
            
            <Stack
            className="cs_head"
            bgcolor="#f6f8fc"
            textAlign="center"
            px={2}>

                <Typography
                className={`highlight ${openSans.className}`}
                component="h1"
                variant="h5">
                WE IDENTIFY THE PROBLEM
                </Typography>

                <Typography
                className={`text ${openSans.className}`}
                component="h3"
                variant="body2">

                Our <span className={`highlight ${openSans.className}`}>Board-Certified Specialist</span> can finally put a finger on your restless sleep

                </Typography>

            </Stack>

            <SymptomSlider/>
        </Stack>
    );
}

export function OsdHero(){
    return (
        <Box
        width="100%"
        bgcolor="white"
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

export function BannerHero(){
    const steps = ["Schedule your online sleep consultation", "Take an at-home sleep study", "Review your results with a Sleep Specialist"];

    return (
        <Stack
        width="100%"
        bgcolor="#294c71"
        alignItems="center"
        gap={2} py="2rem">

            <Stack
            width="fit-content">

                <Typography color="white">YOU <span className="bold">CAN</span> GET <span className="bold"><br/>QUALITY SLEEP!</span></Typography>

                <Box
                overflow="hidden"
                display="flex"
                gap={3}>

                    <Box
                    width="185px">
                        <Typography component="h1" variant="h4" color="white" lineHeight={1.2} mt="15px">ITS AS EASY AS..</Typography>
                    </Box>

                    {steps.map((step,i) => {
                        return <Box
                        key={i}
                        gap={1}
                        alignItems="start"
                        width="181px"
                        display="flex"
                        position="relative"
                        py={2}
                        zIndex={1}
                        sx={{
                            "::after":{
                                content:'""',
                                position: "absolute",
                                top:"0",left:"0",
                                translate: "-20% 8%",
                                borderRadius:"50%",
                                bgcolor:"rgba(135, 207, 235, 0.5)",
                                width:"100px",
                                height:"100px",
                                zIndex:-1
                            }
                        }}>

                            <Typography color="white" component="h1" variant="h1" lineHeight={0.8}>{i+1}</Typography>

                            <Typography color="white" component="h4" variant="h5" lineHeight={1.85} fontSize="16px">{step}</Typography>

                        </Box>;
                    })}

                </Box>

                <Box
                gap={2}
                ml="auto"
                display="flex">

                    <Typography
                    textAlign="end">
                        Got this far but still not convinced?<br/>
                        Try our our <span className="bold">FREE</span> Sleep Questionnaire
                    </Typography>

                    <KeyboardDoubleArrowRight
                    
                    htmlColor="white" sx={{width:"50px",height:"50px"}}/>

                    <Button variant="contained" sx={{px:"1rem"}}>SLEEP ASSESSMENT QUESTIONAIRE</Button>

                </Box>
            </Stack>

        </Stack>
    )
}