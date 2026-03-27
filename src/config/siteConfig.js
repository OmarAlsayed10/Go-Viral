const siteConfig = {
  "type": "portfolio",
  "brand": {
    "logo": "/logo.webp",
    "copyright": `© ${new Date().getFullYear()} All Rights Reserved`
  },
  "navigation": {
    "items": [
      { "i18nKey": "nav.home", "href": "/" },
      { "i18nKey": "nav.ourWork", "href": "/ourwork" },
      { "i18nKey": "nav.contact", "href": "/contact" },
      { "i18nKey": "nav.about", "href": "/about" }
    ],
    "actions": [],
    "variant": "default",
    "align": "side",
    "textColor": "white",
    "hoverColor": "primary.500"
  },
  "hero": {
    "i18nTitle": "hero.title",
    "i18nSubtitle": "hero.subtitle",
    "i18nEyebrow": "hero.eyebrow",
    "i18nHighlightWord": "hero.highlightWord",
    "i18nTitleSuffix": "hero.titleSuffix",
    "textColor": "white",
    "align": "side",
    "i18nGetInTouch": "hero.getInTouch",
    "callToAction": {
      "i18nText": "hero.ourWork",
      "href": "/ourwork"
    }
  },
  "pages": [
    { "path": "/", "component": "Home" },
    { "path": "/contact", "component": "Contact" },
    { "path": "/about", "component": "About" },
    { "path": "/ourwork", "component": "OurWork" },
    { "path": "/ourwork/:slug", "component": "ProjectDetail" }
  ],
  "dividers": false,
  "sections": [
    {
      "type": "hero"
    },
    {
      "type": "mediaBanner",
      "i18nEyebrow": "mediaBanner.eyebrow",
      "i18nTitle": "mediaBanner.title",
      "i18nHighlightWord": "mediaBanner.highlightWord",
      "backgroundColor": "#0a0f2c",
      "callToAction": {
        "i18nText": "mediaBanner.cta",
        "href": "/contact"
      }
    }
  ],
  "footer": {
    "sections": [
      {
        "i18nTitle": "footer.links",
        "type": "links",
        "items": [
          { "i18nKey": "nav.ourWork", "href": "/ourwork" },
          { "i18nKey": "nav.contact", "href": "/contact" },
          { "i18nKey": "nav.about", "href": "/about" }
        ]
      },
      {
        "i18nTitle": "footer.contactUs",
        "type": "contact",
        "items": [
          { "type": "email", "icon": "MailIcon", "text": "Goviral2202@gmail.com" },
          { "type": "phone", "icon": "CallIcon", "text": "+012 0033 5089" }
        ]
      }
    ],
    "textColor": "white",
    "backgroundColors": "#0a0f2c"
  },
  "social": {
    "facebook": "https://www.facebook.com/share/18GoXS7c5r/",
    "instagram": "https://www.instagram.com/go_viral_2202?igsh=bnl1YWF4cHI3Ymhv",
  }
};

export default siteConfig;