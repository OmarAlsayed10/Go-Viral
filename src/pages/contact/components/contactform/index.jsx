import {
  Box,
  Flex,
  Input,
  NativeSelect,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Section from "../../../../sharedComponents/section";
import { Button } from "../../../../sharedComponents/button";
import { useTranslation } from "../../../../i18n/TranslationProvider";
import ArrowRightIcon from "../../../../assets/icons/arrowRightIcon.svg?react";
import { useContactForm } from "../../helper/useContactForm";

const INPUT_STYLES = {
  bg: "rgba(245,243,238,0.04)",
  border: "1px solid rgba(245,243,238,0.12)",
  color: "white",
  borderRadius: "md",
  _hover: { borderColor: "primary.500" },
  _focus: {
    borderColor: "primary.500",
    boxShadow: "0 0 0 1px var(--chakra-colors-primary-500)",
  },
  _placeholder: { color: "paragraph.300" },
};

function FieldLabel({ children }) {
  return (
    <Text
      color="paragraph.400"
      fontSize="xs"
      fontWeight="600"
      mb={2}
      letterSpacing="0.05em"
    >
      {children}
    </Text>
  );
}

function SuccessState({ onReset, arrowFlip }) {
  const { t } = useTranslation();
  return (
    <Flex direction="column" alignItems="center" textAlign="center" py={16}>
      <Text
        fontSize="4xl"
        color="primary.500"
        mb={6}
        animation="pulse 2s infinite"
      >
        ✦
      </Text>
      <Text
        fontFamily="heading"
        fontWeight="700"
        fontSize="2xl"
        color="heading.500"
        mb={3}
      >
        {t("contact.successTitle")}
      </Text>
      <Text color="paragraph.500" mb={8}>
        {t("contact.successDesc")}
      </Text>
      <Button
        icon={<ArrowRightIcon style={arrowFlip} />}
        value={t("contact.sendAnother")}
        variant="outline"
        borderColor="primary.500"
        color="primary.500"
        borderRadius="md"
        onClick={onReset}
        _hover={{ bg: "primary.500", color: "accent.800" }}
      />
    </Flex>
  );
}

function ContactForm() {
  const { t, locale } = useTranslation();
  const arrowFlip = { transform: locale === "ar" ? "scaleX(-1)" : "none" };
  const { form, status, setField, handleSubmit, reset, isSubmittable } =
    useContactForm();

  const services = [
    t("services.graphicDesign"),
    t("services.videoProduction"),
    t("services.marketingStrategy"),
    t("services.fullPackage"),
  ];

  return (
    <Section bg="accent.500" py={{ base: 16, md: 24 }}>
      <Box
        maxW="700px"
        mx="auto"
        animation="heroIn 1.2s 0.2s cubic-bezier(0.16,1,0.3,1) both"
      >
        {status === "sent" ? (
          <SuccessState onReset={reset} arrowFlip={arrowFlip} />
        ) : (
          <Box as="form" onSubmit={handleSubmit}>
            <Flex direction="column" gap={5}>
              <Flex gap={5} direction={{ base: "column", md: "row" }}>
                <Box flex={1}>
                  <FieldLabel>{t("contact.nameLabel")}</FieldLabel>
                  <Input
                    value={form.name}
                    onChange={setField("name")}
                    placeholder={t("contact.namePlaceholder")}
                    required
                    {...INPUT_STYLES}
                  />
                </Box>
                <Box flex={1}>
                  <FieldLabel>{t("contact.emailFieldLabel")}</FieldLabel>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={setField("email")}
                    placeholder={t("contact.emailPlaceholder")}
                    required
                    {...INPUT_STYLES}
                  />
                </Box>
              </Flex>

              <Flex gap={5} direction={{ base: "column", md: "row" }}>
                <Box flex={1}>
                  <FieldLabel>{t("contact.companyLabel")}</FieldLabel>
                  <Input
                    value={form.company}
                    onChange={setField("company")}
                    placeholder={t("contact.companyPlaceholder")}
                    {...INPUT_STYLES}
                  />
                </Box>
                <Box flex={1}>
                  <FieldLabel>{t("contact.serviceLabel")}</FieldLabel>
                  <NativeSelect.Root
                    value={form.service}
                    onChange={setField("service")}
                    width="100%"
                  >
                    <NativeSelect.Field py={2} px={3} {...INPUT_STYLES}>
                      <option value="" style={{ background: "#0f1a44" }}>
                        {t("contact.servicePlaceholder")}
                      </option>
                      {services.map((s) => (
                        <option
                          key={s}
                          value={s}
                          style={{ background: "#0f1a44" }}
                        >
                          {s}
                        </option>
                      ))}
                    </NativeSelect.Field>
                    <NativeSelect.Indicator />
                  </NativeSelect.Root>
                </Box>
              </Flex>

              <Box>
                <FieldLabel>{t("contact.messageLabel")}</FieldLabel>
                <Textarea
                  value={form.message}
                  onChange={setField("message")}
                  placeholder={t("contact.messagePlaceholder")}
                  required
                  rows={6}
                  {...INPUT_STYLES}
                />
              </Box>

              <Button
                icon={<ArrowRightIcon style={arrowFlip} />}
                value={t("contact.send")}
                variant="outline"
                type="submit"
                borderColor="primary.500"
                color="primary.500"
                borderRadius="md"
                fontWeight="500"
                letterSpacing="0.04em"
                disabled={!isSubmittable}
                _hover={{
                  bg: "primary.500",
                  color: "accent.800",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 30px rgba(205,168,79,0.25)",
                }}
              />
            </Flex>
          </Box>
        )}
      </Box>
    </Section>
  );
}

export default ContactForm;
