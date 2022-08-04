import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import button from "../../public/img/button.png"
export const ButtonAppStore = () => {
  return (
    <Box
      sx={{position:"relative",
        width: { sm: "120px", md: "200px" },
        height: { sm: "80px", md: "70px" },
      }}
    >
      <Image
        alt="appStore"
        src={button}
       objectFit="cover"
      />
    </Box>
  );
};
