import React from "react";
import { Box, Typography } from "@mui/material";
import Fade from "react-reveal/Fade";

export const CardBenefit = ({ image, title, text }) => {
  return (
    <Box sx={{ maxWidth: { xs: "240px", md: "290px" } }}>
      <Box
        sx={{
          width: { xs: "70px", md: "95px" },
          height: { xs: "70px", md: "95px" },
          mb: "40px",
        }}
      >
        <Fade bottom>
          <img src={image} width={"100%"} height={"100%"} alt="benefits" />
        </Fade>
      </Box>
      <Box sx={{ mb: "30px" }}>
        <Fade bottom>
          <h4>{title}</h4>
        </Fade>
      </Box>
      <Box>
          <h5 className="opacity--7">
        <Fade bottom>
            
            {text}
        </Fade>
            </h5>
      </Box>
    </Box>
  );
};
