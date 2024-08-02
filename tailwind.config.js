export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            primary: "#313131",
            secondary: "#8e7d6c",
            accent: "#3b3b3b",
            base: "#282828",
            info: "#4e8ec9",
            success: "#40ae79",
            warning: "#c79b47",
            error: "#ac2f2f",
            text: "#d3d3d3"
        },
        extend: {
            backgroundImage: {
                baseImage: "url('/background.png')"
            }
        },
    },
    plugins: [],
};

