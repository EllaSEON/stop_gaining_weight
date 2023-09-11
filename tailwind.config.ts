import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#FF898D',
        sub: '#FEDADA',
      },
      borderWidth: {
        DEFAULT: '1px',
        2: '2px',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100)' },
        },
      },
      animation: {
        slideUp: 'slideUp 0.3s infinite',
      },
    },
  },
  plugins: [],
}
export default config
