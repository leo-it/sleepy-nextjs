import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { CardUsersSay } from "../components/CardUsersSay";
import { Carousel } from "../components/Carousel";
import imageOne from "../../public/img/users/user2.webp"

export const UsersSay = () => {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    window.screen.availWidth < 800 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  return (
    <Box
      sx={{
        mx: "auto",
        width: {xs:"100%",md:"1154px"},
        my: { xs: 15, md: 25 },
      }}
    >
      <Carousel>
        <Box sx={{ display: "flex" }} className="keen-slider__slide ">
          {" "}
          <CardUsersSay
            profilePicture={imageOne}
            fullname={"Carla "}
            country={"UK"}
            stars={[1, 1, 1, 1]}
            description="I downloaded this app and was like “is it really going to help me fall asleep faster?” And it did. I was asleep within 5 minutes!"
          />{" "}
          {isMobile ? (
            ""
          ) : (
            <>
              <CardUsersSay
                profilePicture={imageOne}
                fullname={"Dalma "}
                country={"UK"}
                stars={[1, 1, 1, 1]}
                description="I downloaded this app and was like “is it really going to help me fall asleep faster?” And it did. I was asleep within 5 minutes!"
              />

              <CardUsersSay
                profilePicture={imageOne}
                fullname={"Juana "}
                country={"UK"}
                stars={[1, 1, 1, 1]}
                description="I downloaded this app and was like “is it really going to help me fall asleep faster?” And it did. I was asleep within 5 minutes!"
              />
            </>
          )}
        </Box>
        <Box sx={{ display: "flex" }} className="keen-slider__slide ">
          <CardUsersSay
            profilePicture={imageOne}
            fullname={"Norma"}
            country={"UK"}
            stars={[1, 1, 1, 1]}
            description="I downloaded this app and was like “is it really going to help me fall asleep faster?” And it did. I was asleep within 5 minutes!"
          />
          {isMobile ? (
            ""
          ) : (
            <>
              <CardUsersSay
                profilePicture={imageOne}
                fullname={"Carla "}
                country={"UK"}
                stars={[1, 1, 1, 1]}
                description="I downloaded this app and was like “is it really going to help me fall asleep faster?” And it did. I was asleep within 5 minutes!"
              />
              <CardUsersSay
                profilePicture={imageOne}
                fullname={"Carla "}
                country={"UK"}
                stars={[1, 1, 1, 1]}
                description="I downloaded this app and was like “is it really going to help me fall asleep faster?” And it did. I was asleep within 5 minutes!"
              />
            </>
          )}
        </Box>{" "}
        <Box sx={{ display: "flex" }} className="keen-slider__slide ">
          <CardUsersSay
            profilePicture={imageOne}
            fullname={"Carla "}
            country={"UK"}
            stars={[1, 1, 1, 1]}
            description="I downloaded this app and was like “is it really going to help me fall asleep faster?” And it did. I was asleep within 5 minutes!"
          />
          {isMobile ? (
            ""
          ) : (
            <>
              <CardUsersSay
                profilePicture={imageOne}
                fullname={"Carla "}
                country={"UK"}
                stars={[1, 1, 1, 1]}
                description="I downloaded this app and was like “is it really going to help me fall asleep faster?” And it did. I was asleep within 5 minutes!"
              />

              <CardUsersSay
                profilePicture={imageOne}
                fullname={"Carla "}
                country={"UK"}
                stars={[1, 1, 1, 1]}
                description="I downloaded this app and was like “is it really going to help me fall asleep faster?” And it did. I was asleep within 5 minutes!"
              />
            </>
          )}
        </Box>
      </Carousel>
    </Box>
  );
};
