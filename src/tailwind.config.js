// tailwind.config.js
module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx}', // Ensure your React files are included
    ],
    theme: {
      extend: {
        colors: {
          'custom-yellow': '#ffce12', // Adding the custom color
        },
      },
    },
    plugins: [],
  }
  