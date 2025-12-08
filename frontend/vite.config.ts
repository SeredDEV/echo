import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: './',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                contacto: resolve(__dirname, 'contacto.html'),
                login: resolve(__dirname, 'login.html'),
                carrito: resolve(__dirname, 'carrito.html'),
                registro: resolve(__dirname, 'registro.html'),
                tienda: resolve(__dirname, 'tienda.html'),
            },
        },
    },
})
