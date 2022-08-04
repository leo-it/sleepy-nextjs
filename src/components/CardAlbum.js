import { Box } from "@mui/material";
import React from "react";
import Fade from "react-reveal/Fade";
import Image from "next/image";

export const CardAlbum = ({ image }) => {
  return (
    <Box
      className="rotate--img"
      sx={{
        position:"relative",
        width: { xs: "220px", md: "300px" },
        height: { xs: "120px", md: "208px" },
      }}
    >
      <Fade bottom>
        <Image
          src={image}
          objectFit="cover"
          layout="responsive"
          alt="cardAlbum"
        />
      </Fade>
    </Box>
  );
};
