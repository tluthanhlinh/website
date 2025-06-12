// D:\websiteTLU\frontend\vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Rất quan trọng cho Vercel/Netlify để tạo đường dẫn asset đúng
  build: {
    outDir: 'dist', // Thư mục output mặc định của Vite
  },
});