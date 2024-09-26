import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import OfficeBearers from './components/OfficeBearers';
import Wings from './components/Wings';
import Activities from './components/Activities';
import Podcasts from './components/Podcasts';
import Reports from './components/Reports';
import Projects from './components/Projects';
// import Archives from './components/Archives';
import ContactUs from './components/ContactUs';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/office-bearers" element={<OfficeBearers />} />
          <Route path="/wings" element={<Wings />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;