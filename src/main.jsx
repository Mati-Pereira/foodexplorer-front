import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import "@fontsource/poppins";
import "@fontsource/roboto";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import AppProvider from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <AppRoutes />
        </ThemeProvider>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
