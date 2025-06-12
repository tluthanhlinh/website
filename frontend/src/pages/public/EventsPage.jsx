// frontend/src/pages/public/EventsPage.jsx
import React, { useEffect, useState } from 'react';
import HeaderBanner from '../../components/common/HeaderBanner';
import Footer from '../../components/common/Footer';
import { Link } from 'react-router-dom';
import '../../styles/global.scss'; // Đảm bảo import global.scss

const EventsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const allEvents = [
    { id: 1, title: 'Sự kiện lớn sắp tới: Trại hè "Vươn Cao"', date: '15/07/2025', location: 'Địa điểm X', content: 'Nội dung sự kiện 1 về trại hè TNTT...' },
    { id: 2, title: 'Hội thảo thanh niên: Sống Đạo Giữa Đời', date: '20/08/2025', location: 'Địa điểm Y', content: 'Nội dung sự kiện 2 về buổi hội thảo cho giới trẻ...' },
    { id: 3, title: 'Ngày hội văn hóa ẩm thực', date: '01/09/2025', location: 'Sân Giáo xứ', content: 'Nội dung sự kiện 3 về ngày hội ẩm thực gây quỹ...' },
    { id: 4, title: 'Lễ ra mắt Ban Điều Hành mới', date: '15/09/2025', location: 'Nhà thờ Thánh Linh', content: 'Nội dung sự kiện 4 về lễ nhậm chức của BĐH...' },
  ];

  return (
    <div className="events-page">
      <HeaderBanner />
      <main className={`main-content ${isVisible ? 'fade-in' : ''}`}> {/* Áp dụng hiệu ứng fade-in */}
        <div className="container">
          <h2>Tất Cả Sự Kiện của Xứ Đoàn</h2>
          <div className="event-list">
            {allEvents.map(item => (
              <div className="event-item" key={item.id}>
                <h3>{item.title}</h3>
                <p className="event-date">Ngày: {item.date}</p>
                <p className="event-location">Địa điểm: {item.location}</p>
                <p>{item.content.substring(0, 150)}...</p>
                <Link to={`/events/${item.id}`} className="view-details">Xem chi tiết</Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;