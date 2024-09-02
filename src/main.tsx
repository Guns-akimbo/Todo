import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ContextProvider from "./lib/context/ContextProvider.tsx";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <KindeProvider
      clientId="e4767b7f58b04610a9c37df093e3f96a"
      domain="https://chukwuemerie.kinde.com"
      redirectUri="http://localhost:5173"
      logoutUri="http://localhost:5173"
    >
      <ContextProvider>
        <ToastContainer />
        <App />
      </ContextProvider>
    </KindeProvider>
  </React.StrictMode>
);
