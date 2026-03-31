import Hero from "../../../../components/hero";
import { useTranslation } from "../../../../i18n/TranslationProvider";
import { useConfigSection } from "../../../../context/ConfigProvider";

const ContactHero = () => {
  const { t } = useTranslation();
  const footerConfig = useConfigSection("footer");
  const contactSection = footerConfig.sections?.find(
    (s) => s.type === "contact",
  );
  const contactItems = contactSection?.items || [];

  const labelMap = {
    email: t("contact.emailLabel"),
    phone: t("contact.phoneLabel"),
    address: t("contact.locationLabel"),
  };

  const contactInfo = contactItems.map((item) => ({
    label: labelMap[item.type] || item.type,
    value: item.text,
    dir: item.type === "phone" ? "ltr" : undefined,
  }));

  return (
    <Hero
      eyebrow={t("contact.eyebrow")}
      title={t("contact.title")}
      highlightWord={t("contact.highlightWord")}
      subtitle={t("contact.subtitle")}
      align="left"
      backgroundType="solid"
      backgroundColors={["accent.800"]}
      height="auto"
      contactInfo={contactInfo}
    />
  );
};

export default ContactHero;
