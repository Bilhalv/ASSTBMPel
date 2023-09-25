/* eslint-disable no-undef */
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: 'https://www.asstbmpel.com.br/', // Set the base path to your custom domain
  plugins: [react()],
  build: {
    outDir: 'build', // Make sure this matches your actual build directory
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});