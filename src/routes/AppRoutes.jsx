import { Route, Routes } from "react-router-dom";
import AddProduct from "../pages/AddProduct";
import Details from "../pages/Details";
import EditProduct from "../pages/EditProduct";
import Home from "../pages/Home";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/edit" element={<EditProduct />} />
    </Routes>
  );
};

export default AppRoutes;
