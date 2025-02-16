import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // macだとコンテナ外からアクセスできないのでhostを指定
    host: '0.0.0.0',
    watch: {
      usePolling: true,
    },
  },
})
