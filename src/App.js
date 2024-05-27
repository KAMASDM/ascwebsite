import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Services from "./pages/Services";
import SEOService from "./components/SEOService/SEOService";
import WebDevelopment from "./components/WebDevelopment/WebDevelopment";
import CrmerpServices from "./components/CRMERPServices.js/CrmerpServices";
import MobileAppService from "./components/MobileAppService/MobileAppService";
import Careers from "./pages/Careers";
import Solutions from "./pages/Solutions";
import ContactUs from "./pages/ContactUs";
import ECommerce from "./components/ECommers/ECommerce";
import HostingService from "./components/HostingService/HostingService";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <Router>
      <Header />
      <ToastContainer
        limit={1}
        theme="colored"
        position="top-center"
        autoClose={3000}
        className="toast-container"
      />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Solutions" element={<Solutions />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/SEO" element={<SEOService />} />
        <Route path="/Web-Development" element={<WebDevelopment />} />
        <Route path="/E-Commerce-Solutions" element={<ECommerce />} />
        <Route path="/CRM-ERP-Development" element={<CrmerpServices />} />
        <Route path="/Mobile-App-Development" element={<MobileAppService />} />
        <Route path="/Hosting" element={<HostingService />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
