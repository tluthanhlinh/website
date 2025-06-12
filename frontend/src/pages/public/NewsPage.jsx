// frontend/src/pages/public/NewsPage.jsx
import React, { useEffect, useState } from 'react';
import HeaderBanner from '../../components/common/HeaderBanner';
import Footer from '../../components/common/Footer';
import { Link } from 'react-router-dom';
import '../../styles/global.scss'; // Đảm bảo import global.scss

const NewsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const allNews = [
    { id: 1, title: 'Tin tức tổng hợp 1: Giáo xứ chuẩn bị mừng lễ', date: '01/01/2025', content: 'Nội dung tin tức 1 về các hoạt động chuẩn bị...' },
    { id: 2, title: 'Tin tức tổng hợp 2: Lớp Giáo lý khai giảng', date: '02/01/2025', content: 'Nội dung tin tức 2 về việc khai giảng các lớp giáo lý...' },
    { id: 3, title: 'Tin tức tổng hợp 3: Hoạt động thể thao của Đoàn', date: '05/01/2025', content: 'Nội dung tin tức 3 về giải bóng đá mini...' },
    { id: 4, title: 'Tin tức tổng hợp 4: Chia sẻ kinh nghiệm mục vụ', date: '10/01/2025', content: 'Nội dung tin tức 4 về buổi gặp gỡ các huynh trưởng...' },
  ];

  return (
    <div className="news-page">
      <HeaderBanner />
      <main className={`main-content ${isVisible ? 'fade-in' : ''}`}> {/* Áp dụng hiệu ứng fade-in */}
        <div className="container">
          <h2>Tất Cả Tin Tức của Xứ Đoàn</h2>
          <div className="news-list">
            {allNews.map(item => (
              <div className="news-item" key={item.id}>
                <h3>{item.title}</h3>
                <p className="news-date">Ngày đăng: {item.date}</p>
                <p>{item.content.substring(0, 150)}...</p>
                <Link to={`/news/${item.id}`} className="read-more">Đọc thêm</Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewsPage;