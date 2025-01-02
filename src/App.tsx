import { Outlet } from "react-router";
import Navigation from "./components/layout/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default App;
