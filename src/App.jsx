import { Suspense } from "react";
import { Provider } from "./components/ui/provider";
import { Toaster } from "./components/ui/toaster.jsx";
import { ConfigProvider } from "./context/ConfigProvider.jsx";
import { TranslationProvider } from "./i18n/TranslationProvider";
import siteConfig from "./config/siteConfig.js";
import AppLayout from "./AppLayout";
import AppRouter from "./AppRouter";

function App() {
  return (
    <Provider>
      <ConfigProvider config={siteConfig}>
        <TranslationProvider defaultLocale="en">
          <Toaster />
          <Suspense>
            <AppLayout>
              <AppRouter />
            </AppLayout>
          </Suspense>
        </TranslationProvider>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
