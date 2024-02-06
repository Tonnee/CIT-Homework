/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                rale: "Raleway",
            },
            maxWidth: {
                "3xl-container": "1632px",
            },
        },
    },
    plugins: [],
};
