import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import "@fontsource/poppins";
import "@fontsource/roboto";
import { BrowserRouter } from "react-router-dom";
import AuthRoutes from "./routes/AuthRoutes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AuthRoutes />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
