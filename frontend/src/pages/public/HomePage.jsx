import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/common/Layout'; // SỬA ĐƯỜNG DẪN: Đường dẫn đúng đến Layout component

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        // --- Dữ liệu giả lập bài viết ---
        // Đảm bảo dữ liệu này đồng bộ với ArticleDetailPage.jsx
        const articlesData = [
          {
            id: 0,
            title: 'BELEM II - LỜI CẢM ƠN',
            date: '12/06/2025',
            excerpt: 'Lời đầu tiên, cho chúng con xin được gửi lời cảm ơn chân thành nhất đến Cha Chánh Xứ Giuse, Cha Tuyên Uý Anphongso đã tạo điều kiện để chúng con có thể tổ chức được một ngày Sa mạc thành công tốt đẹp. Sự kiện đánh dấu chặng đường phát triển...',
            link: '/article/belem-2-loi-cam-on',
            images: [ 
              //'/images/gallery/belem2.jpg',
              // Thêm các ảnh khác nếu có
            ],
            fullContent: `
              <p><span class="icon heart-red">❤️</span><span class="icon heart-red">❤️</span><span class="icon heart-red">❤️</span> BELEM II - LỜI CẢM ƠN <span class="icon heart-red">❤️</span><span class="icon heart-red">❤️</span><span class="icon heart-red">❤️</span></p>
              <p><span class="icon heart-red">❤️</span> Lời đầu tiên, cho chúng con xin được gửi lời cảm ơn chân thành nhất đến Cha Chánh Xứ Giuse, Cha Tuyên Uý Anphongso đã tạo điều kiện để chúng con có thể tổ chức được một ngày Sa mạc thành công tốt đẹp. Cảm ơn Quý Cha đã luôn yêu thương, cầu nguyện và đồng hành với chúng con trong suốt khoảng thời gian chuẩn bị và tổ chức Sa mạc. </p>
              <p><span class="icon heart-orange">🧡</span> Chúng con xin được gửi lời cảm ơn đến Quý Cha, Quý Thầy Dòng Phanxico đã rộng lòng yêu thương, tạo điều kiện và hỗ trợ chúng con có được một địa điểm thuận lợi, đầy ấm áp và thiêng liêng để tổ chức Sa mạc.</p>
              <p><span class="icon heart-brown">🤎</span> Chúng con xin chân thành cảm ơn Quý Thầy Dòng Phanxico đã nhiệt tình hỗ trợ và đồng hành cùng chúng con trong suốt thời gian tổ chức Sa mạc. Sự giúp đỡ tận tình, vui vẻ và đầy nhiệt huyết của Quý Thầy đã góp phần không nhỏ vào sự thành công của Sa mạc Belem 2.</p>
              <p><span class="icon heart-yellow">💛</span> Chúng con cũng xin gửi lời tri ân sâu sắc đến Quý Ân nhân và Quý Phụ huynh. Chính nhờ sự quảng đại và lời cầu nguyện của Quý vị mà Sa mạc đã diễn ra một cách tốt đẹp. Sự tin tưởng và ủng hộ của Quý ân nhân và Quý phụ huynh là nguồn động lực lớn lao để chúng con càng vững bước trên hành trình phục vụ các em Thiếu nhi.</p>
              <p><span class="icon heart-red">❤️</span> Chúng em xin chân thành cảm ơn đến các anh chị Huynh Trưởng, Dự Trưởng đã nhiệt tình cộng tác, đồng hành và hy sinh trong suốt thời gian tổ chức Sa mạc. Sự năng động, trách nhiệm và tinh thần phục vụ của các anh chị đã góp phần tạo nên một Sa mạc ý nghĩa và thành công tốt đẹp. Từ những công việc âm thầm cho đến sự hiện diện tích cực nơi từng hoạt động, tất cả đều là món quà quý giá mà các anh chị đã dành tặng cho tất cả các Sa mạc sinh của Belem 2.</p>
              <p><span class="icon heart-blue">💙</span><span class="icon heart-green">💚</span> Và cuối cùng, cảm ơn đến tất cả các bạn Sa mạc sinh của Sa mạc Belem 2. Cảm ơn các bạn đã tham gia rất nhiệt tình, hết mình. Những nụ cười, sự cố gắng của các bạn chính là động lực lớn lao cho các anh chị. Hy vọng rằng, qua Sa mạc Belem 2 các bạn sẽ có thật nhiều kỷ niệm khó quên. </p>
              <p><span class="icon heart-red">❤️</span> Một lần nữa, chúng con xin chân thành cảm ơn đến Quý Cha, Quý Thầy, Quý ân nhân, Quý phụ huynh, các anh chị Huynh trưởng, Dự trưởng và toàn thể Sa mạc sinh. Nguyện xin Thiên Chúa là Cha nhân lành, qua lời chuyển cầu của Mẹ Maria ban muôn ơn lành và trả công bội hậu cho tất cả Quý vị. Xin ngọn lửa yêu thương và phục vụ tiếp tục được thắp sáng trong mỗi người chúng ta.</p>
              <h3>XIN CẢM ƠN VÀ HẸN GẶP LẠI TẤT CẢ CÁC EM THIẾU NHI TẠI SA MẠC BELEM III.</h3>
              <p>Dưới đây là phần các bạn mong chờ nhất nè. Ban Truyền Thông xin gửi đến các bạn Link hình của Sa mạc Belem 2. Truy cập vào đây để xem trọn bộ hình ảnh của Sa mạc nhé. <a href="https://drive.google.com/.../1SIujh2GjpT2F4wDRRLZx..." target="_blank" rel="noopener noreferrer">Link hình Google Drive</a></p>
              <p>#Belem2 #Hanhtrinhcuahyvong</p>
            `,
          },
          {
            id: 1, 
            title: 'DAMAS I - HÀNH TRÌNH HY VỌNG',
            date: '08/06/2025', 
            excerpt: 'Chỉ còn vài ngày nữa thôi là đến ngày chúng ta "Lên Đường" đến "Damas I" rồiiii. Hãy cùng chúng mình chuẩn bị hành trang thật đầy đủ để chúng ta có một kỳ trại thật trọn vẹn và ý nghĩa...', 
            link: '/article/damas-1-hanh-trinh-hy-vong', 
            images: [ 
              // '/images/gallery/1.jpg',
              // '/images/gallery/2.jpg',
              //  '/images/gallery/3.jpg',
              //   '/images/gallery/4.jpg',
            ],
            fullContent: `
              <p><span class="icon sparkle">✨</span> Soạn đồ đi trại đi chưa người đẹp?? <span class="icon thinking-face">🤔</span></p>
              <p><span class="icon sparkle">✨</span> Chỉ còn vài ngày nữa thôi là đến ngày chúng ta "Lên Đường" đến "Damas I" rồiiii. </p>
              <p><span class="icon heart-yellow">💛</span> Vậy nên hãy cùng chúng mình chuẩn bị hành trang thật đầy đủ để chúng ta có một kỳ trại thật trọn vẹn và ý nghĩa. <span class="icon sparkle">✨</span></p>
              <p><span class="icon heart-red">❤️</span> Và Đừng Quên <span class="icon sparkle">✨</span>, hãy tuân thủ nội quy sa mạc một cách nghiêm túc <span class="icon smiling-face">😊</span> và đem theo một tinh thần thật cháy <span class="icon fire">🔥</span> để không bỏ lỡ một phút giây đáng giá nào nhé!!!</p>
              <p>#Damas1 #Hanhtrinhhyvong #Traihe #Cungnhautoasang #Xudoanthanhlinh</p>
              <br/>
              <img src="/images/gallery/damas1_main.jpg" alt="Damas 1 Hành trình hy vọng" style="max-width: 100%; height: auto; display: block; margin: 1.5rem auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <img src="/images/gallery/damas1_noiquy.jpg" alt="Nội quy sa mạc hè" style="max-width: 100%; height: auto; display: block; margin: 1.5rem auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <img src="/images/gallery/damas1_hanhtrang.jpg" alt="Hành trang dành cho thiếu nhi" style="max-width: 100%; height: auto; display: block; margin: 1.5rem auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <img src="/images/gallery/damas1_hanhtrang_doi.jpg" alt="Hành trang dành cho đội" style="max-width: 100%; height: auto; display: block; margin: 1.5rem auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            `,
          },
          {
            id: 2,
            title: 'Lễ Kỷ Niệm 15 Năm Thành Lập Xứ Đoàn',
            date: '10/06/2025',
            excerpt: 'Buổi lễ trang trọng với sự tham gia của Cha Xứ và toàn thể đoàn sinh. Sự kiện đánh dấu chặng đường phát triển và những thành tựu của Xứ Đoàn Thánh Linh Q9. Nhiều hoạt động ý nghĩa đã diễn ra...',
            link: '/article/le-ky-niem-15-nam',
            images: [
              '/images/gallery/le_ky_niem_1.jpg',
              '/images/gallery/le_ky_niem_2.jpg',
              '/images/gallery/le_ky_niem_3.jpg',
            ],
            fullContent: '<p>Nội dung đầy đủ của bài viết 1...</p>', 
          },
          {
            id: 3,
            title: 'Buổi Sinh Hoạt Huynh Trưởng Tháng 6',
            date: '05/06/2025',
            excerpt: 'Huynh Trưởng cùng nhau ôn luyện các bài học mới và chia sẻ kinh nghiệm chuẩn bị cho trại hè sắp tới. Đây là dịp để các huynh trưởng gắn kết và nâng cao kỹ năng...',
            link: '/article/sinh-hoat-thang-6',
            images: [
              '/images/gallery/sinh_hoat_ht_1.jpg',
              '/images/gallery/sinh_hoat_ht_2.jpg',
            ],
            fullContent: '<p>Nội dung đầy đủ của buổi sinh hoạt huynh trưởng...</p>', 
          },
          {
            id: 4,
            title: 'Khóa Huấn Luyện Thiếu Nhi Cấp I',
            date: '28/05/2025',
            excerpt: 'Các em thiếu nhi hăng hái tham gia khóa huấn luyện để tìm hiểu thêm về giáo lý và các kỹ năng sống. Buổi học diễn ra trong không khí vui tươi và bổ ích...',
            link: '/article/khoa-huan-luyen-cap-1',
            images: [
              '/images/gallery/huan_luyen_tn_1.jpg',
              '/images/gallery/huan_luyen_tn_2.jpg',
              '/images/gallery/huan_luyen_tn_3.jpg',
              '/images/gallery/huan_luyen_tn_4.jpg',
            ],
            fullContent: '<p>Nội dung đầy đủ của khóa huấn luyện...</p>', 
          },
        ];
        setArticles(articlesData);

        // --- Dữ liệu giả lập sự kiện sắp tới ---
        const eventsData = [
          {
            id: 1,
            title: 'Trại Hè Thiếu Nhi Thánh Thể 2025',
            date: '20/07/2025',
            excerpt: 'Khu du lịch sinh thái ABC. Trại hè hứa hẹn nhiều hoạt động vui chơi, học hỏi và cầu nguyện. Đăng ký ngay để không bỏ lỡ!',
            link: '/event/trai-he-2025',
            images: [
              '/images/gallery/trai_he_1.jpg',
              '/images/gallery/trai_he_2.jpg',
            ]
          },
          {
            id: 2,
            title: 'Giải Bóng Đá Xứ Đoàn Mở Rộng',
            date: '15/08/2025',
            excerpt: 'Sân bóng đá XYZ. Giải đấu giao hữu nhằm tăng cường tinh thần đoàn kết và rèn luyện sức khỏe cho đoàn sinh. Các đội bóng đã sẵn sàng tranh tài!',
            link: '/event/giai-bong-da',
            images: [
              '/images/gallery/bong_da_1.jpg',
            ]
          },
        ];
        setEvents(eventsData);

      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };

    fetchContent();
  }, []);

  return (
    <Layout>
      <div className="main-content">
        <section className="homepage-section container">
          <h2 className="section-title">Bài viết mới nhất</h2>
          <div className="news-list">
            {articles.map(article => (
              <div className="news-item" key={article.id}>
                {article.images && article.images.length > 0 && (
                  <div className="article-thumbnail-wrapper"> {/* Thay đổi class để dễ quản lý CSS */}
                    <img src={article.images[0]} alt={article.title} className="article-thumbnail" />
                  </div>
                )}
                <h3>{article.title}</h3>
                <p className="news-date">{article.date}</p>
                <p>{article.excerpt.substring(0, 200)}...</p> 
                <Link to={article.link} className="read-more">Đọc thêm</Link>
              </div>
            ))}
          </div>
        </section>

        <section className="homepage-section container">
          <h2 className="section-title">Sự kiện sắp tới</h2>
          <div className="event-list">
            {events.map(event => (
              <div className="event-item" key={event.id}>
                 {event.images && event.images.length > 0 && (
                  <div className="event-thumbnail-wrapper"> {/* Thay đổi class để dễ quản lý CSS */}
                    <img src={event.images[0]} alt={event.title} className="event-thumbnail" />
                  </div>
                )}
                <h3>{event.title}</h3>
                <p className="event-date">{event.date}</p>
                <p>{event.excerpt.substring(0, 150)}...</p>
                <Link to={event.link} className="view-details">Xem chi tiết</Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;