import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeSection from "./pages/HomeSection";
import AboutSection from "./pages/AboutSection";
import ServicesSection from "./pages/ServicesSection";
import ReviewSection from "./pages/ReviewSection";
import ContactSection from "./pages/ContactSection";
import FooterSection from "./components/FooterSection";
import { FoodProvider } from "./context/FoodContext";
import FoodContainer from "./components/FoodContainer";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <Router>
      <FoodProvider>
        <Navbar />
        <Routes>
          <Route element={<HomeSection />} path="/" />
          <Route element={<FoodContainer />} path="/popular" />
          <Route element={<AboutSection />} path="/about" />
          <Route element={<ServicesSection />} path="/services" />
          <Route element={<ReviewSection />} path="/review" />
          <Route element={<ContactSection />} path="/contact" />
          <Route element={<Cart />} path="/cart" />
        </Routes>
        <FooterSection />
      </FoodProvider>
    </Router>
  );
};

export default App;
