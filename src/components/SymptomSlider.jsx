import { Box, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import insomnia from "../assets/insomnia.png";
import sleep_apnea from "../assets/sleep_apnea.png";
import narcolepsy from "../assets/narcolepsy.png";
import restless_leg from "../assets/restless_leg.png";
import bruxism from "../assets/bruxism.png";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export default function SymptomSlider(){
    const symptoms = [
        [insomnia,"Insomnia","can't fall asleep"],
        [sleep_apnea,"Sleep Apnea","snoring and airway obstructions"],
        [narcolepsy,"Narcolepsy","can't stop falling asleep"],
        [restless_leg,"Restless Leg","can't stay still at night"],
        [bruxism,"Bruxism","grinding teeth during sleep"],
    ];

    return(
        <Box
        pb="3rem"
        width="100%"
        display="flex"
        gap={1}
        justifyContent="center"
        bgcolor="#f6f8fc">

            <IconButton sx={{height:"fit-content",marginY:"auto",color:"#9278b6"}}>
                <ArrowBack/>
            </IconButton>

            {symptoms.map((symp,i) => {
                return <Symptom key={i} img_url={symp[0]} symptom={symp[1]} description={symp[2]}/>
            })}

            <IconButton sx={{height:"fit-content",marginY:"auto",color:"#9278b6"}}>
                <ArrowForward/>
            </IconButton>

        </Box>
    );
}

function Symptom({img_url,symptom,description}){
    return (
        <Stack
        width="150px"
        textAlign="center">
            <Box
            margin="auto"
            width="100px">
                <Image
                src={img_url}
                alt={`${symptom} icon `}
                style={{width:"100px",height:"100px",scale:0.75}}/>
            </Box>
            <Typography component="h5" variant="body2" className="highlight">{symptom}</Typography>
            <Typography component="p" variant="caption" fontSize="0.5rem" className="text">{description}</Typography>
        </Stack>
    );
}