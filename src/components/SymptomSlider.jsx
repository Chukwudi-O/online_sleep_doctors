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
        pb="2rem"
        width="100%"
        display="flex"
        gap="2vw"
        justifyContent="center"
        bgcolor="#f6f8fc">

            <IconButton sx={{height:"fit-content",marginY:"auto",color:"#9278b6"}}>
                <ArrowBack sx={{fontSize:"5vw"}}/>
            </IconButton>

            {symptoms.map((symp,i) => {
                return <Symptom key={i} img_url={symp[0]} symptom={symp[1]} description={symp[2]}/>
            })}

            <IconButton sx={{height:"fit-content",marginY:"auto",color:"#9278b6"}}>
                <ArrowForward sx={{fontSize:"5vw"}}/>
            </IconButton>

        </Box>
    );
}

function Symptom({img_url,symptom,description}){
    return (
        <Stack
        width="13vw"
        gap={1}
        textAlign="center">
            <Box>
                <Image
                src={img_url}
                alt={`${symptom} icon `}
                style={{width:"100%",height:"100%"}}/>
            </Box>
            <Typography component="h5" variant="body2"  fontSize="2vw" className="highlight">{symptom}</Typography>
            <Typography component="p" variant="caption" fontSize="1vw" className="text">{description}</Typography>
        </Stack>
    );
}