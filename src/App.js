import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Footer from './components/Footer';
import ClientRemarks from './pages/ClientRemarks';
import Location from './pages/Location';
import { useState } from 'react';
import MobileNav from './components/MobileNav';
import MainPage from './pages/MainPage';
import FullMenu from './pages/FullMenu';
import Contacts from './pages/Contacts';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/menu" element={<FullMenu />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
