import { Albums } from "../src/modules/Albums";
import { BedtimeStories } from "../src/modules/BedtimeStories";
import { Benefits } from "../src/modules/Benefits";
import { Box } from "@mui/material";
import { DownLoadApp } from "../src/modules/DownLoadApp";
import { Footer } from "../src/modules/Footer";
import Head from "next/head";
import { Navbar } from "../src/components/Navbar";
import { Scroll } from "../src/components/scroll";
import { Tracking } from "../src/modules/Tracking";
import { UsersSay } from "../src/modules/UsersSay";
import phoneOne from "../public/img/phoneOne.webp";

export default function Home() {
  return (
    <>
      <Head>
        <title>sleepy</title>
        <meta
          property="og:title"
          content="sleepy is a page for people who do not sleep normally and provides modern and technological solutions"
          key="sleepy"
        />
        <meta property="author" content="Leonardo" />{" "}
        <meta property="keywords" content="sleepy, good, relax" />
      </Head>
      <Scroll />
      <Navbar />
      <DownLoadApp />
      <Benefits />
      <UsersSay />
      <Albums />
      <Box sx={{ height: "135vh" }}>
        <BedtimeStories
          title="Sleep with bedtime stories"
          description="Our selection of bedtime stories range from classics such as;
            ‘Cinderella’ and ‘Sherlock Holmes’ to Sleepiest Originals such as
            ‘The Adventures of Koko', 'The Wise Elephant' and 'The Jupiter
            Twins'."
          img={phoneOne}
        />
      </Box>
      <Box className="bg__beadtimestories--dark" sx={{ height: "135vh" }}>
        <BedtimeStories
          title="Relax with sleep sounds"
          description="Our soothing sleep sounds range from those found in nature, with titles such as 'Storms Rolling In' and 'Gentle Stream', to originally crafted soundscapes like 'Rain On Route 66' as well as relaxing sleep music such as the wildly popular 'Waves Of Atlantis.'"
          img={phoneOne}
        />
      </Box>
      <Box sx={{ height: "135vh" }}>
        <BedtimeStories
          title="Find calm with sleep meditations"
          description="Sleep meditations are one of the most exciting new areas of Sleepiest; with titles such as 'Getting Back to Sleep' and 'Calm a Racing Mind', as well as meditation story hybrids such as 'The Magical West Highland Line' which the community has fallen asleep to over 1 million times!"
          img={phoneOne}
        />
      </Box>
      <Box sx={{ height: { xs: "155vh", md: "135vh" } }}>
        <Tracking />
      </Box>
      <Footer />
    </>
  );
}
