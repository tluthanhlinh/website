// frontend/src/components/common/Layout.jsx
import React from 'react';
import Header from './HeaderBanner'; // Giả sử Header nằm trong components/common
import Footer from './Footer'; // Giả sử Footer nằm trong components/common

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;