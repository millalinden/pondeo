import React, { useEffect } from "react";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DemoPage from "./pages/DemoPage";
import ProductPage from "./pages/ProductPage";
import PrivacyPage from "./pages/PrivacyPage";
import PricingPage from "./pages/PricingPage";
import LoginSignup from "./pages/LoginSignup";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </>
  );
}

export default App;
