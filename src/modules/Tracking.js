import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import Fade from "react-reveal/Fade";
import track1 from "../../public/img/track1.webp"
import track2 from "../../public/img/track2.webp"
import track3 from "../../public/img/track3.webp"
import track4 from "../../public/img/track4.webp"
import track5 from "../../public/img/track5.webp"


export const Tracking = () => {
  return (
    <Box
      sx={{
        position: "relative",
        mt: { xs: "250px", md: "100px" },
        display: { sm: "flex" },
        mx: "auto",
        justifyContent: "center",
      }}
    >
      <Box sx={{ maxWidth: "70%", mx: "auto" }}>
        <Box
          sx={{
            display: { xs: "flex" },
            mx: "auto",
            justifyContent: "center",
            mb: { xs: "12px", md: "40px" },
          }}
        >
          <Fade bottom>
            <h2>Sleep tracking</h2>
          </Fade>
        </Box>
        <Box>
          <Box
            sx={{
              display: { sm: "flex" },
              mx: "auto",
              justifyContent: "center",
            }}
          >
            <h5 className="opacity--7 text__center">
              <Fade bottom>
                New from the sleep lap our sleep analysis will give you insights
                into what's happening within your sleep cycle, helping to
                identify how much time you spend in light, rem and deep sleep
                throughout the night. Celebrate your Sleepiest success with
                weekly sleep reports.{" "}
              </Fade>
            </h5>
          </Box>
        </Box>
        <Box sx={{ maxWidth: "720px", mx: "auto", display: { md: "flex" } }}>
          <Box
            sx={{
              mx: "auto",
              mt: 4,
              width: { xs: "280px", md: "320px" },
              height: { xs: "390px", md: "445px" },
            }}
          >
            {" "}
            <Image
              src={track1}
              
              
              alt="tracking"
            />
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "block" },
              pt: { md: 10 },
              mx: 1,
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                my: { xs: 1, md: 2 },
                mx: 1,
                width: { xs: "135px", md: "160px" },
                height: { xs: "178px", md: "212px" },
              }}
            >
              <Image
                src={track2}
                
                
                alt="tracking"
              />
            </Box>
            <Box
              sx={{
                my: { xs: 1, md: 2 },
                mx: 1,
                width: { xs: "135px", md: "160px" },
                height: { xs: "178px", md: "212px" },
              }}
            >
              <Image
                src={track3}
                
                
                alt="tracking"
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "block" },
            }}
          >
            <Box
              sx={{
                my: { xs: 1, md: 2 },
                mx: 1,
                width: { xs: "135px", md: "160px" },
                height: { xs: "178px", md: "212px" },
              }}
            >
              <Image
                src={track4}
                
                
                alt="tracking"
              />
            </Box>
            <Box
              sx={{
                my: { xs: 1, md: 2 },
                mx: 1,
                width: { xs: "135px", md: "160px" },
                height: { xs: "178px", md: "212px" },
              }}
            >
              <Image
                src={track5}
                
                
                alt="tracking"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
