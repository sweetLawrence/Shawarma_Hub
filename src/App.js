import './App.css';
import { BrowserRouter as Router, Routes, Route,useLocation } from 'react-router-dom'
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
import OrderPage from './components/OrderPage';
import { useEffect } from 'react';

function App() {
  // const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  // const toggleMobileNav = () => {
  //     setMobileNavOpen(!mobileNavOpen);
  // };

  // const closeMobileNav = () => {
  //     setMobileNavOpen(false);
  // };

  const toggleMobileNav = () => {
    setMobileNavVisible(!mobileNavVisible);
  };
  const closeMobileNav = () => {
    setMobileNavVisible(false);
  };

  // reset scroll height 😁
  

  return (
    <div className="App">
      <Router>
        <Navbar toggleMobileNav={toggleMobileNav}/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/menu" element={<FullMenu />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/payment" element={<OrderPage />} />
        </Routes>
        {mobileNavVisible && <MobileNav closeMobileNav={closeMobileNav} />}
      </Router>
      
      <Footer />
    </div>
  );
}

export default App;
