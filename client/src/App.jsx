import React from "react";
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "../page/RegisterPage";
import LoginPage from "../page/LoginPage";
import ProductosPage from "../page/ProductosPage";
import ProtectedRouters from "../context/ProtectedRouters";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/*" element={<p>paila manito</p>} />

          <Route element={<ProtectedRouters />}>
            <Route path="/main" element={<ProductosPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
