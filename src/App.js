import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext";
import MainRouter from "./MainRouter";

export default function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </AuthContextProvider>
  );
}
