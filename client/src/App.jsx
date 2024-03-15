import React from "react";
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "../page/RegisterPage";
import LoginPage from "../page/LoginPage";
import ProductosPage from "../page/ProductosPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<p>paila manito</p>} />
          <Route path="/main" element={<ProductosPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
