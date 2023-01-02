import { Route } from "react-router";
import { Routes } from "react-router-dom";
import DashboardPage from "../pages/Dashboard";
import LandingPage from "../pages/Landing";

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/dashboard" element={<DashboardPage />} />
  </Routes>
);

export default RoutesMain;
