import MediaBanner from "../../../../sharedComponents/mediabanner";
import { useTranslation } from "../../../../i18n/TranslationProvider";
function AboutCTA() {
  const { t } = useTranslation();
  return (
    <MediaBanner
      eyebrow={t("mediaBanner.eyebrow")}
      title={t("mediaBanner.title")}
      highlightWord={t("mediaBanner.highlightWord")}
      backgroundColor="accent.800"
      callToAction={{ text: t("mediaBanner.cta"), href: "/contact" }}
    />
  );
}
export default AboutCTA;
