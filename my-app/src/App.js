import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const location = useLocation();
  const hideNavbarPaths = ["/searchcards"];

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <Outlet />
    </>
  );
}

export default App;

