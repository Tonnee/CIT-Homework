/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            maxWidth: {
                "container-xxl": "1564px",
            },
            fontFamily: {
                dm: "DM Sans",
            },
            colors: {
                ash26: "#262626",
                ash76: "#767676",
            },
        },
    },
    plugins: [],
};
