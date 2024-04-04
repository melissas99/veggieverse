import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SearchPage from './pages/SearchPage/SearchPage';
import RecipePage from './pages/RecipePage/RecipePage';
import ContactPage from './pages/ContactPage/ContactPage';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {
  return (
    <Router>
      <Helmet>
        <title>VeggieVerse</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;




