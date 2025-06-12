// frontend/src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import các trang (pages)
import HomePage from './pages/public/HomePage';
import NewsPage from './pages/public/NewsPage';
import EventsPage from './pages/public/EventsPage';
import LoginPage from './pages/auth/LoginPage';
import AboutUsPage from './pages/public/AboutUsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Các Routes cho phần public (trang công khai) */}
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />

        {/* Các Routes cho phần auth */}
        <Route path="/login" element={<LoginPage />} />

        {/* Route cho trang 404 Not Found */}
        <Route path="*" element={<div>404 - Trang không tìm thấy</div>} />
      </Routes>
    </div>
  );
}

export default App;