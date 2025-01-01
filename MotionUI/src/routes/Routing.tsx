import { createBrowserRouter } from "react-router";
import App from "../App";
import LandingPage from "../components/LandingPage";
import Components from "../pages/component-library/ComponentsPage";
import Templates from "../pages/templatesShowcase/Templates";
import ShowcaseLibrary from "../pages/component-library/ShowcaseLibrary";
import FeatureShowcase from "../pages/libraryContainer/FeaturesLibrary";
import HerosLibrary from "../pages/libraryContainer/HerosLibrary";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <LandingPage /> },
      {
        path: "/components",
        element: <Components />,
        children: [
          { path: "/components", element: <ShowcaseLibrary /> },
          { path: "features", element: <FeatureShowcase /> },
          {path: "heros", element: <HerosLibrary/>}
        ],
      },
      { path: "/templates", element: <Templates /> },
    ],
  },
];
export const router = createBrowserRouter(routes);
