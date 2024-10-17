import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import SubmissionSuccess from './SubmissionSuccess';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation bar */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/submission-success" element={<SubmissionSuccess />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;