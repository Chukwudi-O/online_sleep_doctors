import { Button } from "@mui/material"
import Link from "next/link"


export function NavButton({link}){
    return (
        <Link href={"/"/*link.replaceAll(" ","-").toLowerCase()*/}>
            <Button sx={{color:"#363636",":hover":{bgcolor:"rgba(196,120,182,0.1)"}}}>{link}</Button>
        </Link>
    );
}

export function BookButton(){
    return (
        <Link target="_blank" href="https://online-sleep-doctors-patient-referrals.youcanbook.me">
            <Button variant="contained" sx={{
                bgcolor:"#e8b7bf",
            }}>Book A Specialist</Button>
        </Link>
    );
}

export function GetStartedButton(){
    return (
        <Button
        variant="contained"
        sx={{
            bgcolor:"#9278b6",
            width:"200px",
            fontSize:"1rem"
        }}>
            <b>Get Started</b>
        </Button>
    );
}