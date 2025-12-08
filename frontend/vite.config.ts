import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  root: "pages",
  publicDir: resolve(__dirname, "public"),
  resolve: {
    alias: {
      "/src": resolve(__dirname, "src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true,
    },
  },
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "pages/index.html"),
        about: resolve(__dirname, "pages/about.html"),
        contacto: resolve(__dirname, "pages/contacto.html"),
        login: resolve(__dirname, "pages/login.html"),
        carrito: resolve(__dirname, "pages/carrito.html"),
        registro: resolve(__dirname, "pages/registro.html"),
        tienda: resolve(__dirname, "pages/tienda.html"),
      },
    },
  },
});
