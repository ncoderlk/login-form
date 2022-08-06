/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '760px',
      lg: '968px',
      xl: '1440px'
    },
    extend: {
      colors: {
        darkBg: `#080710`,
        lightBg: `#e7eafc`,
        formDark: `#ffffff21;`,
        formLight: `#fffad9`,
        darkInputBox: `rgba(255,255,255,0.07)`,
        lightInputBox: `#ccc`

      }
    },
    textColor: {
      darkText: `#080710`,
      lightText: `#e7eafc`,
      redIco: `#f00`,
      bluIco: `#00f`,
      purIco: `#4A148C`
    }
  },
  plugins: [],
}
