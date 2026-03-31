import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { SubText } from "../../sharedComponents/text";
import { Button } from "../../sharedComponents/button";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "../../i18n/TranslationProvider";

const Hero = ({
  title,
  highlightWord,
  titleSuffix,
  eyebrow,
  subtitle,
  backgroundType = "wave",
  backgroundColors,
  backgroundImage,
  textColor = "white",
  align = "center",
  items = [],
  callToAction,
  getInTouch,
  height = "600px",
  image,
  contactInfo,
  children,
  ...props
}) => {
  const navigate = useNavigate();
  const { locale } = useTranslation();
  const arrowFlip = { transform: locale === "ar" ? "scaleX(-1)" : "none" };

  const getBackgroundStyle = () => {
    if (!backgroundColors && backgroundType !== "image") return {};

    switch (backgroundType) {
      case "gradient":
        return {
          bg: `linear-gradient(180deg, ${backgroundColors[0]} 0%, ${backgroundColors[1]} 100%)`,
        };
      case "image":
        return backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {};
      case "wave":
        return {
          bg: `linear-gradient(180deg, ${backgroundColors[0]} 0%, ${backgroundColors[1]} 100%)`,
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
        };
      case "solid":
        return {
          bg: backgroundColors[0],
        };
      default:
        return {};
    }
  };

  const textAlignMap = {
    side: "start",
    left: "left",
    center: "center",
    right: "right",
  };

  const justifyMap = {
    side: "flex-start",
    left: "flex-start",
    center: "center",
    right: "flex-end",
  };

  const alignItemsMap = {
    side: "flex-start",
    left: "flex-start",
    center: "center",
    right: "flex-end",
  };

  const resolvedTextAlign = textAlignMap[align] || "center";
  const resolvedJustify = justifyMap[align] || "center";
  const resolvedAlignItems = alignItemsMap[align] || "center";

  const hasTitle = title || highlightWord || titleSuffix;

  const entrance = (delay) => ({
    animation: `heroIn 1.2s ${delay}s cubic-bezier(0.16, 1, 0.3, 1) both`,
  });

  return (
    <Box mt={8} position="relative" overflow="hidden" {...props}>
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        height={height}
        {...getBackgroundStyle()}
        zIndex={0}
      />

      <Flex
        position="relative"
        zIndex={1}
        justifyContent={image ? "space-between" : resolvedJustify}
        alignItems={image ? "center" : resolvedAlignItems}
        direction={image ? { base: "column", lg: "row" } : "column"}
        gap={image ? { base: 10, lg: 16 } : 0}
        py={16}
        px={{ base: 4, md: 16, lg: 32 }}
        minH={height}
      >
        {children || (
          <>
            {/* Text content wrapper — keeps eyebrow/title/subtitle stacked vertically
                regardless of whether the outer Flex is row (image mode) or column */}
            <Flex
              direction="column"
              flex={image ? 1 : undefined}
              alignItems={image ? "flex-start" : resolvedAlignItems}
            >
              {eyebrow && (
                <Text
                  color="primary.500"
                  fontSize="xs"
                  fontWeight="500"
                  letterSpacing="0.15em"
                  textTransform="uppercase"
                  mb={6}
                  textAlign={resolvedTextAlign}
                  fontFamily="body"
                  {...entrance(0.1)}
                >
                  {eyebrow}
                </Text>
              )}

              {hasTitle && (
                <Box
                  maxW="500px"
                  mb={6}
                  textAlign={resolvedTextAlign}
                  {...entrance(0.25)}
                >
                  <Text
                    fontFamily="heading"
                    fontWeight="700"
                    fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
                    lineHeight="1.05"
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
                    {titleSuffix && (
                      <>
                        {"\n"}
                        {titleSuffix}
                      </>
                    )}
                  </Text>
                </Box>
              )}

              {subtitle && (
                <SubText
                  color={textColor}
                  fontWeight="200"
                  textAlign={resolvedTextAlign}
                  fontSize={{ base: "md", md: "lg" }}
                  maxW="480px"
                  mb={8}
                  whiteSpace="pre-line"
                  opacity={0.75}
                  fontFamily="body"
                  {...entrance(0.4)}
                >
                  {subtitle}
                </SubText>
              )}

              {callToAction && (
                <Flex gap={4} alignItems="center" {...entrance(0.55)}>
                  <Button
                    variant="gold"
                    withArrow
                    value={callToAction.text}
                    onClick={() =>
                      callToAction.onClick
                        ? callToAction.onClick()
                        : callToAction.href && navigate(callToAction.href)
                    }
                  />
                  {getInTouch && (
                    <Link
                      to={callToAction.secondaryHref || "/contact"}
                      style={{
                        color: "white",
                        opacity: 0.75,
                        fontSize: "0.95rem",
                        fontWeight: 400,
                        textDecoration: "underline",
                        textUnderlineOffset: "4px",
                      }}
                    >
                      {getInTouch}
                    </Link>
                  )}
                </Flex>
              )}

              {contactInfo && contactInfo.length > 0 && (
                <Flex direction="column" gap={3} {...entrance(0.55)}>
                  {contactInfo.map((item, i) => (
                    <Flex key={i} gap={3} alignItems="baseline">
                      <Text
                        color="primary.500"
                        fontSize="sm"
                        fontWeight="600"
                        minW="80px"
                      >
                        {item.label}
                      </Text>
                      <Text color="paragraph.500" fontSize="sm" dir={item.dir}>
                        {item.value}
                      </Text>
                    </Flex>
                  ))}
                </Flex>
              )}
            </Flex>

            {/* Image side */}
            {image && (
              <Box
                flex={1}
                position="relative"
                borderRadius="xl"
                overflow="hidden"
                {...entrance(0.3)}
              >
                <Image
                  src={image}
                  alt=""
                  width="100%"
                  height={{ base: "300px", md: "420px" }}
                  objectFit="cover"
                />
                <Box
                  position="absolute"
                  inset={0}
                  bg="linear-gradient(135deg, rgba(10,15,44,0.4) 0%, rgba(201,168,76,0.15) 100%)"
                />
              </Box>
            )}
          </>
        )}
      </Flex>
    </Box>
  );
};

export default Hero;
