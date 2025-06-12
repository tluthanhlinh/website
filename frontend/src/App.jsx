// frontend/src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/public/HomePage';
import NewsPage from './pages/public/NewsPage';
import EventsPage from './pages/public/EventsPage';
import LoginPage from './pages/auth/LoginPage'; // Import LoginPage
import './styles/global.scss'; // Đảm bảo đã đổi thành .scss

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/login" element={<LoginPage />} /> {/* Thêm Route cho trang đăng nhập */}
      </Routes>
    </div>
  );
}

export default App;