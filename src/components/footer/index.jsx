import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { SubText } from "../../sharedComponents/text";
import MailIcon from "../../assets/icons/mailIcon.svg?react";
import CallIcon from "../../assets/icons/callIcon.svg?react";
import { useTranslation } from "../../i18n/TranslationProvider";
import { Link } from "react-router-dom";
const Footer = ({
  brand = { name: "Website", description: "", copyright: "© 2025" },
  sections = [],
  backgroundColor,
  textColor = "white",
  social,
  ...props
}) => {
  const { t } = useTranslation();
  const iconMap = {
    CallIcon: <CallIcon />,
    MailIcon: <MailIcon />,
  };
  return (
    <Box
      as="footer"
      width="100%"
      mt={{ base: 10, md: 20 }}
      py={{ base: 10, md: 20 }}
      px={{ base: 6, md: 20 }}
      backgroundColor={backgroundColor}
      color={textColor}
      {...props}
    >
      <Flex
        justifyContent="space-between"
        flexWrap="wrap"
        gap={{ base: 10, md: 8 }}
        direction={{ base: "column", md: "row" }}
      >
        <Flex direction="column" gap={4} maxW={{ base: "100%", md: "400px" }}>
          <Box>
            {brand.logo ? (
              <Image
                src={brand.logo}
                alt={brand.name || "Logo"}
                height="50px"
                width="auto"
                objectFit="contain"
                htmlWidth="200"
                htmlHeight="152"
                fetchPriority="high"
              />
            ) : brand.name ? (
              <Text fontWeight="bold" fontSize="3xl">
                {brand.nameAlt ? (
                  <>
                    <Text as="span" color="accent.500">
                      {brand.name.split(" ")[0]}
                    </Text>
                    <Text as="span">
                      {" "}
                      {brand.name.split(" ").slice(1).join(" ")}
                    </Text>
                  </>
                ) : (
                  brand.name
                )}
              </Text>
            ) : null}
          </Box>
          <SubText color={textColor} opacity={0.9}>
            {brand.description}
          </SubText>
          <Text fontSize="sm" mt={{ base: 2, md: "auto" }} opacity={0.7}>
            {brand.copyright}
          </Text>
        </Flex>
        <Flex
          gap={{ base: 10, md: 16 }}
          flexWrap="wrap"
          direction={{ base: "column", sm: "row" }}
          flex={1}
          justifyContent={{ base: "flex-start", md: "space-around" }}
        >
          {sections.map((section, index) => (
            <Flex
              key={index}
              direction="column"
              gap={4}
              minW="140px"
              alignItems={{ base: "flex-start", md: "center" }}
            >
              <Text
                textDecoration="underline"
                textUnderlineOffset={4}
                textDecorationColor="primary.500"
                mb={2}
                fontWeight="bold"
                fontSize="lg"
              >
                {section.i18nTitle ? t(section.i18nTitle) : section.title}
              </Text>
              <Flex
                direction="column"
                gap={3}
                alignItems={{ base: "flex-start", md: "center" }}
              >
                {section.type === "links" &&
                  section.items.map((item, idx) => (
                    <Text
                      key={idx}
                      as={Link}
                      to={item.href || "#"}
                      cursor="pointer"
                      _hover={{
                        color: "primary.500",
                        transform: "translateX(4px)",
                      }}
                      transition="all 0.2s"
                      fontSize="md"
                      opacity={0.9}
                    >
                      {item.i18nKey
                        ? t(item.i18nKey)
                        : item.i18nTitle
                          ? t(item.i18nTitle)
                          : item.title}
                    </Text>
                  ))}
                {section.type === "contact" &&
                  section.items.map((item, idx) => (
                    <Flex key={idx} gap={3} alignItems="center">
                      {item.icon && (
                        <Box color="accent.500" fontSize="xl">
                          {iconMap[item.icon]}
                        </Box>
                      )}
                      <Text
                        fontSize="sm"
                        opacity={0.9}
                        dir={item.type === "phone" ? "ltr" : undefined}
                      >
                        {item.text}
                      </Text>
                    </Flex>
                  ))}
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
      {social && Object.keys(social).length > 0 && (
        <>
          <Box h="1px" bg="whiteAlpha.200" my={8} />
          <Flex gap={6} justifyContent="center" flexWrap="wrap">
            {Object.entries(social).map(([platform, url]) => (
              <Box
                key={platform}
                as="a"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                cursor="pointer"
                _hover={{ color: "primary.500", transform: "translateY(-2px)" }}
                transition="all 0.2s"
                fontWeight="medium"
                textTransform="capitalize"
              >
                {platform}
              </Box>
            ))}
          </Flex>
        </>
      )}
    </Box>
  );
};
export default Footer;
