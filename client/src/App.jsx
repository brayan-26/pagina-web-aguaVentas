import React from "react";
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "../page/RegisterPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/*" element={<p>paila manito</p>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
