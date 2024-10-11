import { Button } from "@mui/material"
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
    subsets:["latin"],
    weight:["400","700"]
  })


export function NavButton({link}){
    return (
            <Button
            className={openSans.className}
            href={"/"/*link.replaceAll(" ","-").toLowerCase()*/}
            sx={{
                height:"50%",
                fontSize:"1.2vw",
                color:"#363636",
                padding:"1rem",
                ":hover":{bgcolor:"rgba(196,120,182,0.1)"}
            }}>
                {link}
            </Button>
    );
}

export function BookButton({isMobile}){
    return (
        <Button
        className={`bold ${openSans.className}`}
        target="_blank"
        href="https://online-sleep-doctors-patient-referrals.youcanbook.me"
        variant="contained" sx={{
            bgcolor:"#e8b7bf",
            width:isMobile?"100%":"fit-content",
            fontSize:!isMobile?"1.15vw":"1em"
        }}>
            Book A Specialist
        </Button>
    );
}

export function GetStartedButton(){
    return (
        <Button
        className={`bold ${openSans.className}`}
        variant="contained"
        href="https://online-sleep-doctors-patient-referrals.youcanbook.me"
        sx={{
            bgcolor:"#9278b6",
            fontSize:"1.5vw",
            textAlign:"center",
            p:"1vw",
        }}>
            Get Started
        </Button>
    );
}