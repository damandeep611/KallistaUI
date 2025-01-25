import { Outlet } from "react-router";
import Navigation from "./components/layout/Navigation";

function App() {
  return (
    <div className="bg-white text-black dark:text-white dark:bg-black">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
