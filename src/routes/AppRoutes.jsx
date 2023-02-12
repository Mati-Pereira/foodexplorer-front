import { Navigate, Route, Routes } from "react-router-dom";
import AddProduct from "../pages/AddProduct";
import Details from "../pages/Details";
import EditProduct from "../pages/EditProduct";
import Home from "../pages/Home";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { api } from "../services/api";

const AppRoutes = () => {
  const { isAdmin, token } = useSelector((state) => state.persisted.auth);

  useEffect(() => {
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      {isAdmin ? (
        <>
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit" element={<EditProduct />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/" />} />
      )}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
