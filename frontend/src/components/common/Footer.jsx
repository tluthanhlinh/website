// frontend/src/components/common/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <h3>Liên Hệ</h3>
          <p>Địa chỉ: [Địa chỉ Đoàn/Giáo xứ của bạn]</p>
          <p>Email: [Email liên hệ]</p>
          <p>Điện thoại: [Số điện thoại liên hệ]</p>
        </div>
        <div>
          <h3>Thời Gian Hoạt Động</h3>
          <p>Sáng Chủ Nhật: [Thời gian]</p>
          <p>Chiều Thứ Bảy: [Thời gian]</p>
          <p>[Các thời gian khác]</p>
        </div>
        <div>
          <h3>Sơ Đồ Ban Điều Hành</h3>
          <p>Trưởng Đoàn: [Tên Trưởng Đoàn]</p>
          <p>Phó Trưởng Đoàn: [Tên Phó Trưởng Đoàn]</p>
          <p>Thư Ký: [Tên Thư Ký]</p>
          <p>Thủ Quỹ: [Tên Thủ Quỹ]</p>
        </div>
      </div>
      <div>
        <p>&copy; {new Date().getFullYear()} Thiếu Nhi Thánh Thể. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;