// tailwind.config.js
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths according to your project structure
  "./public/index.html",
];
export const theme = {
  extend: {
    colors: {
      dark: "#281432",
      primary: {
        light: "#bf4596",
        DEFAULT: "#7848F4",
        dark: "#7c2b61",
      },
    },
  },
};
export const plugins = [];
