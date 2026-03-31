import { Box, Flex, Text } from "@chakra-ui/react";
import { Button } from "../button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "../../i18n/TranslationProvider";

const MediaBanner = ({
  eyebrow,
  title,
  highlightWord,
  subtitle,
  backgroundColor = "#0A1628",
  textColor = "white",
  callToAction,
  children,
  ...props
}) => {
  const navigate = useNavigate();

  const entrance = (delay) => ({
    animation: `heroIn 1.2s ${delay}s cubic-bezier(0.16, 1, 0.3, 1) both`,
  });

  return (
    <Box
      position="relative"
      bg={backgroundColor}
      py={{ base: 16, md: 24 }}
      px={{ base: 4, md: 16, lg: 32 }}
      overflow="hidden"
      {...props}
    >
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex={1}
      >
        {children || (
          <>
            {eyebrow && (
              <Text
                color="primary.500"
                fontSize="xs"
                fontWeight="500"
                letterSpacing="0.15em"
                textTransform="uppercase"
                mb={6}
                fontFamily="body"
                {...entrance(0.1)}
              >
                {eyebrow}
              </Text>
            )}

            {title && (
              <Box
                textAlign="center"
                mb={8}
                {...entrance(0.25)}
                maxW={{ base: "100%", md: "700px" }}
              >
                <Text
                  fontFamily="heading"
                  fontWeight="700"
                  fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                  lineHeight="1.1"
                  color={textColor}
                >
                  {title}
                  {highlightWord && (
                    <>
                      {"\n"}
                      <Text
                        as="span"
                        fontStyle="italic"
                        color="primary.500"
                        fontFamily="heading"
                      >
                        {highlightWord}
                      </Text>
                    </>
                  )}
                </Text>
              </Box>
            )}

            {subtitle && (
              <Text
                color={textColor}
                opacity={0.7}
                fontSize={{ base: "md", md: "lg" }}
                textAlign="center"
                maxW="500px"
                mb={8}
                fontFamily="body"
                {...entrance(0.35)}
              >
                {subtitle}
              </Text>
            )}

            {callToAction && (
              <Box {...entrance(0.45)}>
                <Button
                  variant="gold"
                  withArrow
                  value={callToAction.text}
                  fontSize="xs"
                  letterSpacing="0.12em"
                  textTransform="uppercase"
                  onClick={() =>
                    callToAction.onClick
                      ? callToAction.onClick()
                      : callToAction.href && navigate(callToAction.href)
                  }
                />
              </Box>
            )}
          </>
        )}
      </Flex>
    </Box>
  );
};

export default MediaBanner;
