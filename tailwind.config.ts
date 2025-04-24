// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{tsx,ts,jsx,js}'],
  theme: {
    extend: {
      fontSize: {
        base: '16px',
        lg: '20px'
      }
    }
  }
}
export default config
