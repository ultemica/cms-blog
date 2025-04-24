// tailwind.config.ts
import type { Config } from 'tailwindcss'
import {} from './src/styles/font'

const config: Config = {
  content: ['./src/**/*.{tsx,ts,jsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        // misakiGothic: ['var(--misaki-gothic)', 'sans-serif'],
        // misakiGothic2nd: ['var(--misaki-gothic-2nd)', 'sans-serif'],
        pixelMplus10: ['var(--pixel-mplus-10)', 'sans-serif']
        // pixelMplus12: ['var(--pixel-mplus-12)', 'sans-serif']
      }
    }
  }
}
export default config
