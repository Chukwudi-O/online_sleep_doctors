"use client";

import { connectObserver } from "@/utils/animation_observers";

import Image from "next/image";
import { Box, Stack } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { Fade, Slide, Typography, useMediaQuery } from "@mui/material";

import clouds from "@/assets/cloud_shape.png";
import woman_sleeper from "@/assets/woman_sleeper_desk.png";

import ky_flag from "@/assets/round_KY_flag.png";
import tt_flag from "@/assets/round_TT_flag.png";
import jam_flag from "@/assets/round_JAM_flag.png";
import brd_flag from "@/assets/round_BRD_flag.png";
import slca_flag from "@/assets/round_SLCA_flag.png";

import {Open_Sans} from "next/font/google";

const openSans = Open_Sans({
    subsets:["latin"]
});

const countries = [tt_flag,jam_flag,brd_flag,slca_flag,ky_flag];

export default function Section2(){
    let isPhone = useMediaQuery("(min-width:750px)");
    const [checked, setCheck] = useState(false);
    const targ = useRef(null);

    const handleIntersect = ([entry]) => {
        if (entry.isIntersecting){setCheck(true)}
    };

    useEffect(() => {
        const observer = connectObserver(targ,handleIntersect,0.5);

        return () => {
            if (targ.current) {
              observer.unobserve(targ.current);
            }
        };
    }),[];

    return (
        <Stack
        className="sleep_disorder"
        bgcolor="#9278b6">
            <Box
            px={2} py={4}
            flexDirection={!isPhone?"column-reverse":"row"}
            gap={1}
            width="100%"
            alignItems={!isPhone?"center":"start"}
            justifyContent="center"
            display="flex">

                <Box
                width={!isPhone?"65%":"40%"}
                gap={2}
                display="flex"
                alignItems="center"
                flexDirection={!isPhone?"column":"row"}>

                    <Box
                    overflow={!isPhone?"hidden":"visible"}
                    ref={targ}
                    display="flex"
                    justifyContent="space-between"
                    flexDirection={!isPhone?"row":"column"}
                    width={!isPhone?"100%":"fit-content"}>

                        {countries.map((country,i) => {
                            return (
                                <Slide
                                key={i}
                                in={checked}
                                easing="ease-in-out"
                                direction={!isPhone?"down":"right"}
                                timeout={500+(i*200)}>

                                    <Box
                                    width={!isPhone?"7vw":"4vw"}>
                                        <Image
                                        style={{width:"100%",height:"100%"}}
                                        src={country}
                                        alt="round flag"/>
                                    </Box>

                                </Slide>
                            );
                        })}

                    </Box>

                    <Fade
                    in={checked}
                    easing="ease-in-out"
                    timeout={1000}>

                        <Stack gap={1}>
                            <Typography
                            width={!isPhone?"100%":"50%"}
                            fontSize={!isPhone?"4.25vw":"4.5vw"}
                            fontWeight={700}
                            lineHeight={1}
                            className={openSans.className}
                            textAlign={!isPhone?"center":"start"}
                            color="white" 
                            >
                                SLEEP DISORDER TREATMENT
                            </Typography>

                            <Stack>
                                <Typography
                                textAlign={!isPhone?"center":"start"}
                                className={openSans.className}
                                fontSize={!isPhone?"2.5vw":"1.3vw"}
                                fontWeight={400}
                                color="white">
                                    SERVICES AVAILABLE IN THE CARIBBEAN
                                </Typography>
                                
                                <Typography
                                textAlign={!isPhone?"center":"start"}
                                className={openSans.className}
                                fontSize={!isPhone?"2.25vw":"1.35vw"}
                                fontWeight={700}
                                lineHeight={1}
                                color="black">
                                    TRINIDAD, JAMAICA, BARBADOS,<br/>ST. LUCIA & THE CAYMAN ISLANDS
                                </Typography>
                            </Stack>

                            <Typography
                            className={openSans.className}
                            fontSize={!isPhone?"2.4vw":"1.5vw"}
                            lineHeight={1.1}
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

                    </Fade>
                    

                </Box>

                <Box display="flex"
                width={!isPhone?"65%":"45%"}>
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