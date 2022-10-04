// vite.config.js
/** @type {import('vite').UserConfig} */
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  // omit
  plugins: [mkcert(),
    WindiCSS({
      scan: {
        dirs: ['.', './**/*.html'], // all files in the cwd
        fileExtensions: ['vue', 'js', 'ts', 'html'], // also enabled scanning for js/ts
      },
    }
  )],
  server: {
    port: 8089,
    cors: true,
    host: "local.dev",
    https: true,
  },
});
