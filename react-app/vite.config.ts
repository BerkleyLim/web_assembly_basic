import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import wasm from 'vite-plugin-wasm'; // wasm 플러그인 추가

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), wasm()],
  build: {
    target: 'esnext', // WASM을 지원하는 ESNext로 빌드
  },
})
