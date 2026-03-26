import { Box } from "@chakra-ui/react";
import Section from "../../sharedComponents/section";
import SectionRenderer from "../../templates/SectionRenderer";
import { workItems } from "../../data/portfolio";
import WorkGrid from "./components/workgrid";

function OurWork() {
  return (
    <Box as="main">
      <SectionRenderer>
        <Section bg="accent.500" py={{ base: 12, md: 20 }}>
          <WorkGrid items={workItems} />
        </Section>
      </SectionRenderer>
    </Box>
  );
}

export default OurWork;
