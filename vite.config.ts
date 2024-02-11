import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig, searchForWorkspaceRoot } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsDir: './assets',
    lib: {
      entry: resolve(__dirname, './'),
      name: 'uilib',
      fileName: 'uilib'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        assetFileNames: 'uilib.css',
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      wrappers: fileURLToPath(new URL('./wrappers', import.meta.url)),
      components: fileURLToPath(new URL('./components', import.meta.url)),
      assets: fileURLToPath(new URL('./assets', import.meta.url)),
      utils: fileURLToPath(new URL('./utils', import.meta.url))
    },
    dedupe: ['vue']
  },
  server: {
    fs: {
      allow: [searchForWorkspaceRoot(process.cwd()), '/Users/a898526/Aside/uilib', '..']
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "assets/scss/main.scss";
        `
      }
    }
  }
})
