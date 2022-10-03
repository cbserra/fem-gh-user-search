/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./*.html', './src/**/*.{js,ts,jsx,tsx,css}'],
  darkMode: 'class',
  theme: {
    extend: {
      borderRadius: {
        'input-radius': '1.5rem',
        'button-radius': '1.0rem'
      }
    },
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
      'yankees-blue': '#1E2A47',
      'dark-toggle-hover': '#90A4D4',
      'button-hover': '#60ABFF',
      'avatar-outline-green': '#4BB543',
      red: '#F74646'
    },
    fontSize: {
      base: '62.5%',
      detail: ['1.3rem', { lineHeight: '2.2rem' }],
      'stats-label': ['1.1rem', { lineHeight: '1.6rem' }],
      'stats-label-lg': ['1.3rem', { lineHeight: '1.9rem' }],
      'detail-lg': ['1.5rem', { lineHeight: '2.2rem' }],
      body: ['1.3rem', { lineHeight: '2.5rem' }],
      'body-lg': ['1.5rem', { lineHeight: '2.5rem' }],
      links: ['1.3rem', { lineHeight: '1.9rem' }],
      'links-lg': ['1.6rem', { lineHeight: '2.4rem' }],
      toggle: [
        '1.3rem',
        {
          lineHeight: '1.9rem',
          letterSpacing: '0.25rem',
          fontWeight: '700'
        }
      ],
      'heading-1': [
        '2.6rem',
        {
          lineHeight: ' 3.9rem',
          fontWeight: '700'
        }
      ],
      'heading-2': ['2.2rem', { lineHeight: '3.3rem', fontWeight: '700' }],
      'heading-3': ['1.6rem', { lineHeight: '2.4rem', fontWeight: '400' }],
      'heading-4': ['1.3rem', { lineHeight: '2.0rem', fontWeight: '400' }],
      input: ['1.3rem', { lineHeight: '2.5rem', fontWeight: '400' }],
      'input-lg': ['1.8rem', { lineHeight: '2.5rem', fontWeight: '400' }],
      button: ['1.4rem', { lineHeight: '2.1rem', fontWeight: '700' }],
      'button-lg': ['1.6rem', { lineHeight: '2.4rem', fontWeight: '700' }]
    },
    boxShadow: {
      section: '0px 16px 30px -10px rgba(70, 96, 187, 0.198567)'
    },

    fontWeight: {
      normal: '400',
      bold: '700'
    },
    backgroundImage: {
      'icon-company': "url('./assets/images/icon-company.svg')",
      'icon-location': "url('./assets/images/icon-location.svg')",
      'icon-website': "url('./assets/images/icon-website.svg')",
      'icon-twitter': "url('./assets/images/icon-twitter.svg')"
    }
  },
  plugins: []
}
