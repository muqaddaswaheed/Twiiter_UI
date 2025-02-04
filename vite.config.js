import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: "dist", // Ensures Vercel picks the correct folder
  }, server: {
    historyApiFallback: true // Fixes 404 errors on refresh
  }
})