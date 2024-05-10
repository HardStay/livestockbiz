import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import LandingPage from "./pages/LandingPage/LandingPage";
import { DashboardPage, DashboardPageGovernment } from "./pages/Dashboard/DashboardPage";
import { Navigate } from "react-router-dom";


export default function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route default path="/home" element={<LandingPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dashboardGovernment" element={<DashboardPageGovernment />} />
            <Route path="/" element={<Navigate to="/home" replace={true} />} />

          </Routes>
        </Router>

      </ThemeProvider>
    </>
  );
}
