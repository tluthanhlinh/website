// frontend/src/components/public/NewsItem.jsx
import React from 'react';

const NewsItem = ({ title, date, excerpt }) => {
  return (
    <div className="news-item">
      <h3>{title}</h3>
      <p className="news-date">{date}</p>
      <p>{excerpt}</p>
      <a href="#" className="read-more">Đọc thêm...</a>
    </div>
  );
};

export default NewsItem;