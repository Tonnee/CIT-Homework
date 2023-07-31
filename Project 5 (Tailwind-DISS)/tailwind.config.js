/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                dark: "#333333",
                orange: "#FFBC42",
                blue: "#2E3094",
                "light-lime": "rgba(37, 171, 92, 0.9)",
            },
        },
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
        },
    },
    plugins: [],
};
