import { useEffect, useState } from 'react'

export function useSearchTerm(value: string) {
  const query = value.trim()
  const [term, setTerm] = useState('')

  useEffect(() => {
    const timer = window.setTimeout(() => setTerm(query), 300)
    return () => window.clearTimeout(timer)
  }, [query])

  return { query, isTyping: query !== '' && query !== term }
}
