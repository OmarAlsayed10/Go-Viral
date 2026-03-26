import { Box, Text } from "@chakra-ui/react";
const fontSizeMap = {
  sm: { base: "2xl", md: "3xl" },
  md: { base: "3xl", md: "4xl" },
  lg: { base: "4xl", md: "5xl", lg: "6xl" },
};
function SectionHeading({
  eyebrow,
  title,
  highlight,
  textAlign = "center",
  size = "md",
  mb = 12,
}) {
  return (
    <Box textAlign={textAlign} mb={mb}>
      {eyebrow && (
        <Text
          color="primary.500"
          fontSize="sm"
          fontWeight="500"
          letterSpacing="0.15em"
          textTransform="uppercase"
          mb={4}
          fontFamily="body"
        >
          {eyebrow}
        </Text>
      )}
      <Text
        fontFamily="heading"
        fontWeight="700"
        fontSize={fontSizeMap[size]}
        lineHeight="1.1"
        color="heading.500"
      >
        {title}{" "}
        {highlight && (
          <Text
            as="span"
            fontStyle="italic"
            color="primary.500"
            fontFamily="heading"
          >
            {highlight}
          </Text>
        )}
      </Text>
    </Box>
  );
}
export default SectionHeading;
