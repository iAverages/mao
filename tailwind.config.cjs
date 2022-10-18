/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                selected: "0 0 0 2px #262626, 0 0 0 5px #9c3eba",
                "selected-sm": "0 0 0 2px #262626, 0 0 0 4px #9c3eba",
            },
        },
    },
    plugins: [],
};
