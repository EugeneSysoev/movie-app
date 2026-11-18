import { Suspense, useEffect, useRef, useState, type ReactNode } from 'react'
import { Loader } from '@/shared/ui/loader'

export function DeferredReviews({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isNear, setIsNear] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const container = containerRef.current
    if (isNear || !container) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsNear(true)
    }, { rootMargin: '400px 0px' })

    observer.observe(container)
    return () => observer.disconnect()
  }, [isNear])

  const loader = <Loader label="Загрузка рецензий" />

  return (
    <div ref={containerRef}>
      {isNear ? <Suspense fallback={loader}>{children}</Suspense> : loader}
    </div>
  )
}
