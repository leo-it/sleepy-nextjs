import React from "react";
import { Box } from "@mui/material";
import { ButtonTryForFree } from "../components/ButtonTryForFree";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";
import Image from "next/image";
import phoneIconOne from "../../public/img/phoneIconOne.webp"
import phoneIconTwo from "../../public/img/phoneIconTwo.webp"

export const BedtimeStories = ({ title, description, img }) => {
  return (
    <Box
      sx={{
        py: { xs: "80px", md: "150px" },
        display: { sm: "flex" },
        mx: "auto",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          mx: "auto",
          justifyContent: "center",
          maxWidth: { xs: "320px", md: "300px" },
        }}
      >
        <Box sx={{ mb: { xs: 3, md: 6 } }}>
          <Fade bottom>
            <h2>Sleep with bedtime stories</h2>
          </Fade>
        </Box>

        <h5 className="opacity--7">
          <Fade bottom>{description}</Fade>
        </h5>
        <Box
          sx={{ my: 5, mx: "auto", justifyContent: "center", display: "flex" }}
        >
          <Fade bottom>
            <ButtonTryForFree />
          </Fade>
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "320px", md: "410px" },
          display: { sm: "flex" },
          mx: "auto",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            mx: "auto",
            width: { xs: "202px", sm: "215px" },
            height: { xs: "429", sm: "456px" },
          }}
        >
          <Fade bottom>
            <Image
              src={img}
          
              alt="bead time stories"
            />
          </Fade>

          <Box
            sx={{
              width: { xs: "77px", sm: "100px" },
              height: { xs: "77px", sm: "100px" },
              position: "absolute",
              top: "20%",
              left: { xs: "-40%", sm: "-70%" },
            }}
          >
            <Roll right>
              <Image
                src={
                  phoneIconOne                }
                alt="bead time stories"
                width={"100%"}
                height={"100%"}
              />
            </Roll>
          </Box>
          <Box
            sx={{
              width: { xs: "77px", sm: "100px" },
              height: { xs: "77px", sm: "100px" },
              position: "absolute",
              top: "70%",
              left: "100%",
            }}
          >
            <Roll left>
              <Image
                src={phoneIconTwo}
                width={"100%"}
                height={"100%"}
                alt="bead time stories"
              />
            </Roll>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
