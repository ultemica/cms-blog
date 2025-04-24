'use client'
import { themeAtom } from '@/src/atoms/theme.atom'
import { useAtomValue } from 'jotai/react'
import type React from 'react'
import { useEffect, useRef } from 'react'

// フルHD(1920x1080)で150個
const SNOW_PER_PIXEL = 150 / (1920 * 1080)

// 桜の花びらを描画する関数
function drawPetal(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, angle: number) {
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(angle)
  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.bezierCurveTo(-r * 0.5, -r, -r, r * 0.5, 0, r)
  ctx.bezierCurveTo(r, r * 0.5, r * 0.5, -r, 0, 0)
  ctx.fillStyle = 'rgba(255,182,193,0.85)' // ライトピンク
  ctx.shadowColor = 'rgba(255,182,193,0.3)'
  ctx.shadowBlur = 2
  ctx.fill()
  ctx.restore()
}

// 雪の結晶を描画する関数
function drawSnowflake(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, color = '#fff') {
  ctx.save()
  ctx.strokeStyle = color
  ctx.lineWidth = 1
  ctx.translate(x, y)
  for (let i = 0; i < 6; i++) {
    ctx.rotate(Math.PI / 3)
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(0, r)
    ctx.moveTo(0, r * 0.6)
    ctx.lineTo(r * 0.15, r * 0.75)
    ctx.moveTo(0, r * 0.6)
    ctx.lineTo(-r * 0.15, r * 0.75)
    ctx.stroke()
  }
  ctx.restore()
}

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const flakesRef = useRef<any[]>([])
  // themeAtomから現在のテーマを取得
  const theme = useAtomValue(themeAtom)
  const modeRef = useRef<'dark' | 'light'>('dark')

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    // themeAtomの値でモード判定
    modeRef.current = theme === 'dark' ? 'dark' : 'light'

    // 個数計算
    const getFlakeCount = () => Math.round(width * height * SNOW_PER_PIXEL)

    // 雪 or 花びら生成
    function createFlakes(count: number, mode: 'dark' | 'light') {
      return Array.from({ length: count }).map(() =>
        mode === 'dark'
          ? {
              x: Math.random() * width,
              y: Math.random() * height,
              r: Math.random() * 3 + 3,
              speed: Math.random() * 1.0 + 0.5
            }
          : {
              x: Math.random() * width,
              y: Math.random() * height,
              r: Math.random() * 6 + 8,
              speed: Math.random() * 1 + 0.7,
              angle: Math.random() * Math.PI * 2,
              rotateSpeed: (Math.random() - 0.5) * 0.02
            }
      )
    }

    // flakesの再生成はモードが変わったときだけ
    flakesRef.current = createFlakes(getFlakeCount(), modeRef.current)

    // リサイズ時にcanvasサイズと個数を調整
    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      const targetCount = getFlakeCount()
      const flakes = flakesRef.current
      if (flakes.length < targetCount) {
        flakes.push(...createFlakes(targetCount - flakes.length, modeRef.current))
      } else if (flakes.length > targetCount) {
        flakes.length = targetCount
      }
    }
    window.addEventListener('resize', handleResize)

    let animationId: number

    function draw() {
      if (!ctx) return
      ctx.clearRect(0, 0, width, height)
      ctx.save()
      ctx.globalAlpha = 0.8
      for (const f of flakesRef.current) {
        if (modeRef.current === 'dark') {
          drawSnowflake(ctx, f.x, f.y, f.r)
        } else {
          drawPetal(ctx, f.x, f.y, f.r, f.angle)
        }
      }
      ctx.restore()
      update()
      animationId = requestAnimationFrame(draw)
    }

    function update() {
      for (const f of flakesRef.current) {
        f.y += f.speed
        if (modeRef.current === 'light') {
          f.x += Math.sin(f.angle) * 0.5
          f.angle += f.rotateSpeed || 0
        }
        if (f.y > height) {
          f.x = Math.random() * width
          f.y = -10
          if (modeRef.current === 'light') {
            f.angle = Math.random() * Math.PI * 2
          }
        }
      }
    }

    draw()
    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0
      }}
      aria-hidden
    />
  )
}

export default Background
