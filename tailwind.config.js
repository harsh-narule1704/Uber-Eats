
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                'primary': '#8D6E63',
                'secondary': '#FFD54F',
                'text-dark': '#2E2E2E',
                'text-light': '#FAF9F6',
                'brown': {
                    DEFAULT: '#8D6E63',
                    dark: '#5D4037'
                },
                'yellow': {
                    DEFAULT: '#FFD54F',
                    dark: '#FFC107'
                }
            },
            boxShadow: {
                'card': '0 4px 12px rgba(93, 64, 55, 0.2)',
                'card-hover': '0 6px 16px rgba(93, 64, 55, 0.3)'
            }
        },
    },
    plugins: [],
}

