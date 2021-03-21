module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        120: 120,
        250: 250,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
      },
      minHeight: { 600: 600 },
      colors: {
        "ui-green": "#00BF69",
        "ui-green-lite": "#CCFFE8",
        "accent-1": "#737373",
        "accent-2": "#EFFFF4",
        "accent-3": " #f2f2f2",
        m: {
          gray: "#E7E3DB",
          brown:'#d6cfb5'
        },
      },
      maxWidth: {
        1180: 1180,
        1440: 1440,
      },
      backgroundImage: (theme) => ({
        "hero-md-banner": "url('/banner.png')",
        "comment-icon": "url(/comment-icon.png)",
        "header-two-columns":
          "linear-gradient(to right, #f2f2f2 50%, #fff 50% 100%)",
      }),
      backgroundPosition: {
        comment: "131% -26px",
      },
    },

    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
