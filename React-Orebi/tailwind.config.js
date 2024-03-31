/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            maxWidth: {
                container: "1644px",
            },
            fontFamily: {
                dm: ["DM Sans", "sans-serif"],
            },
            colors: {
                gray76: "#767676",
                gray26: "#262626",
            },
        },
    },
    plugins: [],
};
