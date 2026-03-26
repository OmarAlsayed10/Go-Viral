import { Link as RouterLink, useLocation } from "react-router-dom";
import { Flex, Link, List } from "@chakra-ui/react";
import { useTranslation } from "../../i18n/TranslationProvider";
const Tabs = ({ tabTypes }) => {
  const location = useLocation();
  const { t } = useTranslation();
  const defaultTabs = [
    { title: t("auth.login"), href: encodeURI("/login") },
    { title: t("auth.signup"), href: encodeURI("/signup") },
  ];
  const tabs = tabTypes || defaultTabs;
  return (
    <Flex justifyContent="space-around">
      <List.Root
        display="flex"
        flexDirection="row"
        mb={6}
        gap={10}
        listStyle="none"
      >
        {tabs.map((item, index) => {
          const isActive = location.pathname.startsWith(item.href);
          return (
            <List.Item key={index}>
              <Link
                as={RouterLink}
                to={item.href}
                _hover={{ textDecoration: "none", outline: "none" }}
                _focus={{ textDecoration: "none", outline: "none" }}
                fontSize="xl"
                fontWeight="bold"
                pb={2}
                borderBottom="2px solid"
                borderBottomColor={isActive ? "accent.500" : "transparent"}
                transition="border-color 0.2s ease"
              >
                {item.title}
              </Link>
            </List.Item>
          );
        })}
      </List.Root>
    </Flex>
  );
};
export default Tabs;
