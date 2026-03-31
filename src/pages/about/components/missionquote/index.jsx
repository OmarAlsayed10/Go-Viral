import { Box, Flex, Text } from "@chakra-ui/react";
import Section from "../../../../sharedComponents/section";
import { useTranslation } from "../../../../i18n/TranslationProvider";
const MissionQuote = () => {
  const { t } = useTranslation();
  return (
    <Section bg="accent.800" py={{ base: 16, md: 20 }}>
      <Flex direction="column" alignItems="center" textAlign="center">
        <Box w="48px" h="1.5px" bg="primary.500" mb={8} />
        <Text
          fontFamily="heading"
          fontStyle="italic"
          fontSize={{ base: "xl", md: "2xl" }}
          color="paragraph.500"
          maxW="680px"
          lineHeight="tall"
          mb={4}
        >
          {t("about.missionQuote")}
        </Text>
        <Text
          color="primary.500"
          fontSize="sm"
          fontWeight="500"
          letterSpacing="0.08em"
        >
          {t("about.missionAttr")}
        </Text>
      </Flex>
    </Section>
  );
};
export default MissionQuote;
