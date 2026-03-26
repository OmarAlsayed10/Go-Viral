import { Box } from "@chakra-ui/react";
import AboutHero from "./components/abouthero";
import MissionQuote from "./components/missionquote";
import ServicesGrid from "./components/servicesgrid";
import AboutCTA from "./components/aboutcta";
import AboutLead from "./components/aboutlead";

function About() {
  return (
    <Box as="main">
      <AboutHero />
      <AboutLead />
      <MissionQuote />
      <ServicesGrid />
      <AboutCTA />
    </Box>
  );
}

export default About;
