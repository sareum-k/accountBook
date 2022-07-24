import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'

export default defineConfig({
  plugins: [
    vue(),
    Pages({
      pagesDir: [{ dir: 'src/views', baseRoute: '' }],
    }),
  ],
})
