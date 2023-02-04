import { Route, Routes } from "react-router-dom";
import AddProduct from "../pages/AddProduct";
import Details from "../pages/Details";
import Home from "../pages/Home";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/addproduct" element={<AddProduct />} />
    </Routes>
  );
};

export default AppRoutes;
