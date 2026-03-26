import { Text } from "@chakra-ui/react";
import { FontVariants } from "../../theme";
export function HeadingText({ children, value }) {
  return (
    <Text textAlign={"center"} {...FontVariants.heading}>
      {children ?? value}
    </Text>
  );
}
export function SubText({ children, value, ...props }) {
  return (
    <Text {...FontVariants.body} {...props}>
      {children ?? value}
    </Text>
  );
}
