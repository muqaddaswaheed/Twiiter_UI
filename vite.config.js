import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  // build: {
  //   outDir: "dist", 
  // }, server: {
  //   historyApiFallback: true
  // }
})