import { Text } from "@chakra-ui/react";
import { FontVariants } from "../../theme";
export const HeadingText = ({ children, value }) => {
  return (
    <Text textAlign={"center"} {...FontVariants.heading}>
      {children ?? value}
    </Text>
  );
};
export const SubText = ({ children, value, ...props }) => {
  return (
    <Text {...FontVariants.body} {...props}>
      {children ?? value}
    </Text>
  );
};
