import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "../../i18n/TranslationProvider";
const LanguageToggle = ({ color, hoverColor }) => {
  const { locale, setLocale } = useTranslation();
  const toggleLocale = () => {
    setLocale(locale === "ar" ? "en" : "ar");
  };
  return (
    <Box
      as="button"
      onClick={toggleLocale}
      px={3}
      py={1.5}
      rounded="full"
      border="1px solid"
      borderColor="gray.300"
      bg="transparent"
      cursor="pointer"
      transition="all 0.2s"
      _hover={{ bg: hoverColor }}
      display="flex"
      alignItems="center"
      gap={1.5}
    >
      <Text fontSize="sm" fontWeight="semibold" color={color}>
        {locale === "ar" ? "EN" : "ع"}
      </Text>
    </Box>
  );
};
export default LanguageToggle;
