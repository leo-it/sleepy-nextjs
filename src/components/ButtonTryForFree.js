import React from "react";
import { Box } from "@mui/material";

export const ButtonTryForFree = () => {
  return (
    <Box id="try-free"
      className="text__center item--center buttontryforfree"
      sx={{
        borderRadius: "8px",
        bgcolor: "#f6583e",
        width: { xs: "137px", md: "178px" },
        height: { xs: "47px", md: "68px" },
      }}
    >
      <p>Try For Free</p>
    </Box>
  );
};
