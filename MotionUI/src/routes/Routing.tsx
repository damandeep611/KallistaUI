import { createBrowserRouter } from "react-router";
import App from "../App";
import LandingPage from "../components/LandingPage";
import Components from "../pages/componentsShowcase/Components";
import Templates from "../pages/templatesShowcase/Templates";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/components", element: <Components /> },
      { path: "/templates", element: <Templates /> },
    ],
  },
];
export const router = createBrowserRouter(routes);
