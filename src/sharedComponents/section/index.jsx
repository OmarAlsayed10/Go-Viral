import { Box } from "@chakra-ui/react";
const Section = ({
  container = "xl",
  backgroundColor,
  backgroundImage,
  py = { base: 12, md: 16, lg: 20 },
  px = { base: 4, md: 8 },
  id,
  position = "relative",
  overflow,
  ...props
}) => {
  const containerWidths = {
    full: "100%",
    default: "container.xl",
    sm: "container.sm",
    md: "container.md",
    lg: "container.lg",
    xl: "container.xl",
  };
  return (
    <Box
      as="section"
      id={id}
      width="100%"
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage ? `url(${backgroundImage})` : undefined}
      backgroundSize="cover"
      backgroundPosition="center"
      position={position}
      overflow={overflow}
      {...props}
    >
      <Box
        maxW={containerWidths[container] || containerWidths.xl}
        mx="auto"
        py={py}
        px={px}
      >
        {props.children}
      </Box>
    </Box>
  );
};
export default Section;
