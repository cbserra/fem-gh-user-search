/** @type {import('vite').UserConfig} */

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import viteImagemin from 'vite-plugin-imagemin'
import svgr from 'vite-plugin-svgr'

import config from './config.js'
import postcss from './postcss.config.js'

const { imagemin } = config

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react(),
    // viteImagemin(imagemin),
    createHtmlPlugin({
      minify: true,
      entry: 'src/main.tsx'
    })
  ],
  css: {
    postcss
  }
  // resolve: {
  //   alias: [
  //     { find: '@/', replacement: '/src' },
  //     { find: '@/Assets', replacement: '/src/assets' },
  //     { find: '@/Components', replacement: '/src/components' }
  //   ]
  // }
})
