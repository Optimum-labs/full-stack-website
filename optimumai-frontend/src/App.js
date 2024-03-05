import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Projects';
import MockInterviewBot from './pages/MockInterviewBot';
import Contact from './pages/Contact';
import "./assets/css/tailwind.css";
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Login  from './components/form/Login';
import Pricing from './pages/Pricing';
import Team from './components/team/Team';
import Scroll from './components/common/Ṣcroll';
import Community from './pages/Community';

function App() {
  return (
    <Router>
      <div className='App'>   
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/products" element={<Products />} />
          <Route path="/mock-interview-bot" element={<MockInterviewBot />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Login />} />
          <Route path="/optimumai-webdev" element={<Home />} />
          <Route path="/community" element={<Community />} />
        </Routes>
        <button className="back-to-top fixed bottom-8 left-auto right-8 z-[999] hidden h-10 w-10 items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-dark" style={{ display: 'inline-block' }}>
        <Scroll />
      </button>
        <Footer />        
      </div>
    </Router>
  );
}

export default App;
