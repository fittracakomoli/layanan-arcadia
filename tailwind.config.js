/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: "Poppins, sans-serif",
            },
            colors: {
                primary: "#00707F",
                secondary: "#F39A2C",
                third: "#1C855F",
            },
        },
    },
    plugins: [],
};
