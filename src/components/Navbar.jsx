import { Box } from "@mui/material";
import { BookButton, NavButton } from "./Buttons";
import logo from "../assets/osd_logo.png"
import Image from "next/image";

export default function Navbar(){

    const links = ["About","Services","Sleep Disorders","Contact"];

    return (
        <Box
        py="1rem"
        width="100%"
        zIndex="1"
        display="flex"
        position="fixed"
        top={0} left={0}
        justifyContent="space-between"
        alignItems="center">

            <Image
            src={logo}
            width={125}
            alt="osd logo"
            style={{
                marginLeft:"2rem"
            }}/>

            <Box
            display="flex"
            mr="1rem"
            gap={4}>

                <Box
                display="flex"
                gap={1}>
                    {links.map((link,i) =>  <NavButton link={link} key={i}/>)}
                </Box>

                <BookButton/>

            </Box>

        </Box>
    );
}