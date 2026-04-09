import { Suspense } from "react";
import { Provider } from "./components/ui/provider";
import { Toaster } from "./components/ui/toaster.jsx";
import { ConfigProvider } from "./context/ConfigProvider.jsx";
import { TranslationProvider } from "./i18n/TranslationProvider";
import siteConfig from "./config/siteConfig.js";
import AppLayout from "./AppLayout";
import AppRouter from "./AppRouter";
import ScrollToTop from "./components/scrollToTop";
import Maintenance from "./pages/Maintenance";

const App = () => {
  return (
    <Provider>
      <ScrollToTop />
      <ConfigProvider config={siteConfig}>
        <TranslationProvider defaultLocale="en">
          <Toaster />
          <Suspense>
            {/* <AppLayout>
              <AppRouter />
            </AppLayout> */}
            <Maintenance />
          </Suspense>
        </TranslationProvider>
      </ConfigProvider>
    </Provider>
  );
};

export default App;
