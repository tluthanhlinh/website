// frontend/src/components/public/EventItem.jsx
import React from 'react';

const EventItem = ({ title, date, location, description }) => {
  return (
    <div className="event-item">
      <h3>{title}</h3>
      <p className="event-date">Thời gian: {date}</p>
      <p className="event-location">Địa điểm: {location}</p>
      <p>{description}</p>
      <a href="#" className="view-details">Xem chi tiết...</a>
    </div>
  );
};

export default EventItem;