import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig, searchForWorkspaceRoot } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.css', '**/*.scss', '**/*.png', '**/*.jpg', '**/*.svg'],
  build: {
    assetsDir: './src/assets/',
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, './src'),
      name: 'uilib',
      // the proper extensions will be added
      fileName: 'uilib'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        assetFileNames: 'uilib.css',
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      wrappers: fileURLToPath(new URL('./src/wrappers', import.meta.url)),
      components: fileURLToPath(new URL('./src/components', import.meta.url)),
      assets: fileURLToPath(new URL('./src/assets', import.meta.url)),
      utils: fileURLToPath(new URL('./src/utils', import.meta.url))
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
        @import "./src/assets/scss/main.scss";
        `
      }
    }
  }
})
