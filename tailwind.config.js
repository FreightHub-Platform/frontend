/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      primary: {
        DEFAULT: '#FF9800',
        light: '#FFB74D',
        dark: '#F57C00',
      },
      secondary: {
        light: '#ffb74d',
        DEFAULT: '#ff9800',
        dark: '#f57c00',
      },
      accent: {
        light: '#e1bee7',
        DEFAULT: '#ce93d8',
        dark: '#ab47bc',
      },
      success: {
        light: '#81c784',
        DEFAULT: '#4caf50',
        dark: '#388e3c',
      },
      warning: {
        light: '#ffcc80',
        DEFAULT: '#ff9800',
        dark: '#f57c00',
      },
      error: {
        light: '#e57373',
        DEFAULT: '#f44336',
        dark: '#d32f2f',
      },
      info: {
        light: '#64b5f6',
        DEFAULT: '#2196f3',
        dark: '#1976d2',
      },
      black: {
        light: '#424242',
        DEFAULT: '#212121',
        dark: '#000000',
      },
      white: {
        light: '#ffffff',
        DEFAULT: '#fafafa',
      },
      gray: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
      },

    },
  },
  plugins: [],
};
