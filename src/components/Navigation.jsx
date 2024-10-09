"use client";
import { Box, Button, Drawer, IconButton, Stack, useMediaQuery } from "@mui/material";
import { BookButton, NavButton } from "./Buttons";
import logo from "../assets/osd_logo.png"
import Image from "next/image";
import { useEffect, useState } from "react";
import { MenuRounded } from "@mui/icons-material";


const links = ["About","Services","Sleep Disorders","Contact"];

export function Navbar(){
    const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position
    const [isHidden, setIsHidden] = useState(false); // Control visibility
    let isPhone = useMediaQuery("(min-width:750px)");
    
    
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
            display={isPhone?"flex":"none"}
            mr="1rem"
            gap={4}
            >

                <Box
                display="flex"
                alignItems="center"
                gap={1}>
                    {links.map((link,i) =>  <NavButton link={link} key={i}/>)}
                </Box>

                <BookButton isMobile={false}/>

            </Box>

            <MobileNavbar/>

        </Box>
    );
}

export function MobileNavbar(){
    let [vis, setVis] = useState("visible");
    let [isOpen, toggleSidebar] = useState(false);
    let isPhone = useMediaQuery("(min-width:750px)");
    

    useEffect(() => {
        if (!isPhone){
            setVis("visible");
        }else{
            setVis("hidden");
        }
    },[isPhone]);



    return (
        <Stack
        sx={{
            visibility:vis,
            position:"absolute",
            right:"4vw",
            top:"10%",
            zIndex:"2",
            gap:"2rem",
        }}
        >
            <IconButton
            onClick={()=>toggleSidebar(!isOpen)}
            sx={{zIndex: "1"}}>
                
                <MenuRounded sx={{transition:"200ms"}} htmlColor="#9278b6" fontSize='large' />
                
            </IconButton>

            <Drawer
            anchor="top"
            open={isOpen}
            onClose={() => toggleSidebar(false)}>

                <Image
                src={logo}
                alt="Online Sleep Doctors"
                width={200}
                style={{margin:"auto", marginTop:"0.5rem"}}/>

                {links.map((item,i) => {
                return (
                        <Button
                        key={i}
                        name={item}
                        onClick={() => toggleSidebar(false)}
                        sx={{
                            color: "#294c71",
                            width:"100vw",
                            zIndex:"1",
                            ":hover":{
                                backgroundColor: "transparent",
                                color:"white",
                            },

                            "::before":{
                                content:'""',
                                position: "absolute",
                                bottom:"0%",
                                transition:"300ms",
                                width: "0%",
                                height: "100%",
                                backgroundColor: "#9278b6",
                                zIndex:"-1"
                            },
                            ":hover::before":{
                                width: "100%",
                            },
                        }}>
        
                            {item}
        
                        </Button>
                )})}

                <BookButton isMobile={true}/>

            </Drawer>

        </Stack>
    );
}