import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useTranslation } from "../../i18n/TranslationProvider";

function WorkCard({ item, index }) {
  const { t } = useTranslation();
  const p = (field) =>
    item.i18nKey
      ? t(`projects.${item.i18nKey}.${field}`) || item[field]
      : item[field];

  return (
    <Link to={`/ourwork/${item.slug}`} style={{ textDecoration: "none" }}>
      <Box
        position="relative"
        borderRadius="xl"
        overflow="hidden"
        cursor="pointer"
        role="group"
        animation={`fadeUp 0.6s ${index * 0.08}s cubic-bezier(0.16,1,0.3,1) both`}
      >
        <Image
          src={item.thumbnail}
          alt={item.title}
          width="100%"
          height={{ base: "260px", md: "280px" }}
          objectFit="cover"
          transition="transform 0.5s ease"
          _groupHover={{ transform: "scale(1.06)" }}
        />
        <Box
          position="absolute"
          inset={0}
          bg="linear-gradient(180deg, transparent 30%, rgba(10,15,44,0.85) 100%)"
          opacity={0.7}
          transition="opacity 0.4s ease"
          _groupHover={{ opacity: 1 }}
        />
        <Text
          position="absolute"
          top={4}
          left={4}
          bg="rgba(201,168,76,0.15)"
          color="primary.500"
          fontSize="xs"
          fontWeight="600"
          px={3}
          py={1}
          borderRadius="full"
          letterSpacing="0.04em"
        >
          {p("tag")}
        </Text>
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          p={5}
          transform="translateY(4px)"
          transition="transform 0.4s ease"
          _groupHover={{ transform: "translateY(0)" }}
        >
          <Text
            fontFamily="heading"
            fontWeight="700"
            fontSize="lg"
            color="white"
            mb={1}
          >
            {p("title")}
          </Text>
          <Text color="paragraph.400" fontSize="sm">
            {p("client")}
          </Text>
        </Box>

        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%) scale(0.8)"
          opacity={0}
          transition="all 0.4s ease"
          _groupHover={{
            opacity: 1,
            transform: "translate(-50%, -50%) scale(1)",
          }}
          bg="rgba(201,168,76,0.9)"
          w="48px"
          h="48px"
          borderRadius="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="xl" color="accent.800" fontWeight="bold">
            →
          </Text>
        </Box>
      </Box>
    </Link>
  );
}
export default WorkCard;
