import { Box } from "@mui/material";
import React from "react";
import { ButtonTryForFree } from "../components/ButtonTryForFree";
import { CardBenefit } from "../components/CardBenefit";
import Fade from "react-reveal/Fade";

export const Benefits = () => {
  return (
    <Box sx={{ position: "relative" ,width: "90vw" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mx: "auto",
          width: "98vw",
        }}
      >
        <Box sx={{ display: { xs: "block", md: "flex" } }}>
          <Box sx={{ mb: "100px", mx: { xs: "50px" } }}>
            <CardBenefit
              image="https://www.sleepiest.com/wp-content/uploads/2020/09/190x190_1@2x.png"
              title="Sleep better,wake happier"
              text="Explore sleep sounds, stories and meditations, to help you sleep better and wake up happier."
            />
          </Box>
          <Box sx={{ mb: "100px", mx: { xs: "50px" } }}>
            <CardBenefit
              image="https://www.sleepiest.com/wp-content/uploads/2020/09/190x190_2@2x.png"
              title="Track your progress"
              text="Just 5 days of Sleepiest can help you sleep an average of 32 minutes longer each night."
            />{" "}
          </Box>
          <Box sx={{ mb: "50px", mx: { xs: "50px" } }}>
            <CardBenefit
              image="https://www.sleepiest.com/wp-content/uploads/2020/09/190x190_3@2x.png"
              title="Join over 2 million"
              text="Join over 2 million people around the world improving their health & happiness with Sleepiest."
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems:"center",
          mx: "auto",
          width: "98vw", mb:"10px"
        }}
      >
        <Fade bottom>

        <ButtonTryForFree />
        </Fade>

      </Box>
    </Box>
  );
};
