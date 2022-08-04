import { Box } from "@mui/material";
import React from "react";
import { ButtonAppStore } from "../components/ButtonAppStore";
import Fade from "react-reveal/Fade";

export const DownLoadApp = () => {
  return (
    <Box sx={{ position: "relative", height: "220vh" }}>
      <Box class="downloadapp__bg">
        <Box
          sx={{
            position: "absolute",
            height: { xs: "200vh", md: "100vw" },
          }}
        >
          <img
            className="downloadapp__image__bg"
            src="https://www.sleepiest.com/assets/img/hero/1@1.5x.png"
            alt="background"
            width={"100%"}
            height={"100%"}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            height: { xs: "200vh", md: "100vw" },
          }}
        >
          <img
            className="downloadapp__image__bg"
            src="https://www.sleepiest.com/assets/img/hero/2@1.5x.png"
            alt="background"
            width={"100%"}
            height={"100%"}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            height: { xs: "200vh", md: "100vw" },
          }}
        >
          <img
            className="downloadapp__image__bg"
            src="https://www.sleepiest.com/assets/img/hero/3.png"
            alt="background"
            width={"100%"}
            height={"100%"}
          />
        </Box>
      </Box>
      <Box
        className="downloadapp__text__box"
        sx={{
          position: "absolute",
          display: "flex",
          width: { xs: "100%", sm: "100%" },
          mt: { xs: "20vh", md: "30vh" },
        }}
      >
        <Box sx={{ mx: "auto" }}>
          <Fade bottom>
            <h1>The Sleepy App</h1>
          </Fade>

          <Box sx={{ width: "380px", mt: "80px", mx: "auto" }}>
            <h3 className="opacity--7">
              <Fade bottom>
                Can't sleep? Try bedtime stories, sleep sounds & meditations to
                help you fall asleep fast.{" "}
              </Fade>
            </h3>
            <Box
              className="downloadapp__img__box"
              sx={{ mt: "60px", mx: "auto", display: "flex" }}
            >
              <Fade bottom>
                <ButtonAppStore />
              </Fade>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
