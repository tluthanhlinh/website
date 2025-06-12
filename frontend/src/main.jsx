// frontend/src/main.jsx
import React from 'react'; // Đảm bảo import React
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter từ react-router-dom
import App from './App.jsx';
import './styles/global.scss'; // Thay đổi đường dẫn đến CSS toàn cục

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Bọc App trong BrowserRouter để Router hoạt động */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);