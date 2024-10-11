"use client";
import { Box, IconButton, Slide, Stack, Typography } from "@mui/material";
import Image from "next/image";
import insomnia from "../assets/insomnia.png";
import sleep_apnea from "../assets/sleep_apnea.png";
import narcolepsy from "../assets/narcolepsy.png";
import restless_leg from "../assets/restless_leg.png";
import bruxism from "../assets/bruxism.png";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import {Open_Sans} from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { connectObserver } from "@/utils/animation_observers";

const openSans = Open_Sans({
  subsets:["latin"]
})

const symptoms = [
    [insomnia,"Insomnia","can't fall asleep"],
    [sleep_apnea,"Sleep Apnea","snoring and airway obstructions"],
    [narcolepsy,"Narcolepsy","can't stop falling asleep"],
    [restless_leg,"Restless Leg","can't stay still at night"],
    [bruxism,"Bruxism","grinding teeth during sleep"],
];

export default function SymptomSlider(){
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
    

    return(
        <Box
        ref={targ}
        pb="2rem"
        width="100%"
        display="flex"
        gap="2vw"
        justifyContent="center"
        bgcolor="#f6f8fc">
            
            <Slide in={checked} timeout={1500} direction="right" easing="ease-in-out">
                <IconButton sx={{height:"fit-content",marginY:"auto",color:"#9278b6"}}>
                    <ChevronLeft sx={{fontSize:"5vw"}}/>
                </IconButton>
            </Slide>

            {symptoms.map((symp,i) => {
                return <Symptom key={i} img_url={symp[0]} symptom={symp[1]} description={symp[2]}/>
            })}

            <Slide in={checked} timeout={1500} direction="left" easing="ease-in-out">
                <IconButton sx={{height:"fit-content",marginY:"auto",color:"#9278b6"}}>
                    <ChevronRight sx={{fontSize:"5vw"}}/>
                </IconButton>
            </Slide>
            

        </Box>
    );
}

function Symptom({img_url,symptom,description}){
    return (
        <Stack
        pt="1rem"
        width="12%"
        gap={1}
        textAlign="center">
            <Box
            sx={{width:"5vw", mx:"auto"}}>
                <Image
                src={img_url}
                alt={`${symptom} icon `}
                style={{width:"100%",height:"100%"}}/>
            </Box>
            <Typography
            component="h5"
            variant="body2"
            fontSize="1.75vw"
            fontWeight={700}
            className={`cs_b2 highlight ${openSans.className}`}>
                {symptom}
            </Typography>

            <Typography
            component="p"
            variant="caption"
            fontSize="1.25vw"
            fontWeight={400}
            className={`text ${openSans.className}`}>
                {description}
            </Typography>

        </Stack>
    );
}