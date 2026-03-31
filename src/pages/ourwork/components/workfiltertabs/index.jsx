import { Box, Flex } from "@chakra-ui/react";
const WorkFilterTabs = ({ categories, active, labelMap, onChange }) => {
  return (
    <Flex
      justifyContent="center"
      gap={{ base: 2, md: 4 }}
      mb={{ base: 10, md: 14 }}
      flexWrap="wrap"
    >
      {categories.map((cat) => (
        <Box
          key={cat}
          as="button"
          onClick={() => onChange(cat)}
          px={{ base: 4, md: 6 }}
          py={2}
          fontSize="sm"
          fontWeight="500"
          fontFamily="body"
          letterSpacing="0.04em"
          color={active === cat ? "#CDA84F" : "rgba(245,243,238,0.5)"}
          borderBottom="2px solid"
          borderColor={active === cat ? "#CDA84F" : "transparent"}
          bg="transparent"
          cursor="pointer"
          transition="all 0.3s ease"
          _hover={{ color: "#CDA84F" }}
        >
          {labelMap[cat]}
        </Box>
      ))}
    </Flex>
  );
};
export default WorkFilterTabs;
