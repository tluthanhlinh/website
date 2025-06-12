// frontend/src/pages/auth/LoginPage.jsx
import React from 'react';
import Navbar from '../../components/common/Navbar'; // Có thể bỏ Navbar và Footer nếu muốn trang đăng nhập full screen
import Footer from '../../components/common/Footer';

const LoginPage = () => {
  return (
    <div>
      <Navbar /> {/* Tùy chọn: có thể bỏ Navbar và Footer cho trang đăng nhập */}
      <main style={{ padding: '2rem', maxWidth: '400px', margin: '50px auto', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2>Đăng Nhập</h2>
        <form>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="username" style={{ display: 'block', marginBottom: '0.5rem' }}>Tên đăng nhập:</label>
            <input type="text" id="username" name="username" style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ddd' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>Mật khẩu:</label>
            <input type="password" id="password" name="password" style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ddd' }} />
          </div>
          <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Đăng Nhập</button>
        </form>
      </main>
      <Footer /> {/* Tùy chọn */}
    </div>
  );
};

export default LoginPage;