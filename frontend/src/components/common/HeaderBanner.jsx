// frontend/src/components/common/HeaderBanner.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/global.scss'; // Đảm bảo import global.scss

// Đường dẫn tới ảnh banner: bgTL.jpg (đặt trong public/images)
// const bannerImage = '/images/bgTL.jpg'; // Không cần dùng biến này nếu set background trong CSS

// Đường dẫn tới logo mới: logoTL.jpg (đặt trong public/images)
const logoNew = '/images/logoTL.jpg'; // Đường dẫn tới file logoTL.jpg của bạn

const HeaderBanner = () => {
  return (
    <header
      className="main-header"
      // Background-image sẽ được xử lý trong global.scss để dễ dàng responsive hơn
    >
      {/* Vùng chứa nội dung logo và chữ, sẽ được căn giữa trên banner */}
      

      {/* Navigation links */}
      <nav className="main-nav-links">
        <ul>
          <li><Link to="/">Trang Chủ</Link></li>
          {/* <li><Link to="/tintuc">Tin Tức</Link></li> Thêm lại nếu bạn có trang tin tức */}
          {/* <li><Link to="/sukien">Sự Kiện</Link></li> Thêm lại nếu bạn có trang sự kiện */}
          {/* <li><Link to="/thongtinxudoan">Thông Tin Xứ Đoàn</Link></li> Thêm lại nếu bạn có trang thông tin xứ đoàn */}
          <li><Link to="/login">Đăng Nhập</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderBanner;