'use client'

import { useEffect, useState } from 'react'

export default function BinaryCursorTrail() {
  const [trails, setTrails] = useState([])

  useEffect(() => {
    let timeout
    const handleMouseMove = (e) => {
      const binary = Math.random() > 0.5 ? '1' : '0'
      const newTrail = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        char: binary,
      }
      
      setTrails(prev => [...prev.slice(-10), newTrail])
      
      timeout = setTimeout(() => {
        setTrails(prev => prev.filter(t => t.id !== newTrail.id))
      }, 1000)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      {trails.map(trail => (
        <div
          key={trail.id}
          className="fixed pointer-events-none z-50 text-xs font-mono text-indigo-400/60 transition-opacity duration-1000"
          style={{
            left: trail.x,
            top: trail.y,
          }}
        >
          {trail.char}
        </div>
      ))}
    </>
  )
}
