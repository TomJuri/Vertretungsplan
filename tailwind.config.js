/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        screens: {
            'xs': '380px',
            'sm': '500px',
            'md': '768px',
        },
        fontFamily: {
            roboto: ['Roboto', 'sans-serif'],
        },
    },
    plugins: [],
}