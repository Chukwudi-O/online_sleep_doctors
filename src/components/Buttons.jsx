import { Button } from "@mui/material"
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
    subsets:["latin"]
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
            margin:"auto",
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
            fontSize:"1rem",
            textAlign:"center",
            p:"4px",
        }}>
            Get Started
        </Button>
    );
}

export function SleepSurveyButton(){
    return (
        <Button
            href="https://onlinesleepdoctors.com/sleep-assessment-questionnaire/"
            className={openSans.className}
            variant="contained"
            sx={{
                width:"fit-content",
                bgcolor:"white",
                color:"#294c71",
                fontWeight:"700",
                my:"auto",py:"0.6vw",
                fontSize:"1.5vw",
                transition:"400ms",
                ":hover":{
                    translate:"0px -4px"
                }
            }}>
                SLEEP ASSESSMENT QUESTIONNAIRE
            </Button>
    );
}