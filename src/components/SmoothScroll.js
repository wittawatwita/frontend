'use client'
import { ReactLenis } from 'lenis/react'

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis 
      root 
      options={{
        lerp: 0.005,
        duration: 3.5,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}