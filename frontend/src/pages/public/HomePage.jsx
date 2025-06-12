// frontend/src/pages/public/HomePage.jsx
import React from 'react';
import HeaderBanner from '../../components/common/HeaderBanner';
import Footer from '../../components/common/Footer';
import '../../styles/global.scss'; // Đảm bảo import global.scss

// Định nghĩa trực tiếp NewsItem và EventItem ở đây để tránh lỗi import "Failed to resolve import"
// **LƯU Ý QUAN TRỌNG:** Trong dự án thực tế, em NÊN tạo các file riêng cho NewsItem.jsx và EventItem.jsx
// Ví dụ: frontend/src/components/public/NewsItem.jsx và frontend/src/components/public/EventItem.jsx
// và sau đó import chúng vào đây để code dễ quản lý hơn. Anh/chị để tạm ở đây để em dễ dàng kiểm tra.

const NewsItem = ({ title, date, content }) => (
  <div className="news-item">
    <h3>{title}</h3>
    <p className="news-date">{date}</p>
    <p>{content}</p>
    <a href="#" className="read-more">Đọc thêm</a>
  </div>
);

const EventItem = ({ title, date, location, content }) => (
  <div className="event-item">
    <h3>{title}</h3>
    <p className="event-date">{date}</p>
    <p className="event-location">{location}</p>
    <p>{content}</p>
    <a href="#" className="view-details">Xem chi tiết</a>
  </div>
);


const HomePage = () => {
  // Dữ liệu giả định cho các bài viết và sự kiện
  // Em sẽ thay thế bằng dữ liệu thực tế từ API hoặc nguồn khác sau này
  const latestNews = [
    { id: 1, title: "Lễ Kỷ Niệm 15 Năm Thành Lập Xứ Đoàn", date: "10/06/2025", content: "Buổi lễ trang trọng với sự tham gia của Cha Xứ và toàn thể đoàn sinh..." },
    { id: 2, title: "Buổi Sinh Hoạt Huynh Trưởng Tháng 6", date: "05/06/2025", content: "Huynh Trưởng cùng nhau ôn luyện các bài học mới và chia sẻ kinh nghiệm..." },
  ];

  const upcomingEvents = [
    { id: 1, title: "Trại Hè Thiếu Nhi Thánh Thể 2025", date: "20/07/2025", location: "Khu du lịch sinh thái", content: "Trại hè với nhiều hoạt động vui chơi, học hỏi và rèn luyện đạo đức..." },
    { id: 2, title: "Ngày Hội Yêu Thương - Phát quà cho trẻ em nghèo", date: "15/08/2025", location: "Nhà thờ Thánh Linh", content: "Chương trình bác ái nhằm chia sẻ yêu thương đến các em nhỏ khó khăn..." },
  ];

  return (
    <div>
      <HeaderBanner />
      <main className="main-content container"> {/* Thêm class container để giới hạn chiều rộng */}
        {/* Phần Bài viết mới */}
        <section className="homepage-section">
          <h2>Bài viết mới nhất</h2>
          <div className="news-list">
            {latestNews.map(news => (
              <NewsItem key={news.id} title={news.title} date={news.date} content={news.content} />
            ))}
          </div>
        </section>

        {/* Phần Sự kiện sắp tới */}
        <section className="homepage-section">
          <h2>Sự kiện sắp tới</h2>
          <div className="event-list">
            {upcomingEvents.map(event => (
              <EventItem key={event.id} title={event.title} date={event.date} location={event.location} content={event.content} />
            ))}
          </div>
        </section>
        
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;