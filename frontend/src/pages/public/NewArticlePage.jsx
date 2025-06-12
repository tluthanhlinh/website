// frontend/src/pages/private/NewArticlePage.jsx
import React, { useState } from 'react';
import Layout from '../../components/common/Layout'; // SỬA ĐƯỜNG DẪN: Đường dẫn đúng đến Layout component
import '../../styles/NewArticlePage.scss'; 

const NewArticlePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('Admin'); 
  const [status, setStatus] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    setStatus('');

    const newArticle = {
      title,
      content,
      author,
      date: new Date().toLocaleDateString('vi-VN'), 
    };

    console.log('Dữ liệu bài viết sẽ được gửi:', newArticle);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      
      setStatus('Bài viết đã được đăng thành công!');
      setTitle('');
      setContent('');

    } catch (error) {
      console.error('Lỗi khi đăng bài viết:', error);
      setStatus(`Lỗi: ${error.message || 'Không thể đăng bài viết.'}`);
    }
  };

  return (
    <Layout> 
      <div className="new-article-page">
        <div className="container"> 
          <h2 className="section-title">Đăng Bài Viết Mới</h2> 
          
          <form onSubmit={handleSubmit} className="article-form">
            <div className="form-group">
              <label htmlFor="title">Tiêu đề bài viết:</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="content">Nội dung:</label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="10" 
                required
              ></textarea>
            </div>

            {status && <p className={`status-message ${status.startsWith('Lỗi') ? 'error' : 'success'}`}>{status}</p>}
            
            <button type="submit" className="submit-button">Đăng Bài Viết</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default NewArticlePage;