// frontend/src/pages/public/AboutUsPage.jsx
import React, { useEffect, useState } from 'react'; // Import useEffect và useState
import HeaderBanner from '../../components/common/HeaderBanner';
import Footer from '../../components/common/Footer';
import '../../styles/aboutus.scss'; // Style riêng cho trang này

const AboutUsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Kích hoạt hiệu ứng fade-in khi component mount
    setIsVisible(true);
  }, []);

  return (
    <div className="about-us-page">
      <HeaderBanner />
      <main className={`about-us-content ${isVisible ? 'fade-in' : ''}`}> {/* Thêm class fade-in */}
        <div className="container">
          <h1>Tổ chức và Phân nhiệm trong Xứ Đoàn Thánh Linh Q9</h1>
          <p className="last-updated-meta">Cập nhật: 01/01/2024</p>

          {/* Em có thể thêm ảnh minh họa riêng cho trang này nếu muốn */}
          {/* <img src="/images/xu-doan-info.jpg" alt="Xứ Đoàn Info" className="main-image" /> */}

          <section className="section-block">
            <h2>I. Tổng quan về Xứ Đoàn Thánh Linh Q9</h2>
            <p>Xứ Đoàn Thiếu Nhi Thánh Thể Thánh Linh Q9 là một Đoàn TNTT thuộc Giáo xứ Thánh Linh, trực thuộc Giáo phận Sài Gòn. Với phương châm **"HY SINH - CẦU NGUYỆN - TÔNG SUNG THÁNH THỂ - LÀM VIỆC TÔNG ĐỒ"**, Đoàn không ngừng phát triển và đồng hành cùng các em thiếu nhi trong đời sống đức tin và sinh hoạt xã hội.</p>
            <p>Bổn mạng của Đoàn là **[Thánh Bổn mạng của Xứ Đoàn em, ví dụ: Thánh Linh hoặc một Thánh cụ thể]**, một tấm gương sáng về đức tin và lòng mến.</p>
          </section>

          <section className="section-block">
            <h2>II. Thời gian hoạt động</h2>
            <p>Xứ Đoàn có lịch sinh hoạt định kỳ nhằm tạo môi trường học hỏi, vui chơi và phát triển toàn diện cho các em:</p>
            <h3>A. Thứ Năm hàng tuần:</h3>
            <ul>
              <li>**18h30:** Tập trung tại sân nhà thờ/hội trường</li>
              <li>**19h00:** Tham dự Thánh Lễ Cộng đồng</li>
              <li>**19h45:** Họp Đoàn/Ban Ngành (chuẩn bị cho các hoạt động sắp tới)</li>
            </ul>
            <h3>B. Chúa Nhật hàng tuần:</h3>
            <ul>
              <li>**07h00:** Tập trung tại sân nhà thờ (điểm danh, chuẩn bị)</li>
              <li>**07h30:** Tham dự Thánh Lễ Thiếu Nhi</li>
              <li>**08h30:** Sinh hoạt Đoàn (học giáo lý, trò chơi lớn, sinh hoạt chủ đề)</li>
              <li>**09h30:** Kết thúc sinh hoạt (giải tán)</li>
            </ul>
            <p>Ngoài ra, Đoàn còn tổ chức các buổi cắm trại, tĩnh tâm, hành hương và các hoạt động bác ái xã hội theo mùa phụng vụ.</p>
          </section>

          <section className="section-block">
            <h2>III. Cơ cấu tổ chức của Xứ Đoàn</h2>
            <p>Xứ Đoàn TNTT Thánh Linh Q9 được tổ chức chặt chẽ với các ban ngành và phân nhiệm rõ ràng để đảm bảo mọi hoạt động diễn ra hiệu quả và đúng định hướng, dưới sự hướng dẫn của Cha Tuyên Úy.</p>
            <h3>A. Ban Điều Hành Xứ Đoàn:</h3>
            <ul>
              <li>**Cha Tuyên Úy:** [Tên Cha Tuyên Úy hiện tại]</li>
              <li>**Trưởng Xứ Đoàn:** [Tên Trưởng Xứ Đoàn hiện tại]</li>
              <li>**Phó Trưởng Xứ Đoàn (Nội vụ):** [Tên Phó Trưởng Xứ Đoàn hiện tại]</li>
              <li>**Phó Trưởng Xứ Đoàn (Ngoại vụ):** [Tên Phó Trưởng Xứ Đoàn hiện tại]</li>
              <li>**Thư Ký:** [Tên Thư Ký hiện tại]</li>
              <li>**Thủ Quỹ:** [Tên Thủ Quỹ hiện tại]</li>
            </ul>
            <p>Các thành viên trong Ban Điều Hành có trách nhiệm điều phối các hoạt động chung của Xứ Đoàn, lập kế hoạch và giám sát việc thực hiện các chương trình, cũng như giữ mối liên hệ với Giáo xứ và các Đoàn bạn.</p>

            <h3>B. Các Ban Ngành chuyên trách:</h3>
            <ul>
              <li>**Ban Giáo Lý:** Phụ trách giảng dạy giáo lý, chuẩn bị cho các Bí Tích.</li>
              <li>**Ban Bác Ái:** Tổ chức các hoạt động từ thiện, thăm hỏi người khó khăn.</li>
              <li>**Ban Phụng Vụ:** Hỗ trợ các công tác trong Thánh Lễ và các nghi thức phụng vụ.</li>
              <li>**Ban Truyền Thông:** Cập nhật thông tin, hình ảnh, bài viết trên website và các kênh truyền thông của Đoàn.</li>
              <li>**Ban Sinh Hoạt:** Sáng tạo và tổ chức các trò chơi, hoạt động giải trí cho các em.</li>
              <li>**Ban Y Tế:** Đảm bảo an toàn, sức khỏe cho các em trong mọi hoạt động.</li>
            </ul>
          </section>

          <section className="section-block">
            <h2>IV. Thông tin liên hệ</h2>
            <p>Mọi thắc mắc hoặc cần hỗ trợ, xin vui lòng liên hệ với Xứ Đoàn qua các kênh sau:</p>
            <p>**Địa chỉ Giáo Xứ Thánh Linh:** [Địa chỉ Giáo xứ Thánh Linh Q9 của em]</p>
            <p>**Email:** [Email liên hệ của Xứ Đoàn Thánh Linh Q9]</p>
            <p>**Điện thoại Văn phòng Đoàn:** [Số điện thoại liên hệ của Xứ Đoàn]</p>
            <p>Chúng tôi luôn sẵn lòng đón nhận mọi đóng góp và sự quan tâm từ quý phụ huynh và cộng đồng.</p>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;