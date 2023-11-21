import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig, searchForWorkspaceRoot  } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
   build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, './main.ts'),
      name: 'uilib',
      // the proper extensions will be added
      fileName: 'uilib',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      wrappers: fileURLToPath(new URL('./wrappers', import.meta.url)),
      components: fileURLToPath(new URL('./components', import.meta.url)),
    }
  },
  server: {
    fs: {
      allow: [
        searchForWorkspaceRoot(process.cwd()),
        "/Users/a898526/Aside/uilib",
        ".."
      ]
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "https://fonts.googleapis.com/icon?family=Material+Icons";
        @import "@/assets/scss/main.scss";
        `,
      }
    }
  }
})
