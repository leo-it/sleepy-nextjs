import { Box, Button } from "@mui/material";
import React from "react";
import Fade from "react-reveal/Fade";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Footer = () => {
  return (
    <Box sx={{ widht: "100vw" }}>
      <Box sx={{ display: { md: "flex" }, ml: { xs: "5%", md: 0 } }}>
        <Box
          sx={{ ml: { md: "10%" }, mr: "30%", my: { xs: "15px", md: "auto" } }}
        >
          <Fade>
            <button className="btn">
              <h3> Sleepy</h3>
            </button>
          </Fade>
        </Box>
        <Box sx={{ display: { md: "flex" } }}>
          <Box
            sx={{
              mr: { md: "50px" },
              my: { xs: "15px", md: "auto" },
              width: "150px",
            }}
          >
            <Fade>
              {" "}
              <button className="btn">
                <h5> Privacy Policy </h5>{" "}
              </button>
            </Fade>
          </Box>
          <Box sx={{ mr: { md: "50px" }, my: { xs: "15px", md: "auto" } }}>
            <Fade>
              {" "}
              <button className="btn">
                <h5>Terms</h5>
              </button>
            </Fade>
          </Box>
          <Box
            sx={{
              mr: { md: "50px" },
              my: { xs: "15px", md: "auto" },
              width: "150px",
            }}
          >
            <Fade>
              {" "}
              <button className="btn">
                <h5>Contact us</h5>
              </button>
            </Fade>
          </Box>
          <Box sx={{ mr: { md: "50px" }, my: { xs: "15px", md: "auto" } }}>
            <Fade>
              <button className="btn">
                <h5>Careers</h5>
              </button>
            </Fade>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: { md: "flex" },
          my: { md: "40px" },
          ml: { xs: "5%", md: 0 },
        }}
      >
        <Box sx={{ display: "flex", mr: { md: "50%" }, ml: { md: "10%" } }}>
          <Box
            sx={{
              width: "30px",
              height: "30px",
              mr: { md: "20px" },
              mr: { xs: "5%", md: 4 },
            }}
          >
            <Fade>
              {" "}
              <FacebookIcon />
            </Fade>
          </Box>
          <Box
            sx={{
              width: "30px",
              height: "30px",
              mr: { md: "20px" },
              mr: { xs: "5%", md: 4 },
            }}
          >
            <Fade>
              {" "}
              <TwitterIcon />
            </Fade>
          </Box>
          <Box
            sx={{
              width: "30px",
              height: "30px",
              mr: { md: "20px" },
              mr: { xs: "5%", md: 4 },
            }}
          >
            <Fade>
              {" "}
              <InstagramIcon />
            </Fade>
          </Box>
          <Box
            sx={{
              width: "30px",
              height: "30px",
              mr: { md: "20px" },
              mr: { xs: "5%", md: 0 },
            }}
          >
            <Fade>
              {" "}
              <LinkedInIcon />
            </Fade>
          </Box>
        </Box>
        <Box sx={{ width: { md: "550px" }, mt: { xs: "20px", md: 0 } }}>
          <Fade>
            {" "}
            <h5>© 2020 Happiest Limited. </h5>
          </Fade>
        </Box>
      </Box>
    </Box>
  );
};
