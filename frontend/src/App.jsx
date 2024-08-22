import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home';
import Resume from './pages/resume';
import Contact from './pages/contact';
import PageTransition from './components/pageTransition';
import StairTransition from './components/stairTransition';

function App() {
  return (
      <Router>
        <StairTransition />
        <PageTransition>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>
      </Router>
  );
}

export default App;
