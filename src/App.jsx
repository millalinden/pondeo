import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import DemoPage from "./pages/DemoPage"
import ProductPage from "./pages/ProductPage"
import PrivacyPage from "./pages/PrivacyPage"

function App() {
  return (

    <Routes>
      <Route path="/" index element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/demo" element={<DemoPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
    </Routes>

  );
}

export default App;
