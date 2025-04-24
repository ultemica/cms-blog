import { atomWithStorage } from 'jotai/utils'

type Theme = 'light' | 'dark'
export const themeAtom = atomWithStorage<Theme>(
  'theme',
  'light',
  {
    getItem: (key) =>
      typeof localStorage !== 'undefined' ? (localStorage.getItem(key) === 'dark' ? 'dark' : 'light') : 'light',
    setItem: (key, newValue) => {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(key, newValue)
      }
    },
    removeItem: (key) => {
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem(key)
      }
    }
  },
  {
    getOnInit: true
  }
)
