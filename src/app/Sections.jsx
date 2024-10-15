"use client";

import Image from "next/image";
import {Open_Sans} from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { GetStartedButton } from "@/components/Buttons";


import logo from "../assets/osd_logo.png"
import clouds from "../assets/cloud_shape.png";
import woman_sleeper from "../assets/woman_sleeper_desk.png";

import ky_flag from "../assets/round_KY_flag.png";
import tt_flag from "../assets/round_TT_flag.png";
import jam_flag from "../assets/round_JAM_flag.png";
import brd_flag from "../assets/round_BRD_flag.png";
import slca_flag from "../assets/round_SLCA_flag.png";

import section2 from "../assets/home_section2.png";
import section4 from "../assets/home_section4.png";
import section6 from "../assets/home_section6.png";

import home_sleep_study from "../assets/service_home_sleep_study_tests.png";
import ongoing_support from "../assets/service_ongoing_support.png";
import online_consultation from "../assets/service_online_consultations.png";
import treatment_recommendation from "../assets/service_treatment_recommendations.png";
import sleep_data_interpretation from "../assets/service_sleep_data_interpretation.png";


import SymptomSlider from "@/components/SymptomSlider";
import { connectObserver } from "@/utils/animation_observers";

import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import {Box,Button,Card,Fade,Grid2,Slide,Stack,Typography,useMediaQuery} from "@mui/material";

const countries = [tt_flag,jam_flag,brd_flag,slca_flag,ky_flag];

const openSans = Open_Sans({
  subsets:["latin"]
})

export  function CtaHero(){
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    },[]);

    return (
        <Box
        className="sleeper">
            
            <Stack
            className="sleeper_content">

                <Box m="auto" overflow="hidden">
                    <Slide direction="left" in={checked}
                    timeout={1500} easing="ease-in-out">

                        <Typography
                        className={`highlight ${openSans.className}`}
                        textAlign="end"
                        component="h1"
                        variant="h4"
                        fontSize="1.75rem"
                        fontWeight={1000}>

                            START THE JOURNEY TO

                        </Typography>
                    </Slide>
                    
                    <Slide direction="left" in={checked}
                    timeout={1500} easing="ease-in-out">

                        <Typography
                        className={`highlight ${openSans.className}`}
                        textAlign="end"
                        component="h1"
                        variant="h4"
                        fontSize="1.75rem"
                        fontWeight={1000}>

                            A BETTER NIGHT'S SLEEP

                        </Typography>

                    </Slide>

                    <Box display="flex" gap="0.5rem" justifyContent="end">
                        <Slide direction="left" in={checked}
                        timeout={1750} easing="ease-in-out">
                            
                            <Typography
                            className={`accent1 ${openSans.className}`}
                            textAlign="end"
                            component="h3"
                            variant="body1"
                            fontSize="1.1rem"
                            lineHeight={1.2}
                            fontWeight={750}>
                                
                                WITH BOARD CERTIFIED <br/> SLEEP SPECIALISTS
                            </Typography>
                            
                        </Slide>

                        <GetStartedButton/>
                    </Box>
                </Box>
                
                

            </Stack>
            

        </Box>
    );
}

export function SleepDisorderTreatment(){
    let isPhone = useMediaQuery("(min-width:750px)");
    const [checked, setCheck] = useState(false);
    const targ = useRef(null);

    const handleIntersect = ([entry]) => {
        if (entry.isIntersecting && entry.target.id === "sleep_disorder"){setCheck(true)}
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
        !isPhone?<Stack
        className="sleep_disorder"
        overflow="hidden"
        ref={targ}
        id="sleep_disorder"
        position="sticky"
        top={-80}
        zIndex={-1}
        bgcolor="#9278b6">

        <Stack
        alignItems="center"
        py={4}>
        
            <Box display="flex" width="60%">
                <Image
                src={woman_sleeper}
                alt="woman sleeping on desk"
                style={{
                width:"100%",
                height:"100%"
                }}/>
            </Box>

            <Stack
            display="flex"
            width="60%"
            alignItems="center"
            pt="1rem"
            overflow="hidden"
            gap={2}>

                
                <Box
                display="flex"
                width="100%"
                justifyContent="space-between">

                    {countries.map((country,i) => {
                        return (
                            <Slide
                            key={i}
                            in={checked}
                            easing="ease-in-out"
                            direction="down"
                            timeout={1200+(i*200)}>
                                    <Box width="8vw">
                                    <Image
                                    style={{width:"100%",height:"100%"}}
                                    src={country}
                                    alt="round flag"/>
                                </Box>
                            </Slide>
                            
                        );
                    })}

                </Box>

                <Fade in={checked} timeout={3000} easing="ease-in">
                <Box>
                <Slide direction="up" in={checked} timeout={1500} easing="ease-in-out">

                    <Stack className="sd_content" gap={0.5}>

                        <Typography
                        className={openSans.className}
                        textAlign="center"
                        color="white" 
                        component="h1"
                        fontWeight={700}
                        variant="h4"
                        fontSize="1rem">
                            SLEEP DISORDER TREATMENT
                        </Typography>

                        <Stack gap={1}>
                            
                            <Typography
                            className={openSans.className}
                            textAlign="center"
                            fontSize="0.75rem"
                            color="white"
                            component="h2"
                            variant="body2">
                                SERVICES AVAILABLE IN THE CARIBBEAN
                            </Typography>
                            
                            <Typography
                            className={openSans.className}
                            fontSize="0.6rem"
                            fontWeight={600}
                            color="black"
                            component="h2"
                            variant="body2">
                                TRINIDAD, JAMAICA, BARBADOS, ST. LUCIA & THE CAYMAN ISLANDS
                            </Typography>

                        </Stack>

                        <Typography
                        className={openSans.className}
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

                </Slide>
                </Box>
                </Fade>

            </Stack>

        </Stack>
            
        <Image
        src={clouds}
        style={{width:"102%",height:"100%",margin:"auto"}}
        alt="woman sleeping on desk"/>
        
      </Stack>
      :
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
    );
}


export function CloudsSection(){
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
            
            <Fade in={checked} timeout={1500} easing="ease-in-out">
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
            </Fade>
            

            <SymptomSlider/>
        </Stack>
    );
}

export function OsdHero(){
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
                width="35%">

                    <Typography
                    className={`highlight ${openSans.className}`}
                    position="absolute"
                    top={0} left={3}
                    fontSize="3vw"
                    component="h1"
                    variant="h4">
                    
                        YOUR
                    
                    </Typography>

                    <Image
                    style={{width:"100%",height:"100%"}}
                    src={logo}
                    alt="osd logo"/>
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

export function Services(){
    let isPhone = useMediaQuery("(min-width:750px)");
    const services = [
        ["Online Consultations",online_consultation],
        ["Sleep Data Interpretation",sleep_data_interpretation],
        ["Treatment Recommendations",treatment_recommendation],
        ["Home Sleep Study Tests",home_sleep_study]
    ];

    return (
        isPhone?<Stack py="4rem" bgcolor="white">
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
          href="https://online-sleep-doctors-patient-referrals.youcanbook.me"
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

        :
        <Stack
        width="80%"
        m="auto"
        gap={2}
        py="2rem">

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

            <Grid2 container spacing={1} rowSpacing={2}>

                {services.map((service,i) => {
                    return (
                        <Grid2 key={i} size={4}
                        
                        sx={{
                            height:"35vw",
                        }}>
                            <Card
                            elevation={2}
                            
                            sx={{
                                p:"4px",
                                display:"flex",
                                alignItems:"end",
                                height:"100%",
                                backgroundSize:"cover",
                                backgroundImage:`url(${service[1].src})`
                            }}>

                                <Typography
                                className={openSans.className}
                                component="h2"
                                variant="caption"
                                color="white"fontWeight={700}
                                fontSize="2.25vw">
                                    {service[0]}
                                </Typography>

                            </Card>
                            

                        </Grid2>
                    );
                })}

                <Grid2 size={4}
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

                <Grid2 size={4}>
                    <Card
                    elevation={2}
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
                        fontSize="2.25vw">
                            Ongoing <br/> Support
                        </Typography>
                    </Card>
                    

                </Grid2>

            </Grid2>

        </Stack>
    );
}