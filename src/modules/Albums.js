import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CardAlbum } from "../components/CardAlbum";
import CarouselAlbum from "../components/CarouselAlbum";
import Fade from "react-reveal/Fade";
import cardOne from "../../public/img/cardOne.webp"
 import cardTwo from "../../public/img/cardTwo.webp"
import cardThree from "../../public/img/cardThree.webp"
import cardFour from "../../public/img/cardFour.webp"


export const Albums = () => {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    window.screen.availWidth < 800 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  return (
    <Box>
      <Box
        sx={{
          my: { xs: "60px", md: "100px" },
          maxWidth: { xs: "300px", md: "600px" },
          display: "flex",
          justifyContent: "center",
          mx: "auto",
        }}
      >
        <Fade bottom>
          <h2>
            Over 250+ sleep sounds, stories & meditations to help you{" "}
            <span className="albums__title--blue">sleep better </span>{" "}
          </h2>
        </Fade>
      </Box>
      <Box>
        <CarouselAlbum perView={isMobile ? 2 : 4}>
          <div className="keen-slider__slide ">
            <CardAlbum image={cardOne} />
          </div>
          <div className="keen-slider__slide ">
            <CardAlbum image={cardTwo} />
          </div>

          <div className="keen-slider__slide ">
            <CardAlbum image={cardThree} />
          </div>
          <div className="keen-slider__slide ">
            <CardAlbum image={cardOne} />
          </div>
          <div className="keen-slider__slide ">
            <CardAlbum image={cardFour} />
          </div>
        </CarouselAlbum>
        <Box sx={{ mt: 5 }}></Box>
        <CarouselAlbum perView={isMobile ? 2 : 4}>
          <div className="keen-slider__slide ">
            <CardAlbum image={cardThree} />
          </div>

          <div className="keen-slider__slide ">
            <CardAlbum image={cardFour} />
          </div>
          <div className="keen-slider__slide ">
            <CardAlbum image={cardOne} />
          </div>
          <div className="keen-slider__slide ">
            <CardAlbum image={cardTwo} />
          </div>

          <div className="keen-slider__slide ">
            <CardAlbum image={cardOne} />
          </div>
        </CarouselAlbum>
      </Box>
    </Box>
  );
};
