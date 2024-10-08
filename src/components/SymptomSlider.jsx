import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import insomnia from "../assets/insomnia";

export default function SymptomSlider(){
    return(
        <Box
        width="100%"
        display="flex"
        justifyContent="center"
        bgcolor="#f6f8fc">

        </Box>
    );
}

function Symptom({img_url,symptom,description}){
    return (
        <Stack
        width="100px">
            <Image
            src={img_url}
            alt={`${symptom} icon `}/>
            <Typography component="h5" variant="button" className="highlight">{symptom}</Typography>
            <Typography component="p" variant="caption" className="text">{description}</Typography>
        </Stack>
    );
}