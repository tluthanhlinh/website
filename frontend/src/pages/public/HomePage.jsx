// frontend/src/pages/public/HomePage.jsx
import React from 'react';
// import Navbar from '../../components/common/Navbar'; // Bỏ Navbar cũ
import HeaderBanner from '../../components/common/HeaderBanner'; // Import Banner mới
import Footer from '../../components/common/Footer';
import NewsItem from '../../components/public/NewsItem';
import EventItem from '../../components/public/EventItem';
import { Link } from 'react-router-dom'; // Cần Link cho "Xem tất cả"

const HomePage = () => {
  // Dữ liệu mẫu (giữ nguyên)
  const latestNews = [
    { id: 1, title: 'Tổng kết hoạt động tháng 5', date: '01/06/2025', excerpt: 'Những thành quả đạt được trong tháng 5 vừa qua.' },
    { id: 2, title: 'Hội thao thiếu nhi toàn đoàn', date: '25/05/2025', excerpt: 'Hình ảnh và kết quả từ hội thao sôi động.' },
  ];

  const upcomingEvents = [
    { id: 1, title: 'Ngày hội văn hóa TNTT', date: '15/07/2025', location: 'Nhà thờ X', description: 'Ngày hội giao lưu văn hóa, văn nghệ.' },
    { id: 2, title: 'Trại hè dã ngoại 2025', date: '01/08/2025', location: 'Khu du lịch sinh thái Y', description: 'Cắm trại, trò chơi lớn và lửa trại.' },
  ];

  return (
    <div>
      <HeaderBanner /> {/* Thay thế Navbar bằng HeaderBanner */}
      <main>
        {/* Giữ nguyên các phần tin tức và sự kiện */}
        <section className="homepage-section">
          <h2>Bản Tin Mới Nhất</h2>
          <div className="news-list">
            {latestNews.map(item => (
              <NewsItem
                key={item.id}
                title={item.title}
                date={item.date}
                excerpt={item.excerpt}
              />
            ))}
          </div>
          <p style={{ textAlign: 'right', marginTop: '1rem' }}><Link to="/news">Xem tất cả bản tin &raquo;</Link></p>
        </section>

        <section className="homepage-section">
          <h2>Sự Kiện Sắp Tới</h2>
          <div className="event-list">
            {upcomingEvents.map(item => (
              <EventItem
                key={item.id}
                title={item.title}
                date={item.date}
                location={item.location}
                description={item.description}
              />
            ))}
          </div>
          <p style={{ textAlign: 'right', marginTop: '1rem' }}><Link to="/events">Xem tất cả sự kiện &raquo;</Link></p>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default HomePage;