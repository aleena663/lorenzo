module.exports = {
  plugins: {
    'postcss-import': {},       // Enables @import syntax in your CSS files
    'tailwindcss': {},          // Integrates Tailwind CSS with PostCSS
    'autoprefixer': {},         // Automatically adds vendor prefixes to your CSS rules for better cross-browser compatibility
    ...(process.env.NODE_ENV === 'production' ? { 'cssnano': {} } : {}) // Minifies your CSS for production builds
  }
}

