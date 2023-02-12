import { BrowserRouter } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import AppRoutes from "./AppRoutes";
import { useSelector } from "react-redux";

export const Routes = () => {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  );
};
