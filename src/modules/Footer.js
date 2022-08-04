import { Box, Button } from "@mui/material";
import React from "react";
import Fade from "react-reveal/Fade";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Footer = () => {
  return (
    <Box sx={{ widht: "98vw" }}>
      <Box sx={{ display: { md: "flex" } }}>
        <Box sx={{ ml: "10%", mr: "30%", my: "auto" }}>
          <Fade>
            <button className="btn">
              <h3> Sleepy</h3>
            </button>
          </Fade>
        </Box>
        <Box sx={{ display: { md: "flex" } }}>
          <Box sx={{ mr: { md: "50px" }, my: "auto", width: "150px" }}>
            <button className="btn">
              <h5> Privacy Policy </h5>{" "}
            </button>
          </Box>
          <Box sx={{ mr: { md: "50px" }, my: "auto" }}>
            <button className="btn">
              <h5>Terms</h5>
            </button>
          </Box>
          <Box sx={{ mr: { md: "50px" }, my: "auto", width: "150px" }}>
            <button className="btn">
              <h5>Contact us</h5>
            </button>
          </Box>
          <Box sx={{ mr: { md: "50px" }, my: "auto" }}>
            <button className="btn">
              <h5>Careers</h5>
            </button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: { md: "flex" }, my: { md: "40px" } }}>
        <Box sx={{ display: "flex", mr: { md: "60%" }, ml: { md: "10%" } }}>
          <Box sx={{ width: "30px", height: "30px", mr: { md: "20px" } }}>
            <FacebookIcon />
          </Box>
          <Box sx={{ width: "30px", height: "30px", mr: { md: "20px" } }}>
            <TwitterIcon />
          </Box>
          <Box sx={{ width: "30px", height: "30px", mr: { md: "20px" } }}>
            <InstagramIcon />
          </Box>
          <Box sx={{ width: "30px", height: "30px", mr: { md: "20px" } }}>
            <LinkedInIcon />
          </Box>
        </Box>
        <Box sx={{ width: "550px" }}><h5>© 2020 Happiest Limited. </h5></Box>
      </Box>
    </Box>
  );
};
