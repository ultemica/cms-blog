import localFont from 'next/font/local'

const misakiGothic = localFont({
  src: '../fonts/misaki_gothic.ttf',
  variable: '--misaki-gothic',
  display: 'swap'
})

const misakiGothic2nd = localFont({
  src: '../fonts/misaki_gothic_2nd.ttf',
  variable: '--misaki-gothic-2nd',
  display: 'swap'
})

const misakiMincho = localFont({
  src: '../fonts/misaki_mincho.ttf',
  variable: '--misaki-mincho',
  display: 'swap'
})

const pixelMplus10 = localFont({
  src: [
    {
      path: '../fonts/PixelMplus10-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../fonts/PixelMplus10-Regular.ttf',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--pixel-mplus-10',
  display: 'swap'
})
// const pixelMplus10 = localFont({
//   src: '../fonts/PixelMplus10-Regular.ttf',
//   variable: '--pixel-mplus-10',
//   display: 'swap'
// })

const pixelMplus12 = localFont({
  src: [
    {
      path: '../fonts/PixelMplus12-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../fonts/PixelMplus12-Regular.ttf',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--pixel-mplus-12',
  display: 'swap'
})

export { misakiGothic, misakiGothic2nd, misakiMincho, pixelMplus10, pixelMplus12 }
