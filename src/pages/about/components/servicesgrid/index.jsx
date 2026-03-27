import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import Section from "../../../../sharedComponents/section";
import SectionHeading from "../../../../components/sectionheading";
import { useTranslation } from "../../../../i18n/TranslationProvider";

function ServicesGrid() {
  const { t } = useTranslation();

  const services = [
    {
      icon: "✦",
      title: t("about.svcDesignTitle"),
      desc: t("about.svcDesignDesc"),
    },
    {
      icon: "◈",
      title: t("about.svcVideoTitle"),
      desc: t("about.svcVideoDesc"),
    },
    {
      icon: "⬡",
      title: t("about.svcStrategyTitle"),
      desc: t("about.svcStrategyDesc"),
    },
    { icon: "◻", title: t("about.svcWebTitle"), desc: t("about.svcWebDesc") },
    {
      icon: "◆",
      title: t("about.svcBusinessTitle"),
      desc: t("about.svcBusinessDesc"),
    },
  ];

  return (
    <Section bg="accent.500" py={{ base: 16, md: 24 }}>
      <SectionHeading
        eyebrow={t("about.servicesEyebrow")}
        title={t("about.servicesTitle")}
        highlight={t("about.servicesHighlight")}
        mb={12}
      />
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
        {services.map((s, i) => (
          <Box
            key={s.title}
            bg="rgba(245,243,238,0.04)"
            border="1px solid rgba(245,243,238,0.08)"
            borderRadius="xl"
            p={{ base: 6, md: 8 }}
            transition="all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)"
            _hover={{
              borderColor: "rgba(201,168,76,0.3)",
              transform: "translateY(-4px)",
            }}
            animation={`heroIn 1.2s ${i * 0.15}s cubic-bezier(0.16,1,0.3,1) both`}
          >
            <Text fontSize="2xl" mb={4} color="primary.500">
              {s.icon}
            </Text>
            <Text
              fontFamily="heading"
              fontWeight="700"
              fontSize="xl"
              color="heading.500"
              mb={3}
            >
              {s.title}
            </Text>
            <Text color="paragraph.400" fontSize="sm" lineHeight="tall">
              {s.desc}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Section>
  );
}

export default ServicesGrid;
