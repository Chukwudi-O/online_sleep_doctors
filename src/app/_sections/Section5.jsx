"use client";
import { Box, Grow, Slide, Stack, Typography, useMediaQuery } from "@mui/material";
import step1 from "@/assets/survey_step1.png"
import step2 from "@/assets/survey_step2.png"
import step3 from "@/assets/survey_step3.png"
import Image from "next/image";

import { KeyboardDoubleArrowRight, KeyboardDoubleArrowDown } from "@mui/icons-material";
import { SleepSurveyButton } from "@/components/Buttons";
import { useEffect, useRef, useState } from "react";
import { connectObserver } from "@/utils/animation_observers";

import localFont from "next/font/local";

const openSans = localFont({src: "../../fonts/OpenSans.ttf"});

export default function Section5(){
    let isPhone = useMediaQuery("(min-width:750px)");
    const [checked, setCheck] = useState(false);
    const targ = useRef(null);

    const handleIntersect = ([entry]) => {
        if (entry.isIntersecting){setCheck(true)}
    };

    useEffect(() => {
        const observer = connectObserver(targ,handleIntersect,0.6);

        return () => {
            if (targ.current) {
              observer.unobserve(targ.current);
            }
        };
    }),[];

    return (
        <Stack
        ref={targ}
        gap={2}
        justifyContent="center"
        width="100%"
        height={!isPhone?"40vw":"35vw"}
        className="section5">

            <Box
            gap="7vw"
            display="flex"
            justifyContent="center">

                <Stack
                gap="2vw">

                    <Slide
                    in={checked}
                    timeout={1000}
                    direction="right"
                    easing="ease-in-out">
                        <Typography
                        className={openSans.className}
                        fontSize="1.6vw"
                        lineHeight={1}
                        color="white">
                            YOU <span style={{fontWeight:"700",fontStyle:"italic"}}>CAN</span> GET <br/>
                            <span style={{fontWeight:"700",fontStyle:"italic"}}>QUALITY SLEEP!</span>
                        </Typography>
                    </Slide>
                    
                    <Slide
                    in={checked}
                    timeout={1500}
                    direction="right"
                    easing="ease-in-out">
                        <Typography
                        className={openSans.className}
                        fontSize="4.5vw"
                        fontWeight={900}
                        lineHeight={1}
                        color="white">
                            IT'S AS<br/>
                            EASY AS..
                        </Typography>
                    </Slide>
                    

                </Stack>
            
                <Box
                height="10vw"
                display="flex"
                alignSelf="end"
                gap="2vw">

                    <Grow
                    in={checked}
                    timeout={1000}
                    easing="ease-in-out">
                        <Box>
                            <Image
                            src={step1}
                            alt="placeholder"
                            style={{width:"100%",height:"100%"}}/>
                        </Box>
                    </Grow>

                    <Grow
                    in={checked}
                    timeout={1500}
                    easing="ease-in-out">
                        <Box>
                            <Image
                            src={step2}
                            alt="placeholder"
                            style={{width:"100%",height:"100%"}}/>
                        </Box>
                    </Grow>

                    <Grow
                    in={checked}
                    timeout={2000}
                    easing="ease-in-out">
                        <Box>
                            <Image
                            src={step3}
                            alt="placeholder"
                            style={{width:"100%",height:"100%"}}/>
                        </Box>
                    </Grow>

                </Box>
           
            </Box>

            <Box
            overflow="hidden"
            mx="auto"
            width="fit-content"
            display="flex"
            flexDirection={!isPhone?"column":"row"}
            alignItems="center"
            justifyContent="center"
            gap="1vw">
                <Typography
                className={openSans.className}
                fontSize="1.75vw"
                lineHeight={1}
                textAlign={!isPhone?"center":"end"}
                color="white">
                    Got this far but still not convinced?<br/>
                    Try out our <span style={{fontWeight:"700"}}>FREE</span> Sleep Assessment Questionnaire
                </Typography>

                <Slide
                in={checked}
                timeout={1000}
                easing="ease-in-out">
                    {
                    !isPhone?
                    <KeyboardDoubleArrowDown htmlColor="white" sx={{fontSize:"4vw"}}/>
                    :
                    <KeyboardDoubleArrowRight htmlColor="white" sx={{fontSize:"5vw"}}/>
                    }
                </Slide>
                
                
                <SleepSurveyButton/>
            </Box>

        </Stack>
    );
}