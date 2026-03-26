import { lazy } from "react";

import Hero from "../components/hero";
import MediaBanner from "../sharedComponents/mediabanner/index.jsx";

const pageRegistry = {
    Home: lazy(() => import("../pages/home/Home.jsx")),
    Contact: lazy(() => import("../pages/contact/Contact.jsx")),
    About: lazy(() => import("../pages/about/About.jsx")),
    OurWork: lazy(() => import("../pages/ourwork/OurWork.jsx")),
    ProjectDetail: lazy(() => import("../pages/ourwork/ProjectDetail.jsx")),
};

const sectionRegistry = {
    hero: Hero,
    mediaBanner: MediaBanner,
};

export function getPageComponent(name) {
    return pageRegistry[name] ?? null;
}

export function getSectionComponent(type) {
    return sectionRegistry[type] ?? null;
}

export { pageRegistry, sectionRegistry };
