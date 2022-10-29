/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    daisyui: {
        themes: [
            {
                plurple: {
                    primary: "#9333ea",
                    secondary: "#BF95F9",
                    accent: "#FFB86B",
                    neutral: "#414558",
                    "base-100": "#272935",
                    info: "#8BE8FD",
                    success: "#4ade80",
                    warning: "#F1FA89",
                    error: "#FF5757",
                },
            },
        ],
    },
    theme: {
        extend: {
            boxShadow: {
                selected: "0 0 0 2px #262626, 0 0 0 5px #9c3eba",
                "selected-sm": "0 0 0 2px #262626, 0 0 0 4px #9c3eba",
            },
        },
    },
    plugins: [require("daisyui")],
};
