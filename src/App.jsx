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
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
          <Route element={<AboutPage />} />
          <Route element={<ContactPage />} />
          <Route element={<DemoPage />} />
          <Route element={<ProductPage />} />
          <Route element={<PrivacyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
