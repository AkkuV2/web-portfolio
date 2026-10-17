import { useState, useEffect, useRef, useCallback } from 'react'

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&'

// Ahora recibe un array de palabras como parámetro
function useScrambleCycle(words: string[]) {
  const [display, setDisplay] = useState(words[0] || '')
  const wordIndex = useRef(0)
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

  // Este efecto se reinicia si el array 'words' cambia (ej. al cambiar de idioma)
  useEffect(() => {
    // Reiniciamos el estado con la primera palabra del nuevo idioma
    wordIndex.current = 0
    setDisplay(words[0] || '')

    const cycle = () => {
      wordIndex.current = (wordIndex.current + 1) % words.length
      scrambleTo(words[wordIndex.current])
    }
    
    const interval = setInterval(cycle, 3000)
    
    return () => {
      clearInterval(interval)
      if (frameRef.current) clearTimeout(frameRef.current)
    }
  }, [words, scrambleTo])

  return display
}
export default useScrambleCycle;
