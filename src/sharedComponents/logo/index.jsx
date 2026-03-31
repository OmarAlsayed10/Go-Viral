import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useConfigSection } from "../../context/ConfigProvider";
const Logo = () => {
  const brand = useConfigSection("brand");
  const { name = "website", logo } = brand;
  const words = name.split(" ");
  const firstWord = words[0];
  const restWords = words.slice(1).join(" ");
  return (
    <Link to="/">
      {logo ? (
        <Image
          src={logo}
          alt={name}
          height={{ base: "36px", md: "44px" }}
          width="auto"
          objectFit="contain"
          htmlWidth="200"
          htmlHeight="152"
          fetchPriority="high"
        />
      ) : (
        <Text fontWeight="bold" fontSize="3xl">
          <Text as="span" color="white">
            {firstWord}
          </Text>
          {restWords && (
            <Text as="span" color="accent.500">
              {" "}
              {restWords}
            </Text>
          )}
        </Text>
      )}
    </Link>
  );
};
export default Logo;
