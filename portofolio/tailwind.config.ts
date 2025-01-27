import { openAsBlob } from "fs";
import type { Config } from "tailwindcss";

export default {

    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],

    theme: {

        screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
        },

        container: {
        center: true,
        padding: {
            DEFAULT: "1rem",
            md: "2rem",
        }
        },

        extend: {

            animation: {
                "ping-large": "ping-large 1s ease-in-out infinite"
            },
            
            keyframes: {
                "ping-large": {
                    "75%, 100%": {
                        transform: "scale(3)",
                        opacity: "0",
                    }
                }
            }
        },

    },
    
    plugins: [],
} satisfies Config;
