export default {
  content: ["./src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: ["JetBrains Mono", "monospace"],
      secondary: ["Inter", "sans-serif"], 
      JetBrainsMono: ["JetBrains Mono", "monospace"], // Keep for legacy
    },
    extend: {
      colors: {
        primary: "#1c1c22", 
        Primery: "#1c1c22", // Legacy support
        secondary: "#13131ba",
        accent: {
          DEFAULT: "#00ff99",
          hover: "#00e187",
        },
        servicesBg: "#131317e7",
        success: "#28a745",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/assets/hero-bg.png')", // Placeholder
      },
      keyframes: {
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "fill-ani": {
          "0%": { width: "0px" },
          "100%": { width: "100%", background: "#00ff99" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 3s linear infinite",
        "bounce-slow": "bounce-slow 2s infinite",
        "fill-ani": "fill-ani 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
