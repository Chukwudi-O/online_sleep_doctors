"use client";

import { connectObserver } from "@/utils/animation_observers";
import { Slide, Typography, useMediaQuery, Box, Stack, Collapse } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import logo from "@/assets/osd_logo.png"
import section4 from "@/assets/home_section4.png";

import localFont from "next/font/local";

const openSans = localFont({src: "../../fonts/OpenSans.ttf"});

export default function Section4(){
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
        !isPhone?<Box
        width="100%"
        bgcolor="white"
        className="osdHero">

            <Stack
            
            gap={1}
            alignItems="end"
            justifyContent="center"
            p={1}
            >
                
                    <Box
                    position="relative"
                    mr="9vw"
                    width="37%">
                        <Collapse
                        in={checked}
                        timeout={1500}
                        easing="ease-in-out">

                            <Typography
                            className={`highlight ${openSans.className}`}
                            position="absolute"
                            top="1vw" left="1vw"
                            fontSize="3.25vw"
                            component="h1"
                            variant="h4">
                            
                                YOUR
                            
                            </Typography>

                            <Image
                            style={{width:"100%",height:"100%"}}
                            src={logo}
                            alt="osd logo"/>

                        </Collapse>
                    </Box>
                

                <Box width="45%" p={0.5}
                overflow="hidden"
                bgcolor="rgba(255,255,255,0.35)"
                sx={{background:"linear-gradient(to left, white, transparent)"}}
                borderRadius={2}
                ref={targ}>

                    <Slide
                    direction="left"
                    in={checked}
                    timeout={1250}
                    easing="ease-in-out">
                        <Typography className="text" mb={2} fontSize="2vw">
                                                
                            At Online Sleep Doctors, our team of board-certified 
                            sleep physicians understand just how much sleep 
                            issues can impact your life. With <span className="accent1">over 50 years of combined experience,</span>
                            we've seen it all--from snoring to sleep-walking and more.

                        </Typography>
                    </Slide>

                    <Slide
                    direction="left"
                    in={checked}
                    timeout={1500}
                    easing="ease-in-out">
                         <Typography className="text" fontSize="2vw">

                            We're here to help you figure out what's going on 
                            with your sleep, and create a personalized 
                            treatment plan that fits your needs. <span className="accent1">
                            We're with you every step of the way: helping you
                            sleep better, feel better and overall improve your quality of life.</span>
                        </Typography>
                    </Slide>
                    

                   
                </Box>

            </Stack>

        </Box>
        :
        <Box p="0 2rem 0 0" bgcolor="white">
            <Image
            src={section4}
            style={{width:"100%", height:"50%",backgroundSize:"contain"}}
            alt="woman sleeping on desk"/>
            
        </Box>
    );
}