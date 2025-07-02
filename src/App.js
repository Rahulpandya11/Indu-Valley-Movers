import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Loader from './components/Loader/Loader';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactSection from './components/ContactSection/ContactSection';
import ContactWidget from './components/ContactWidget/ContactWidget';
import StatsSection from './components/StatsSection/StatsSection';
import Footer from './components/Footer/Footer';
import ContactPage from './pages/ContactPage';
import ClientsSection from './components/ClientsSection/ClientsSection';
import ClientsPage from './pages/ClientsPage';
import ServicesPage from './pages/ServicesPage';
import AboutUsPage from './pages/AboutUsPage';
import PriceCalculatorPage from './pages/PriceCalculatorPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Loader />
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Services />
              <Testimonials />
              <ContactSection />
              <StatsSection />
              <ClientsSection />
            </main>
          } />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/price-calculator" element={<PriceCalculatorPage />} />
        </Routes>
        <Footer />
        <ContactWidget />
      </div>
    </Router>
  );
}

export default App;
