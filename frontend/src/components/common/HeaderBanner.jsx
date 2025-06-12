// frontend/src/components/common/HeaderBanner.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaNewspaper, FaCalendarAlt, FaSignInAlt } from 'react-icons/fa'; // Icons cho các link

// Import hình ảnh logo và background (em cần tự thêm ảnh vào thư mục assets/images)
// Ví dụ: import logoImage from '../../assets/images/your-logo.png';
// Ví dụ: import bannerBackground from '../../assets/images/your-banner-bg.jpg';
// Hiện tại dùng placeholder để không bị lỗi nếu chưa có ảnh
const logoImage = ''; // Thay bằng đường dẫn đến logo của em, ví dụ: '/src/assets/images/logo-tntt.png'
const bannerBackground = ''; // Thay bằng đường dẫn đến background của em, ví dụ: '/src/assets/images/banner-bg.jpg'

const HeaderBanner = () => {
  return (
    <header className="main-header">
      <div className="banner-content">
        {logoImage && <img src={logoImage} alt="Logo TNTT" className="banner-logo" />}
        <h1 className="banner-title">Đoàn Thiếu Nhi Thánh Thể</h1>
        <p className="banner-subtitle">Giáo Xứ Thánh Linh Q9</p>
        {/* Có thể thêm khẩu hiệu hoặc thông điệp ở đây */}
      </div>

      {/* Phần điều hướng đặt dưới banner, hoặc có thể là overlay tùy thiết kế */}
      <nav className="main-nav-links">
        <ul>
          <li><Link to="/"><FaHome /> Trang Chủ</Link></li>
          <li><Link to="/news"><FaNewspaper /> Bản Tin</Link></li>
          <li><Link to="/events"><FaCalendarAlt /> Sự Kiện</Link></li>
          <li><Link to="/login"><FaSignInAlt /> Đăng Nhập</Link></li>
        </ul>
      </nav>

      {/* Nếu có background image, nó sẽ được đặt bằng CSS */}
    </header>
  );
};

export default HeaderBanner;