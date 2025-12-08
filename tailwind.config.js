/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0fbfe',
                    100: '#e0f6fc',
                    200: '#b8ebf9',
                    300: '#94d6ea', // Secundario 2
                    400: '#4de2e5', // Secundario 1
                    500: '#0fa6d1', // Principal 1 - Color referente de marca
                    600: '#0c89ad',
                    700: '#096c8a',
                    800: '#075066',
                    900: '#043343',
                },
                accent: {
                    50: '#fff5f5',
                    100: '#ffebeb',
                    200: '#ffd6d6',
                    300: '#ffb8b8',
                    400: '#ff8787',
                    500: '#ff5757', // Secundario 4
                    600: '#ff2929',
                    700: '#fa0000',
                    800: '#cc0000',
                    900: '#990000',
                },
                gray: {
                    50: '#f7f5f2',  // Principal 3 - Background claro
                    100: '#f3f4f6',
                    200: '#e5e7eb',
                    300: '#d1d5db',
                    400: '#9ca3af',
                    500: '#959595', // Principal 2 - Gris de marca
                    600: '#6b7280',
                    700: '#4b5563',
                    800: '#1f2937',
                    900: '#090808', // Secundario 3 - Negro
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Outfit', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in',
                'slide-up': 'slideUp 0.5s ease-out',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [],
}
