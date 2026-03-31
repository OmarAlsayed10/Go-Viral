import Hero from "../../../../components/hero";
import { useTranslation } from "../../../../i18n/TranslationProvider";

const AboutHero = () => {
  const { t } = useTranslation();

  return (
    <Hero
      eyebrow={t("about.eyebrow")}
      title={t("about.title")}
      highlightWord={t("about.highlightWord")}
      align="left"
      backgroundType="solid"
      backgroundColors={["accent.800"]}
      height="auto"
      image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=100"
    />
  );
};

export default AboutHero;
