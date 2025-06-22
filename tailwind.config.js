/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      fontSize: {
        28: "1.75rem",
        32: "2rem",
        38: "2.375rem",
        40: "2.5rem",
        48: "2.75rem",
        52: "3.25rem",
        64: "4rem",
        68: "4.25rem",
        80: "5rem",
      },
      fontFamily: {
        "futura-bold": ["Futura Bold", "sans-serif"],
      },
      lineHeight: {
        24: "24px",
        32: "32px",
        42: "42px",
        45: "45px",
        48: "48px",
        50: "50px",
        57: "57px",
        66: "66px",
        68: "68px",
        70: "70px",
        72: "72px",
        80: "80px",
      },
      colors: {
        "primary-green": "#024846",
        "secondary-green": "#e0f3ed",
        "light-green": "#E0F3EC80",
        "primary-black": "#0F1A1A",
        "secondary-black": "#6B6B6B",
      },
      height: {
        2.5: "2.5rem",
        3.1: "3.125rem",
        3.5: "3.5rem",
        17: "17rem",
        28: "28rem",
        29: "29rem",
        35: "35rem",
        40: "40rem",
        48: "48rem",
        75: "4.6rem",
      },
      maxWidth: {
        "8xl": "1440px",
        "9xl": "1720px",
        wide: "90%",
        wider: "95%",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, #1BA7F4 0%, rgba(255, 255, 255, 0) 100%)",
        "custom-gradient-20":
          "linear-gradient(90deg, #1D80D8 0%, #9599FF 100%)",
        "custom-gradient-30":
          "linear-gradient(90deg, rgba(83, 196, 244, 0.3), rgba(118, 124, 255, 0.3))",
        "custom-certificate-gradient":
          "linear-gradient(180deg, rgba(27, 167, 244, 0.8) 0%, rgba(255, 255, 255, 0) 100%)",
        "gradient-yellow": "(rgba(253, 206, 1, 1),rgba(245, 153, 21, 1))",
        "custom-gradient-blue": "linear-gradient( #1BA7F4CC , #FFFFFF)",
        "custom-blue-white-gradient":
          "linear-gradient(180deg, rgba(27, 167, 244, 0.98) 0%,rgba(255, 255, 255, 0.6) 80%, rgba(255, 255, 255, 0) 100%)",
        "fade-dark":
          "linear-gradient(180deg, #0F1A1A 0%, rgba(15, 26, 26, 0) 100%)",
      },
      borderRadius: {
        20: "20px",
        28: "1.75rem",
        38: "2.25rem",
        168: "10.5rem",
      },
      boxShadow: {
        "inner-md": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)",
        "inner-lg": "inset 0 -20px 20px -10px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [require("daisyui")],
};
