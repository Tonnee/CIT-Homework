/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "font-dark": "#333333",
                "font-orange": "#FFBC42",
            },
        },
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
        },
    },
    plugins: [],
};
