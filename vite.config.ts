// vite.config.ts
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';

// Replace 'your-repo-name' with the actual repository name
export default defineConfig(({ mode }) => ({
  base: '/avatar/', // Add this line
  plugins: [
    vue(),
    ...(mode === 'prerelease'
      ? [
          visualizer({
            open: true,
            gzipSize: true,
            brotliSize: true,
            template: 'sunburst',
          }),
        ]
      : []),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    __VUE_I18N_FULL_INSTALL__: false,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false,
  },
}));
