"use client";

import { Box, Button, Card, Fade, Grid2, Grow, Stack, Typography, useMediaQuery } from "@mui/material";

import { useEffect, useRef, useState } from "react";
import { connectObserver } from "@/utils/animation_observers";

import home_sleep_study from "@/assets/service_home_sleep_study_tests.png";
import ongoing_support from "@/assets/service_ongoing_support.png";
import online_consultation from "@/assets/service_online_consultations.png";
import treatment_recommendation from "@/assets/service_treatment_recommendations.png";
import sleep_data_interpretation from "@/assets/service_sleep_data_interpretation.png";

import {Open_Sans} from "next/font/google";

const openSans = Open_Sans({
    subsets:["latin"]
});

export default function Section6(){
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

    const services = [
        ["Online Consultations",online_consultation,!isPhone?1500:1000],
        ["Sleep Data Interpretation",sleep_data_interpretation,!isPhone?1000:1500],
        ["Treatment Recommendations",treatment_recommendation,!isPhone?1500:2000],
        ["Home Sleep Study Tests",home_sleep_study,!isPhone?2000:1500]
    ];

    return (
        <Stack
        width="95%"
        m="auto"
        gap={4}
        py="4rem">

            <Fade
            in={checked}
            timeout={1500}
            easing="ease-out">
                <Box
                gap={2}
                margin="auto"
                alignItems="center"
                display="flex">

                    <Typography
                    className={`text ${openSans.className}`}
                    component="h3"
                    variant="h6"
                    lineHeight={0.8}
                    fontSize="2vw"
                    textAlign="end"
                    >
                        Your all-in-one Stop <br/> for Quality Sleep
                    </Typography>

                    <Typography
                    className={`accent1 ${openSans.className}`}
                    component="h1"
                    variant="h3"
                    fontWeight={1000}
                    fontSize="5vw">
                        Services We Offer
                    </Typography>

                </Box>
            </Fade>
            
            

            <Grid2
            ref={targ}
            container
            spacing={1}
            rowSpacing={2}>

                {services.map((service,i) => {
                    return (
                        <Grid2 key={i} size={!isPhone?4:2.4}
                        
                        sx={{
                            height:!isPhone?"35vw":"25vw",
                        }}>
                            <Grow
                            in={checked}
                            timeout={service[2]}
                            easing="ease-in-out">

                                <Card
                                elevation={5}
                                sx={{
                                    p:"4px",
                                    display:"flex",
                                    alignItems:"end",
                                    height:"100%",
                                    backgroundSize:"cover",
                                    backgroundImage:`url(${service[1].src})`,
                                    ":hover":{
                                        transform:"4px 0"
                                    }
                                }}>

                                    <Typography
                                    className={openSans.className}
                                    component="h2"
                                    variant="caption"
                                    color="white"fontWeight={700}
                                    fontSize={!isPhone?"2.55vw":"1.6vw"}>
                                        {service[0]}
                                    </Typography>

                                </Card>
                            </Grow>

                        </Grid2>
                    );
                })}

                {
                !isPhone?
                    <Grid2 size={!isPhone?4:2.4}
                    sx={{
                        padding:"5px"
                    }}>
                        <Stack height="100%"  gap={1} justifyContent="center">
                            <Typography
                            className={openSans.className}
                            component="h2"
                            variant="caption"
                            fontWeight={800}
                            textAlign="center"
                            fontSize="2vw">
                                Schedule your online sleep consultation today!
                            </Typography>

                            <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                fontSize:"0.5rem",
                                bgcolor:"#9278b6",
                                p:"4px"
                            }}>
                                Book a Specialist
                            </Button>

                        </Stack>

                    </Grid2>
                :
                    null
                }

                

                <Grid2 size={!isPhone?4:2.4}>

                    <Grow
                    in={checked}
                    timeout={!isPhone?2000:1000}
                    easing="ease-in-out">
                            
                        <Card
                        elevation={5}
                        sx={{
                            p:"4px",
                            height:"100%",
                            display:"flex",
                            alignItems:"end",
                            backgroundSize:"cover",
                            backgroundRepeat:"no-repeat",
                            backgroundImage:`url(${ongoing_support.src})`
                        }}>

                            <Typography
                            className={openSans.className}
                            fontWeight={700}
                            color="white"
                            component="h2"
                            variant="caption"
                            fontSize={!isPhone?"2.55vw":"1.6vw"}>
                                Ongoing <br/> Support
                            </Typography>
                        </Card>
                    
                    </Grow>

                </Grid2>

            </Grid2>

            {
            isPhone?
                <Stack height="100%"  gap={1} justifyContent="center">
                <Typography
                className={openSans.className}
                component="h2"
                variant="caption"
                fontWeight={800}
                textAlign="center"
                fontSize="2vw">
                    Schedule your online sleep consultation today!
                </Typography>

                <Button
                className={openSans.className}
                variant="contained"
                sx={{
                    margin:"auto",
                    fontSize:"2vw",
                    bgcolor:"#9278b6",
                    fontWeight:"700",
                    py:"4px", px:"2vw"
                }}>
                    Book a Specialist
                </Button>

            </Stack>
            :
                null
            }

        </Stack>
    );
}