/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            maxWidth: {
                container: "1636px",
            },
            fontFamily: {
                dm: "DM Sans",
            },
            colors: {
                gray76: "#767676",
                gray26: "#262626",
            },
        },
    },
    plugins: [],
};
