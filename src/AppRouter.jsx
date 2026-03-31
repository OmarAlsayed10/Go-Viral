import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useConfig } from "./context/ConfigProvider";
import { getPageComponent } from "./registry";
const AppRouter = () => {
  const config = useConfig();
  const { pages = [] } = config;
  return (
    <Suspense>
      <Routes>
        {pages.map(({ path, component }) => {
          const PageComponent = getPageComponent(component);
          if (!PageComponent) return null;
          return <Route key={path} path={path} element={<PageComponent />} />;
        })}
      </Routes>
    </Suspense>
  );
};
export default AppRouter;
