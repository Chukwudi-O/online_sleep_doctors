import { Button } from "@mui/material"
import Link from "next/link"


export function NavButton({link}){
    return (
        <Link href={"/"/*link.replaceAll(" ","-").toLowerCase()*/}>
            <Button sx={{height:"50%",fontSize:"1.2vw",color:"#363636",":hover":{bgcolor:"rgba(196,120,182,0.1)"}}}>{link}</Button>
        </Link>
    );
}

export function BookButton({isMobile}){
    return (
        <Link
        target="_blank"
        style={{
            width:isMobile?"100%":"fit-content",
            margin:"auto",
        }}
        href="https://online-sleep-doctors-patient-referrals.youcanbook.me">
            
            <Button variant="contained" sx={{
                bgcolor:"#e8b7bf",
                width:"100%",
                fontSize:!isMobile?"1.15vw":"1em"
            }}>
                Book A Specialist
            </Button>

        </Link>
    );
}

export function GetStartedButton(){
    return (
        <Button
        variant="contained"
        sx={{
            bgcolor:"#9278b6",
            width:"15vw",
            fontSize:"1.5vw"
        }}>
            <b>Get Started</b>
        </Button>
    );
}