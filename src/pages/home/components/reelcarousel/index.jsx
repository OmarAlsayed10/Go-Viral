import { useState, useEffect, useCallback } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "../../../../i18n/TranslationProvider";
const CAROUSEL_IMAGES = [];
const GRAIN_BG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;
const ReelCarousel = () => {
  const { t } = useTranslation();
  const [activeSlide, setActiveSlide] = useState(0);
  const nextSlide = useCallback(() => {
    setActiveSlide((i) => (i + 1) % CAROUSEL_IMAGES.length);
  }, []);
  useEffect(() => {
    const timer = setInterval(nextSlide, 3500);
    return () => clearInterval(timer);
  }, [nextSlide]);
  return (
    <Box position="relative" width="100%" overflow="hidden" bg="accent.800">
      <Box position="relative" width="100%" pt="50%" maxH="600px">
        {CAROUSEL_IMAGES.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`Reel ${i + 1}`}
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            objectFit="cover"
            opacity={i === activeSlide ? 1 : 0}
            transition="opacity 1s ease"
            zIndex={i === activeSlide ? 1 : 0}
          />
        ))}
        <Box
          position="absolute"
          inset={0}
          zIndex={2}
          opacity={0.04}
          pointerEvents="none"
          backgroundImage={GRAIN_BG}
        />
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          height="40%"
          zIndex={3}
          bg="linear-gradient(transparent, #0a0f2c)"
        />
      </Box>
      <Flex
        position="absolute"
        bottom={6}
        left={0}
        right={0}
        zIndex={4}
        direction="column"
        alignItems="center"
        gap={3}
      >
        <Text
          color="primary.500"
          fontSize="xs"
          fontWeight="500"
          letterSpacing="0.15em"
          textTransform="uppercase"
          fontFamily="body"
        >
          {t("home.reelLabel")}
        </Text>
        <Flex gap={2}>
          {CAROUSEL_IMAGES.map((_, i) => (
            <Box
              key={i}
              as="button"
              width={i === activeSlide ? "24px" : "8px"}
              height="8px"
              borderRadius="full"
              bg={i === activeSlide ? "primary.500" : "paragraph.300"}
              border="none"
              cursor="pointer"
              transition="all 0.3s"
              onClick={() => setActiveSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};
export default ReelCarousel;
