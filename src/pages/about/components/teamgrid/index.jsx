import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Section from "../../../../sharedComponents/section";
import SectionHeading from "../../../../components/sectionheading";
import { useTranslation } from "../../../../i18n/TranslationProvider";
const TEAM = [
  {
    name: "Ahmed Kamal",
    role: "Creative Director",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "Sara Mansour",
    role: "Head of Design",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Omar Tarek",
    role: "Video Lead",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Nour Hassan",
    role: "Strategy Director",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];
function TeamGrid() {
  const { t } = useTranslation();
  return (
    <Section bg="accent.500" py={{ base: 16, md: 24 }}>
      <SectionHeading
        eyebrow={t("about.teamEyebrow")}
        title={t("about.teamTitle")}
        highlight={t("about.teamHighlight")}
        mb={12}
      />
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={8}>
        {TEAM.map((m, i) => (
          <Box
            key={m.name}
            textAlign="center"
            animation={`heroIn 1.2s ${i * 0.12}s cubic-bezier(0.16,1,0.3,1) both`}
          >
            <Box
              position="relative"
              borderRadius="xl"
              overflow="hidden"
              mb={4}
              _hover={{ "& img": { transform: "scale(1.05)" } }}
            >
              <Image
                src={m.img}
                alt={m.name}
                width="100%"
                height="280px"
                objectFit="cover"
                transition="transform 0.4s ease"
              />
              <Box
                position="absolute"
                inset={0}
                bg="linear-gradient(180deg, transparent 50%, rgba(10,15,44,0.7) 100%)"
              />
            </Box>
            <Text
              fontFamily="heading"
              fontWeight="600"
              color="heading.500"
              fontSize="lg"
            >
              {m.name}
            </Text>
            <Text color="primary.500" fontSize="sm" fontWeight="500">
              {m.role}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Section>
  );
}
export default TeamGrid;
