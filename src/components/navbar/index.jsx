import { Flex, List, Text, Box, Icon } from "@chakra-ui/react";
import { Button } from "../../sharedComponents/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../../sharedComponents/logo";
import LanguageToggle from "../../sharedComponents/languagetoggle";
import { useTranslation } from "../../i18n/TranslationProvider";

const VARIANT_STYLES = {
  default: {},
  transparent: {
    bg: "transparent",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  sticky: {
    position: "sticky",
    top: 0,
    bg: "white",
    boxShadow: "sm",
    zIndex: 100,
  },
};

function Navbar({
  navItems = [],
  actions = [],
  variant = "default",
  align = "side",
  textColor,
  hoverColor,
  ...props
}) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navJustify = align === "side" ? "flex-end" : "center";

  return (
    <Box position="relative" {...VARIANT_STYLES[variant]} {...props}>
      <Flex alignItems="center" mx={{ base: 4, md: 16, lg: 32 }} my={6} gap={4}>
        <Box order={1}>
          <Logo />
        </Box>

        <Flex
          flex="1"
          justifyContent={navJustify}
          display={{ base: "none", md: "flex" }}
          order={2}
        >
          <List.Root
            flexDirection="row"
            listStyle="none"
            gap={{ base: 4, md: 8 }}
          >
            {navItems.map((item) => (
              <List.Item key={item.href}>
                <Link to={item.href}>
                  <Text
                    color={textColor}
                    _hover={{ color: hoverColor }}
                    transition="color 0.2s"
                  >
                    {item.i18nKey ? t(item.i18nKey) : item.title}
                  </Text>
                </Link>
              </List.Item>
            ))}
          </List.Root>
        </Flex>

        <Box order={3}>
          <LanguageToggle color={textColor} />
        </Box>

        <Flex gap={2} display="flex" order={4}>
          {actions.map((action, index) => (
            <Button
              key={index}
              value={action.i18nKey ? t(action.i18nKey) : action.text}
              onClick={() =>
                action.onClick ? action.onClick() : navigate(action.href)
              }
            />
          ))}
        </Flex>

        <Box
          as="button"
          display={{ base: "flex", md: "none" }}
          alignItems="center"
          justifyContent="center"
          p={2}
          rounded="lg"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          marginInlineStart="auto"
          order={align === "center" ? 0 : 5}
        >
          <Icon boxSize={6} color={textColor}>
            {mobileOpen ? <FiX /> : <FiMenu />}
          </Icon>
        </Box>
      </Flex>
      {mobileOpen && (
        <Box
          display={{ base: "block", md: "none" }}
          position="absolute"
          top="100%"
          left={0}
          right={0}
          bg="white"
          boxShadow="0 8px 30px -4px rgba(0,0,0,0.15)"
          borderTop="1px solid"
          borderColor="gray.100"
          zIndex={999}
          py={4}
          px={6}
        >
          <Flex direction="column" gap={1}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
              >
                <Box py={3} px={4} rounded="lg" transition="all 0.2s">
                  <Text fontWeight="medium">
                    {item.i18nKey ? t(item.i18nKey) : item.title}
                  </Text>
                </Box>
              </Link>
            ))}
          </Flex>
          <Box h="1px" bg="gray.100" my={3} />
          <Flex direction="column" gap={2}>
            {actions.map((action, index) => (
              <Button
                key={index}
                value={action.i18nKey ? t(action.i18nKey) : action.text}
                width="100%"
                onClick={() => {
                  setMobileOpen(false);
                  action.onClick ? action.onClick() : navigate(action.href);
                }}
              />
            ))}
          </Flex>
        </Box>
      )}
    </Box>
  );
}

export default Navbar;
