import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/common/LandingPage';
import AboutUsPage from './pages/AboutUsPage';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ServicesComponent from './pages/ServicesComponent';
import SEOService from './pages/SEOService';
import WebDevelopmentComponent from './pages/WebDevelopmentComponent';
import EnquiryForm from './components/tools/EnquiryForm';
import ECommerceSolutionsComponent from './pages/ECommerceSolutionsComponent';
import CrmerpService from './pages/CrmerpService';
import CRMERPEnquiryForm from './components/tools/CRMERPEnquiryForm';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/" element={<ServicesComponent />} />
        <Route path="/seo" element={<SEOService />} />
        <Route path="/web-development" element={<WebDevelopmentComponent />} />
        
                <Route path="/web-development/enquiry" element={<EnquiryForm />} />
                <Route path="/ecommerce" element={<ECommerceSolutionsComponent />} />
                <Route path="/ecommerce/enquiry" element={<EnquiryForm />} />
                <Route path="/crm-erp" element={<CrmerpService />} />
                {/* <Route path="/CRMERPEnquiryForm" element={<CRMERPEnquiryForm />} /> */}


   

        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
