"use client";
import { Box } from "@mui/material";
import { BookButton, NavButton } from "./Buttons";
import logo from "../assets/osd_logo.png"
import Image from "next/image";
import { useEffect, useState } from "react";



export default function Navbar(){
    const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position
    const [isHidden, setIsHidden] = useState(false); // Control visibility

    const links = ["About","Services","Sleep Disorders","Contact"];
    
    useEffect(() => {
        const handleScroll = () => {
        // Get the current scroll position
        const currentScrollY = window.scrollY;

        // Check if we're scrolling up or down
        if (currentScrollY > lastScrollY) {
            // Scrolling down - hide the div
            setIsHidden(true);
        } else {
            // Scrolling up - show the div
            setIsHidden(false);
        }

        // Update last scroll position
        setLastScrollY(currentScrollY);
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]); // Re-run effect when lastScrollY changes

    return (
        <Box
        className={isHidden}
        py="1rem"
        width="100%"
        zIndex="1"
        display="flex"
        position="fixed"
        top={0} left={0}
        justifyContent="space-between"
        alignItems="center"
        sx={{
            backgroundImage:"linear-gradient(179deg, white 25%,rgba(255,255,255,0.65) 75%,transparent 100%)",
            backdropFilter:"blur(3px)",
            transition:"400ms",
            transform: isHidden?"translateY(-100%)":"transform: translateY(0%);"
        }}>

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