import { Navigate, Route, Routes } from "react-router-dom";
import AddProduct from "../pages/AddProduct";
import Details from "../pages/Details";
import EditProduct from "../pages/EditProduct";
import Home from "../pages/Home";
import { useSelector } from "react-redux";

const AppRoutes = () => {
  const { isAdmin } = useSelector((state) => state.persisted.auth);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      {isAdmin ? (
        <>
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/" />} />
      )}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
