/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./*.html', './src/**/*.{js,ts,jsx,tsx,css}'],
  theme: {

    extend: {},
    fontFamily: {
      mono: ['Space Mono', 'monospace']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      azure: '#0079FF',
      'slate-gray': '#697C9A',
      'queen-blue': '#4B6A9B',
      gunmetal: '#2B3442',
      'off-white': '#FEFEFE',
      'ghost-white': '#F6F8FF',
      'dark-gunmetal': '#141D2F',
      'yankees-blue': '#1E2A47'
    },
    fontSize: {
      base: '62.5%',
      body: '1.5rem 2.5rem',
      toggle: ['1.3rem', {
        lineHeight: '1.9rem',
        letterSpacing: '0.25rem',
        fontWeight: '700'
      }],
      'heading-1': [
        '2.6rem',
        {
          lineHeight: ' 3.8rem',
          fontWeight: '700'
        }
      ],
      'heading-2': ['2.2rem', { lineHeight: '3.3rem', fontWeight: '700' }],
      'heading-3': ['1.6rem', { lineHeight: '2.4rem', fontWeight: '400' }],
      'heading-4': ['1.3rem', { lineHeight: '2.0rem', fontWeight: '400' }],
      'input-sm': ['1.3rem', { lineHeight: '2.5rem', fontWeight: '400' }],
      'button-sm': ['1.4rem', { lineHeight: '2.1rem', fontWeight: '700' }],
    },
    boxShadow: {
      'input-shadow': '0px 16px 30px -10px rgba(70, 96, 187, 0.198567)'
    },
    borderRadius: {
      'input-radius': '1.5rem',
      'button-radius': '1.0rem'
    },
    fontWeight: {
      normal: '400',
      bold: '700'
    }
  },
  plugins: []
}
