import React from "react";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ProductosPage from "../pages/ProductosPage";
import ProtectedRouters from "../contexts/ProtectedRouters";
import "../assets/style/style.css"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/*" element={<p>paila manito</p>} />
            <Route path="/main" element={<ProductosPage />} />

          <Route element={<ProtectedRouters />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
