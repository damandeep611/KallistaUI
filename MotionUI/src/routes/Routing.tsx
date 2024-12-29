import { createBrowserRouter } from "react-router";
import App from "../App";
import LandingPage from "../components/LandingPage";
import Components from "../pages/componentsShowcase/Components";
import Templates from "../pages/templatesShowcase/Templates";
import ShowcaseLibrary from "../pages/componentsShowcase/ShowcaseLibrary";
import FeatureShowcase from "../pages/Features/FeaturesShowcase";

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
        ],
      },
      { path: "/templates", element: <Templates /> },
    ],
  },
];
export const router = createBrowserRouter(routes);
