
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                'primary': '#8D6E63',
                'secondary': '#FFD54F',
                'bg-base': '#F5EDE6',
                'text-dark': '#2E2E2E'
            },
            boxShadow: {
                'card': '0 4px 12px rgba(93, 64, 55, 0.2)',
                'card-hover': '0 6px 16px rgba(93, 64, 55, 0.3)'
            },
            fontFamily: {
                pacifico: ['Pacifico', 'cursive'],
            },
        },
    },
    plugins: [
        require('tailwind-scrollbar'),
    ],
}

