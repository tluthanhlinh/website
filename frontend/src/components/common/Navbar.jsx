// frontend/src/components/common/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaNewspaper, FaCalendarAlt, FaSignInAlt } from 'react-icons/fa'; // Thêm FaSignInAlt icon

const Navbar = () => {
  return (
    <nav>
      <span>Logo TNTT</span>
      <ul>
        <li><Link to="/"><FaHome /> Trang Chủ</Link></li>
        <li><Link to="/news"><FaNewspaper /> Bản Tin</Link></li>
        <li><Link to="/events"><FaCalendarAlt /> Sự Kiện</Link></li>
        <li><Link to="/login"><FaSignInAlt /> Đăng Nhập</Link></li> {/* Nút Đăng nhập */}
      </ul>
    </nav>
  );
};

export default Navbar;