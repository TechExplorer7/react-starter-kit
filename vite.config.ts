import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // macだとhostを指定しないとコンテナ外からアクセスできない
    host: '0.0.0.0',
    watch: {
      usePolling: true,
    },
  },
})
