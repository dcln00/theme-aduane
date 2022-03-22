import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import '@/scss/abstracts/fonts';
        @import '@/scss/abstracts/colors';
        @import '@/scss/abstracts/mixins';
        @import '@/scss/base/reset';
        @import '@/scss/abstracts/mediaqueries';
        `
      }
    }
  },
});


