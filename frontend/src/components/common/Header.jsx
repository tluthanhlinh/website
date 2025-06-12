// frontend/src/components/common/Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          Xứ Đoàn <span>Thánh Linh</span>
        </Link>
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                Trang Chủ
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about-us" className={location.pathname === '/about-us' ? 'active' : ''}>
                Giới Thiệu
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/events" className={location.pathname === '/events' ? 'active' : ''}>
                Sự Kiện
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/news" className={location.pathname === '/news' ? 'active' : ''}>
                Tin Tức
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                Liên Hệ
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/new-article" className={location.pathname === '/admin/new-article' ? 'active' : ''}>
                Đăng Bài
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;