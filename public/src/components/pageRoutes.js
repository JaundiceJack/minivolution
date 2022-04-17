// Import router stuff
import { Route, Routes } from "react-router-dom";
// Import Page Components
import Home from "./pages/home/_home.js";
import Three from "./pages/three/_three.js";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/three" element={<Three />} />
    </Routes>
  );
};

export default PageRoutes;
