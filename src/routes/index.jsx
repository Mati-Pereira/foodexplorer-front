import { BrowserRouter } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import AppRoutes from "./AppRoutes";
import { useSelector } from "react-redux";

export const Routes = () => {
  const { user } = useSelector((state) => state.persisted.auth);
  console.log(user);
  return <BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>;
};
