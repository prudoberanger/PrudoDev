'use client'
import { useState, useEffect } from 'react'

const phrases = [
  'Des sites qui convertissent.',
  'Un design qui impressionne.',
  'Un SEO qui vous propulse.',
  'Une présence digitale puissante.',
  'Votre vision, notre code.',
]

export default function Typewriter() {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !reverse) {
      setReverse(true)
      return
    }
    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex((prev) => (prev + 1) % phrases.length)
      return
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1))
    }, reverse ? 40 : 80)
    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse])

  return (
    <span className="typewriter-cursor text-[#F0B429]">
      {phrases[index].substring(0, subIndex)}
    </span>
  )
}
