"use client";

import SymptomSlider from "@/components/SymptomSlider";
import { connectObserver } from "@/utils/animation_observers";
import { Fade, Grow, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import {Open_Sans} from "next/font/google";

const openSans = Open_Sans({
    subsets:["latin"]
});

export default function Section3(){
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
        <Stack ref={targ} className="cloud_section" position="relative" bgcolor="#f6f8fc">
            
            <Fade in={checked} timeout={1500} easing="ease-in-out">
                <Stack
                className="cs_head"
                bgcolor="#f6f8fc"
                textAlign="center"
                px={2}>
                    <Grow in={checked}
                    timeout={1500}
                    easing="ease-in-out">
                        <Typography
                        className={`highlight ${openSans.className}`}
                        component="h1"
                        variant="h5">
                        WE IDENTIFY THE PROBLEM
                        </Typography>
                    </Grow>

                    <Grow in={checked}
                    timeout={1500}
                    easing="ease-in-out">
                        <Typography
                        className={`text ${openSans.className}`}
                        component="h3"
                        variant="body2">

                        Our <span className={`highlight ${openSans.className}`}>Board-Certified Specialist</span> can finally put a finger on your restless sleep

                        </Typography>
                    </Grow>

                </Stack>
            </Fade> 

            <SymptomSlider/>
        </Stack>
    );
}