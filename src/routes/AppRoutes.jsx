import { Navigate, Route, Routes } from "react-router-dom";
import AddProduct from "../pages/AddProduct";
import Details from "../pages/Details";
import EditProduct from "../pages/EditProduct";
import Home from "../pages/Home";
import { useSelector } from "react-redux";
import Orders from "../pages/Orders";
import OrdersHistory from "../pages/OrdersHistory";
import OrdersAdminHistory from "../pages/OrdersAdminHistory";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RoutesContainer from "../components/RoutesContainer";

const AppRoutes = () => {
  const { isAdmin } = useSelector((state) => state.persisted.auth);
  return (
    <RoutesContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/ordershistory" element={<OrdersHistory />} />
        {isAdmin ? (
          <>
            <Route path="/add" element={<AddProduct />} />
            <Route path="/edit/:id" element={<EditProduct />} />
            <Route path="/orderadminhistory" element={<OrdersAdminHistory />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </RoutesContainer>
  );
};

export default AppRoutes;
