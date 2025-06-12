// frontend/src/pages/public/EventsPage.jsx
import React from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';

const EventsPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Sự Kiện</h1>
        <p>Cập nhật các sự kiện sắp tới và đã diễn ra của TNTT.</p>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage; // Dòng này là rất quan trọng để fix lỗi "default export"