/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        saasstartertheme: {
          "primary": "#ad0263",
          "primary-content": "#fefbf6",
          "neutral-content": "#fefbf6",
          "secondary": "#ff80b0",
          "accent": "#fa00c8",
          "neutral": "#fefbf6",
          "base-content": "#f7f7f7",
          "base-surface": "#262626",
          "base-100": "#1a1a1a",
        },
      }
    ],
  }
}

