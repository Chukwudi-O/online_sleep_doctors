"use client";

import Image from "next/image";
import {Open_Sans} from "next/font/google";

import section6 from "../assets/home_section6.png";

import home_sleep_study from "../assets/service_home_sleep_study_tests.png";
import ongoing_support from "../assets/service_ongoing_support.png";
import online_consultation from "../assets/service_online_consultations.png";
import treatment_recommendation from "../assets/service_treatment_recommendations.png";
import sleep_data_interpretation from "../assets/service_sleep_data_interpretation.png";



import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import {Box,Button,Card,Grid2,Stack,Typography,useMediaQuery} from "@mui/material";


const openSans = Open_Sans({
  subsets:["latin"]
})


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