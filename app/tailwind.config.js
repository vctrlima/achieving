module.exports = {
  content: [
    './src/**/*'
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },

      colors: {
        gray: {
          tundora: '#434343',
        },

        green: {
          lochinvar: '#2a8c82'
        },

        primary: '#2a8c82'
      },

      boxShadow: {
        focus: '0 0 0 0.125rem rgb(42 140 130 / 20%);',
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
  ],
}
