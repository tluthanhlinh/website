// frontend/src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes và Route

// Import các trang (pages)
import HomePage from './pages/public/HomePage';
import NewsPage from './pages/public/NewsPage';
import EventsPage from './pages/public/EventsPage';
import LoginPage from './pages/auth/LoginPage'; // Trang đăng nhập

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Các Routes cho phần public (trang công khai) */}
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/login" element={<LoginPage />} /> {/* Route cho trang đăng nhập */}

        {/* Ví dụ về routes cho phần private (cần đăng nhập) */}
        {/* <Route path="/admin" element={<AdminDashboard />} /> */}
        {/* <Route path="/profile" element={<UserProfile />} /> */}

        {/* Route cho trang 404 Not Found (tùy chọn) */}
        <Route path="*" element={<div>404 - Trang không tìm thấy</div>} />
      </Routes>
    </div>
  );
}

export default App; // Đảm bảo có dòng export default này