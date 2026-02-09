module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        "background-light": "#f8fafc",
        "background-dark": "#020617"
      }
    }
  },
  plugins: []
};
