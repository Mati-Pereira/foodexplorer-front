import { BrowserRouter } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import AppRoutes from "./AppRoutes";
import { useSelector } from "react-redux";

export const Routes = () => {
  const state = useSelector((state) => state);
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  );
};
