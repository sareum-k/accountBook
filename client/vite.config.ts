import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  plugins: [
    vue(),
    Pages({
      pagesDir: 'src/pages',
      extensions: ['vue', 'ts', 'js'],
    }),
  ],
})
