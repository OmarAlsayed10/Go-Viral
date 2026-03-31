import { Button as CButton, Flex } from "@chakra-ui/react";
import { buttonVariants } from "../../theme";
import ArrowRightIcon from "../../assets/icons/arrowRightIcon.svg?react";
import { useTranslation } from "../../i18n/TranslationProvider";

const Button = ({
  value,
  variant = "primary",
  onClick,
  icon,
  withArrow,
  ...props
}) => {
  const { locale } = useTranslation();

  const resolvedIcon = withArrow ? (
    <ArrowRightIcon
      style={{ transform: locale === "ar" ? "scaleX(-1)" : "none" }}
    />
  ) : (
    icon
  );

  return (
    <CButton {...buttonVariants[variant]} onClick={onClick} {...props} p={6}>
      <Flex gap={2} alignItems="center">
        {value}
        {resolvedIcon}
      </Flex>
    </CButton>
  );
};

export { Button };
