/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT'
export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        grayec: '#ececf1',
        gray61: '#616161',
        blue19: '#191991',
        blue0b: '#0b05f9'
      }
    }
  },
  plugins: []
})
