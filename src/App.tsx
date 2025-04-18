import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NaukriPakki from './pages/NaukriPakki';
import CareerJourney from './pages/CareerJourney';
import Reviews from './pages/Reviews';
import FullStackPython from './pages/courses/FullStackPython';
import DataScience from './pages/courses/DataScience';
import FullStackDevelopment from './pages/courses/FullStackDevelopment';
import SAPCourse from './pages/courses/SAPCourse';
import SoftwareProgramming from './pages/courses/SoftwareProgramming';
import ChatBot from './components/ChatBot';

// ScrollToTop component to handle scroll behavior
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses/naukri-pakki" element={<NaukriPakki />} />
          <Route path="/courses/python-ai" element={<FullStackPython />} />
          <Route path="/courses/data-science" element={<DataScience />} />
          <Route path="/courses/fullstack" element={<FullStackDevelopment />} />
          <Route path="/courses/sap" element={<SAPCourse />} />
          <Route path="/courses/software-programming" element={<SoftwareProgramming />} />
          <Route path="/career-journey" element={<CareerJourney />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;