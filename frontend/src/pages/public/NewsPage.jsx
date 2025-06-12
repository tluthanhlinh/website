// frontend/src/pages/public/NewsPage.jsx
import React from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';

const NewsPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Bản Tin</h1>
        <p>Đây là trang tổng hợp các bản tin và hoạt động của TNTT.</p>
      </main>
      <Footer />
    </div>
  );
};

export default NewsPage;