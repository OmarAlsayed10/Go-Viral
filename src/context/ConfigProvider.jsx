import { createContext, useContext } from "react";
import siteConfig from "../config/siteConfig";
const configContext = createContext(null);
export const ConfigProvider = ({ config = siteConfig, children }) => {
  return (
    <configContext.Provider value={config}>{children}</configContext.Provider>
  );
};
export const useConfig = () => {
  const config = useContext(configContext);
  if (!config) {
    if (import.meta.env.DEV) {
      console.warn(
        "[useConfig] No ConfigProvider found in the tree. " +
          "Wrap your app with <ConfigProvider> to use this hook.",
      );
    }
    return siteConfig;
  }
  return config;
};
export const useConfigSection = (section) => {
  const config = useConfig();
  if (import.meta.env.DEV && !(section in config)) {
    console.warn(
      `[useConfigSection] Section "${section}" does not exist in the site config. ` +
        `Available sections: ${Object.keys(config).join(", ")}`,
    );
  }
  return config[section] ?? {};
};
