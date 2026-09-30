import { useState, useEffect, useRef, useCallback } from 'react'

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&'
const NAMES = ['Ali Erazo', 'Akku']

function useScrambleCycle() {
  const [display, setDisplay] = useState(NAMES[0])
  const nameIndex = useRef(0)
  const frameRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const scrambleTo = useCallback((target: string) => {
    let iteration = 0
    const totalFrames = 18
    const scramble = () => {
      setDisplay(
        target
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' '
            if (i < iteration / (totalFrames / target.length)) return char
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
          })
          .join('')
      )
      iteration++
      if (iteration <= totalFrames) {
        frameRef.current = setTimeout(scramble, 40)
      } else {
        setDisplay(target)
      }
    }
    scramble()
  }, [])

  useEffect(() => {
    const cycle = () => {
      nameIndex.current = (nameIndex.current + 1) % NAMES.length
      scrambleTo(NAMES[nameIndex.current])
    }
    const interval = setInterval(cycle, 3000)
    return () => {
      clearInterval(interval)
      if (frameRef.current) clearTimeout(frameRef.current)
    }
  }, [scrambleTo])

  return display
}
export default useScrambleCycle;
