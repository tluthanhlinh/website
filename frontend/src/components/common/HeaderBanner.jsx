// frontend/src/components/common/HeaderBanner.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/global.scss'; // Đảm bảo import global.scss

// Đường dẫn tới ảnh banner: bgTL.jpg
// Dòng này có thể bị gạch chân trong VS Code nếu không được sử dụng trực tiếp trong JSX
// Tuy nhiên, nó không gây lỗi runtime và hữu ích cho việc tham khảo đường dẫn ảnh.
const bannerImage = '/images/bgTL.jpg'; 

const HeaderBanner = () => {
  return (
    <header
      className="main-header"
      // Anh/chị đã comment dòng style này vì background-image đã được xử lý trong global.scss.
      // Nếu em muốn đặt ảnh trực tiếp trong JSX, có thể bỏ comment dòng này và xóa background-image trong global.scss
      // style={{ backgroundImage: `url(${bannerImage})` }} 
    >
      {/* KHÔNG CÒN NỘI DUNG CHỮ HOẶC LOGO TRONG HEADERBANNER NỮA, CHỈ CÓ ẢNH NỀN THEO YÊU CẦU CỦA EM */}
      
      {/* Navigation vẫn giữ nguyên vị trí dưới cùng của header */}
      <nav className="main-nav-links">
        <ul>
          <li><Link to="/">Trang Chủ</Link></li>
          {/* Mục "Thông tin Xứ Đoàn" đã được loại bỏ hoàn toàn khỏi đây theo yêu cầu của em */}
          <li><Link to="/login">Đăng Nhập</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderBanner;