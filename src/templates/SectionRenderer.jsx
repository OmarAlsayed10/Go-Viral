import { useConfig, useConfigSection } from "../context/ConfigProvider";
import { getSectionComponent } from "../registry";
import { useTranslation } from "../i18n/TranslationProvider";

const HERO_I18N_FIELDS = [
  { i18nKey: "i18nTitle", propKey: "title" },
  { i18nKey: "i18nSubtitle", propKey: "subtitle" },
  { i18nKey: "i18nEyebrow", propKey: "eyebrow" },
  { i18nKey: "i18nHighlightWord", propKey: "highlightWord" },
  { i18nKey: "i18nTitleSuffix", propKey: "titleSuffix" },
  { i18nKey: "i18nGetInTouch", propKey: "getInTouch" },
];

const SectionRenderer = ({
  sections: sectionsProp,
  data = {},
  onAddToCart,
  onProductClick,
  children,
}) => {
  const config = useConfig();
  const heroConfig = useConfigSection("hero");
  const { t } = useTranslation();
  const sections = sectionsProp ?? config.sections ?? [];

  const resolveSection = (section, index) => {
    const { type, dataKey, i18nTitle, i18nSubtitle, ...props } = section;
    const Component = getSectionComponent(type);

    if (!Component) {
      if (import.meta.env.DEV) {
        console.warn(
          `[SectionRenderer] Unknown section type: "${type}". ` +
            `Registered types: hero, featureCards, featureGrid, productGrid, ` +
            `mediaBanner, newsletter, contactForm, contentSection, statsBar`,
        );
      }
      return null;
    }

    let mergedProps = { ...props };

    if (i18nTitle) mergedProps.title = t(i18nTitle);
    if (i18nSubtitle) mergedProps.subtitle = t(i18nSubtitle);

    if (props.i18nEyebrow) {
      mergedProps.eyebrow = t(props.i18nEyebrow);
      delete mergedProps.i18nEyebrow;
    }

    if (props.i18nHighlightWord) {
      mergedProps.highlightWord = t(props.i18nHighlightWord);
      delete mergedProps.i18nHighlightWord;
    }

    if (mergedProps.callToAction?.i18nText) {
      const ctaText = t(mergedProps.callToAction.i18nText);
      if (ctaText) {
        mergedProps.callToAction = {
          ...mergedProps.callToAction,
          text: ctaText,
        };
        delete mergedProps.callToAction.i18nText;
      }
    }

    if (type === "hero") {
      const {
        i18nTitle: _t,
        i18nSubtitle: _s,
        i18nEyebrow: _e,
        i18nHighlightWord: _h,
        i18nTitleSuffix: _ts,
        i18nGetInTouch: _git,
        ...heroRest
      } = heroConfig;

      mergedProps = { ...heroRest, ...mergedProps };

      for (const { i18nKey, propKey } of HERO_I18N_FIELDS) {
        if (!mergedProps[propKey] && heroConfig[i18nKey]) {
          const resolved = t(heroConfig[i18nKey]);
          if (resolved) mergedProps[propKey] = resolved;
        }
      }

      if (mergedProps.callToAction?.i18nText) {
        const ctaText = t(mergedProps.callToAction.i18nText);
        if (ctaText) {
          mergedProps.callToAction = {
            ...mergedProps.callToAction,
            text: ctaText,
          };
          delete mergedProps.callToAction.i18nText;
        }
      }
    }

    if (type === "featureCards" && !mergedProps.items) {
      mergedProps.items = heroConfig.items;
    }

    if (dataKey && data[dataKey]) {
      mergedProps.products = data[dataKey];
    }

    if (type === "productGrid" && onAddToCart) {
      mergedProps.onAddToCart = onAddToCart;
      mergedProps.onProductClick = onProductClick;
    }

    return (
      <div key={`${type}-${index}`}>
        <Component {...mergedProps} />
      </div>
    );
  };

  const [first, ...rest] = sections;

  return (
    <>
      {first && resolveSection(first, 0)}
      {children}
      {rest.map((section, index) => resolveSection(section, index + 1))}
    </>
  );
};

export default SectionRenderer;
