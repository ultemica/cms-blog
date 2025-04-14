'use client'
import type React from 'react'
import { useXTerm } from 'react-xtermjs'

export const ReactTerminal: React.FC = () => {
  const { instance, ref } = useXTerm()
  instance?.writeln('Hello from react-xtermjs!')
  instance?.onData((data) => instance?.write(data))

  return <div ref={ref} style={{ width: '100%', height: '100%' }} />
}

export default async function Page() {
  return (
    <>
      <ReactTerminal />
    </>
  )
}
