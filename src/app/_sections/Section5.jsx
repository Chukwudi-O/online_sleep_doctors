import { Box } from "@mui/material";
import step1 from "@/assets/survey_step3.png"
import Image from "next/image";

export default function Section5(){

    return (
        <Box
        width="100%"
        height="25vw"
        className="section5">

            <Box width="20vw" ml="auto">
            <Image
            src={step1}
            alt="placeholder"
            style={{width:"100%",height:"100%"}}/>
            </Box>

        </Box>
    );
}