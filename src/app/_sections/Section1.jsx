"use client";

import { GetStartedButton } from "@/components/Buttons";
import { Box, Slide, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import localFont from "next/font/local";

const openSans = localFont({src: "../../fonts/OpenSans.ttf"});
  
  export default function Section1(){
      const [checked, setChecked] = useState(false);
      useEffect(() => {
          setChecked(true);
      },[]);
  
      return (
          <Box
          className="sleeper">
              
              <Stack
              className="sleeper_content">
  
                  <Box m="auto" overflow="hidden">
                      <Slide direction="left" in={checked}
                      timeout={1500} easing="ease-in-out">
  
                          <Typography
                          className={`highlight ${openSans.className}`}
                          textAlign="end"
                          component="h1"
                          variant="h4"
                          fontSize="1.75rem"
                          fontWeight={1000}>
  
                              START THE JOURNEY TO
  
                          </Typography>
                      </Slide>
                      
                      <Slide direction="left" in={checked}
                      timeout={1500} easing="ease-in-out">
  
                          <Typography
                          className={`highlight ${openSans.className}`}
                          textAlign="end"
                          component="h1"
                          variant="h4"
                          fontSize="1.75rem"
                          fontWeight={1000}>
  
                              A BETTER NIGHT'S SLEEP
  
                          </Typography>
  
                      </Slide>
  
                      <Box display="flex" gap="0.5rem" justifyContent="end">
                          <Slide direction="left" in={checked}
                          timeout={1750} easing="ease-in-out">
                              
                              <Typography
                              className={`accent1 ${openSans.className}`}
                              textAlign="end"
                              component="h3"
                              variant="body1"
                              fontSize="1.1rem"
                              lineHeight={1.2}
                              fontWeight={750}>
                                  
                                  WITH BOARD CERTIFIED <br/> SLEEP SPECIALISTS
                              </Typography>
                              
                          </Slide>
  
                          <GetStartedButton/>
                      </Box>
                  </Box>
                  
                  
  
              </Stack>
              
  
          </Box>
      );
  }