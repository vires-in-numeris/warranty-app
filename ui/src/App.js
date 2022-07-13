import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Dashboard from "./components/dashboard/Dashboard";
import Auth from "./components/auth/Auth";
import "./App.css";

const App = () => {
  const token = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        {token ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </>
        ) : (
          <>
            <Route path="*" element={<Navigate to="/auth" />} />
            <Route path="auth" exact element={<Auth />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
