import { createBrowserRouter } from "react-router";
import App from "../App";
import LandingPage from "../components/LandingPage";
import Components from "../pages/Components";
import Templates from "../pages/Templates";

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
