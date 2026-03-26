import { createContext, useCallback, useContext, useState } from "react";
import arStrings from "./ar.json";
import enStrings from "./en.json";
const translations = { ar: arStrings, en: enStrings };
const TranslationContext = createContext(null);
export function TranslationProvider({ defaultLocale = "en", children }) {
  const [locale, setLocaleState] = useState(defaultLocale);
  const setLocale = useCallback((newLocale) => {
    setLocaleState(newLocale);
    document.documentElement.lang = newLocale;
    document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
  }, []);
  const t = useCallback(
    (key, vars = {}) => {
      const keys = key.split(".");
      let value = keys.reduce((obj, k) => obj?.[k], translations[locale]);
      if (value === undefined) {
        value = keys.reduce((obj, k) => obj?.[k], translations.en);
      }
      if (value === undefined) return key;
      if (typeof value === "string") {
        for (const [k, v] of Object.entries(vars)) {
          value = value.replace(new RegExp(`\\{${k}\\}`, "g"), v);
        }
      }
      return value;
    },
    [locale],
  );
  return (
    <TranslationContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </TranslationContext.Provider>
  );
}
export function useTranslation() {
  const ctx = useContext(TranslationContext);
  if (!ctx) {
    throw new Error("useTranslation must be used within <TranslationProvider>");
  }
  return ctx;
}
