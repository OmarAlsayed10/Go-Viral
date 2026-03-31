import { Box, Flex, Text } from "@chakra-ui/react";
import Section from "../../../../sharedComponents/section";
import SectionHeading from "../../../../components/sectionheading";
import { useTranslation } from "../../../../i18n/TranslationProvider";

const CLIENTS = ["Villa 53", "Mazagangy", "Dr Smile Clinic", "Smash It"];
const REPEATED_CLIENTS = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];

const MarqueeTrack = () => {
  return (
    <Flex gap={{ base: 8, md: 12 }} alignItems="center" px={{ base: 4, md: 6 }}>
      {REPEATED_CLIENTS.map((name, i) => (
        <Text
          key={`${name}-${i}`}
          fontFamily="heading"
          fontWeight="700"
          fontSize={{ base: "xl", md: "2xl" }}
          color="paragraph.300"
          whiteSpace="nowrap"
          textTransform="uppercase"
          letterSpacing="0.08em"
          transition="color 0.3s"
          _hover={{ color: "primary.500" }}
          cursor="default"
        >
          {name}
        </Text>
      ))}
    </Flex>
  );
};

const BrandsMarquee = () => {
  const { t, locale } = useTranslation();
  const isRTL = locale === "ar";

  return (
    <Section bg="accent.500" py={{ base: 12, md: 16 }}>
      <SectionHeading
        eyebrow={t("home.clientsEyebrow")}
        title={t("home.clientsTitle")}
        highlight={t("home.clientsHighlight")}
        size="sm"
        mb={10}
      />

      <Box position="relative" overflow="hidden">
        <Box
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          width="80px"
          zIndex={2}
          pointerEvents="none"
          bg="linear-gradient(to right, var(--chakra-colors-accent-500), transparent)"
        />
        <Box
          position="absolute"
          top={0}
          bottom={0}
          right={0}
          width="80px"
          zIndex={2}
          pointerEvents="none"
          bg="linear-gradient(to left, var(--chakra-colors-accent-500), transparent)"
        />
        <Flex
          width="max-content"
          alignItems="center"
          style={{
            willChange: "transform",
            animationName: isRTL ? "marqueeRTL" : "marquee",
            animationDuration: "30s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        >
          <MarqueeTrack />
          <MarqueeTrack />
        </Flex>
      </Box>
    </Section>
  );
};

export default BrandsMarquee;
