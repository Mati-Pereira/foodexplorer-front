import { Route, Routes } from "react-router-dom";
import Details from "../pages/Details";
import Home from "../pages/Home";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
};

export default AppRoutes;
