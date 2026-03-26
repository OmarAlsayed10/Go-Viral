import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import Section from "../../../../sharedComponents/section";
import { useTranslation } from "../../../../i18n/TranslationProvider";
import { workItems } from "../../../../data/portfolio";

function StatsBar() {
  const { t } = useTranslation();

  const projectCount = workItems.length;
  const brandCount = new Set(workItems.map((w) => w.i18nKey)).size;
  const designCount = workItems.reduce((sum, w) => sum + (w.designs?.length || 0), 0);

  const stats = [
    { value: `${projectCount}+`, label: t("home.statsProjects") },
    { value: `${brandCount}+`, label: t("home.statsBrands") },
    { value: `${designCount}+`, label: t("home.statsDesigns") },
    { value: "96%", label: t("home.statsRetention") },
  ];
  return (
    <Section bg="accent.500" py={{ base: 10, md: 14 }}>
      <SimpleGrid
        columns={{ base: 2, md: 4 }}
        gap={{ base: 8, md: 4 }}
        textAlign="center"
        animation="heroIn 1.2s 0.1s cubic-bezier(0.16,1,0.3,1) both"
      >
        {stats.map((s) => (
          <Box key={s.label}>
            <Text
              fontFamily="heading"
              fontWeight="700"
              fontSize={{ base: "3xl", md: "4xl" }}
              color="primary.500"
              lineHeight="1"
              mb={2}
            >
              {s.value}
            </Text>
            <Text
              color="paragraph.400"
              fontSize="sm"
              fontWeight="500"
              letterSpacing="0.04em"
            >
              {s.label}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Section>
  );
}
export default StatsBar;
