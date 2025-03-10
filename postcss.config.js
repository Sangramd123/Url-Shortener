import { defineConfig } from 'vite';

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  css: {
    postcss: './postcss.config.js', // Ensure this points to your postcss.config.js
  },
}
