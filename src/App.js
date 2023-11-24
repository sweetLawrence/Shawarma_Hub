import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import SpecificMenu from './components/SpecificMenu';
import OurMenu from './pages/OurMenu';
import Footer from './components/Footer';
import ClientRemarks from './pages/ClientRemarks';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <OurMenu />
      <ClientRemarks />
      <Footer />
      {/* <SpecificMenu /> */}
     
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>

      </Router>
    </div>
  );
}

export default App;
