import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Optional: Change the local dev port
  },
  build: {
    outDir: "dist", // Ensures Vercel picks the correct folder
  }
});
