module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    variants: {
        extend: {}
    },
    corePlugins: {
        fontFamily: false
    },
    plugins: [require("@tailwindcss/aspect-ratio")]
};
