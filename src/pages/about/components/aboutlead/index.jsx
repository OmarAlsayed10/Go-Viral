import { Text } from "@chakra-ui/react";
import Section from "../../../../sharedComponents/section";
import { useTranslation } from "../../../../i18n/TranslationProvider";

function AboutLead() {
  const { t, locale } = useTranslation();

  return (
    <Section bg="accent.500">
      <Text
        color="paragraph.500"
        fontSize={{ base: "md", md: "lg" }}
        lineHeight="tall"
        maxW="80%"
        mx="auto"
        fontFamily="body"
        whiteSpace="pre-line"
        textAlign={locale === "ar" ? "right" : "left"}
      >
        {t("about.lead")}
      </Text>
    </Section>
  );
}

export default AboutLead;
