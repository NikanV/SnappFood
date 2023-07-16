/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/tw-elements/dist/js/**/*.js"
    ],
    theme: {
        extend: {
            fontFamily: {
                body: ['Playfair Display']
            },
            width: {
                '1000': '1000px',
            }
        },
    },
    plugins: [require("tw-elements/dist/plugin.cjs")],
}