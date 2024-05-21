import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Services from "./pages/Services";
import SEOService from "./components/SEOService/SEOService";
import WebDevelopment from "./components/WebDevelopment/WebDevelopment";
import CrmerpServices from "./components/CRMERPServices.js/CrmerpServices";
import MobileAppService from "./components/MobileAppService/MobileAppService";
import CaseStudy from "./pages/CaseStudy";
import Careers from "./pages/Careers";
import Solutions from "./pages/Solutions";
import ContactUs from "./pages/ContactUs";
import ECommerce from "./components/ECommers/ECommerce";
import CRMERPEnquiryForm from "./components/Forms/CRMERPEnquiryForm";
import EnquiryForm from "./components/Forms/EnquiryForm";
import HostingService from "./components/HostingService/HostingService";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/case-studies" element={<CaseStudy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/seo" element={<SEOService />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/web-development/enquiry" element={<EnquiryForm />} />
        <Route path="/ecommerce" element={<ECommerce />} />
        <Route path="/ecommerce/enquiry" element={<EnquiryForm />} />
        <Route path="/crm-erp" element={<CrmerpServices />} />
        <Route path="/CRMERPEnquiryForm" element={<CRMERPEnquiryForm />} />
        <Route path="/mobile-app" element={<MobileAppService />} />
        <Route path="/hosting" element={<HostingService />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
