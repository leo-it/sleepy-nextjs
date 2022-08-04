import { Box } from "@mui/material";
import React from "react";
import Fade from "react-reveal/Fade";

export const Navbar = () => {
  return (
    <>
      <Box
        className="navbar__mobile"
        sx={{
          position: "absolute",
          zIndex: 4,
          display: "flex",
          justifyContent: "center",
          height: "90px",
          my: "auto",
          width: "98vw",
        }}
      >
        <Box sx={{ mr: "60%", my: "auto" }}>
          <Fade>
            <h3> Sleepy</h3>
          </Fade>
        </Box>
        <Box
          className="icon__navbar__container"
          sx={{ my: "auto", width: "40px", height: "40px", display: "flex" }}
        >
          <Box
            className="icon__navbar__lines"
            sx={{ my: "auto", mx: "auto", width: "30px", height: "20px" }}
          >
            <div className="icon__navbar__line__up"></div>
            <div className="icon__navbar__line__bottom"></div>
          </Box>
        </Box>
      </Box>

      <Box
        className="navbar__desktop"
        sx={{
          position: "absolute",
          zIndex: 4,
          display: "flex",
          justifyContent: "center",
          height: "120px",
          my: "auto",
          width: "98vw",
        }}
      >
        <Box sx={{ mr: { md: "30%" }, my: "auto" }}>
          <h3>
            {" "}
            <Fade> Sleepy</Fade>
          </h3>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Box sx={{ mr: { md: "50px" }, my: "auto" }}>
            <h4>
              <Fade>Home</Fade>
            </h4>
          </Box>
          <Box sx={{ mr: { md: "50px" }, my: "auto" }}>
            <h4 className="inactive">
              {" "}
              <Fade>Blog</Fade>
            </h4>
          </Box>
          <Box sx={{ mr: "50px", my: "auto", width: "140px" }}>
            <h4 className="inactive">
              <Fade>Top articles</Fade>
            </h4>
          </Box>
          <Box sx={{ mr: { md: "50px" }, my: "auto" }}>
            <h4 className="inactive">
              <Fade>Careers</Fade>
            </h4>
          </Box>
        </Box>
      </Box>
    </>
  );
};
