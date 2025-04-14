// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{tsx,ts,jsx,js}'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            p: {
              marginTop: '1.25em'
            }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
export default config
