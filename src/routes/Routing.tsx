import { createBrowserRouter } from "react-router";
import App from "../App";
import LandingPage from "../components/Landing/LandingPage";
import Components from "../pages/component-library/ComponentsPage";
import Templates from "../pages/TemplatesDocs/Templates";
import ShowcaseLibrary from "../pages/component-library/ShowcaseLibrary";
import FeatureShowcase from "../pages/libraryContainer/FeaturesLibrary";
import HerosLibrary from "../pages/libraryContainer/HerosLibrary";
import ButtonLibrary from "../pages/libraryContainer/ButtonLibrary";
import CardsLibrary from "../pages/libraryContainer/CardsLibrary";
import LocalAiLanding from "../pages/TemplatesDocs/LocalAiLanding/page";

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
          { path: "heros", element: <HerosLibrary /> },
          { path: "buttons", element: <ButtonLibrary /> },
          { path: "cards", element: <CardsLibrary /> },
        ],
      },
      { path: "/templates", element: <Templates /> },
    ],
  },
  { path: "/templates/demo/ailanding", element: <LocalAiLanding /> },
];
export const router = createBrowserRouter(routes);
