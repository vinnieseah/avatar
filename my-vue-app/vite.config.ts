// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/avatar/',  // Make sure 'avatar' matches your GitHub repo name
});

