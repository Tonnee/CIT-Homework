/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            maxwidth: {
                "3xl-container": "1632px",
            },
            width: {
                "100px": "100px",
            },
            height: {
                "50px": "50px",
            },
        },
    },
    plugins: [],
};
