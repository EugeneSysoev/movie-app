import { Button } from '@/shared/ui/button'
import { useRef, useState } from 'react'
import { TrailerDialog } from './TrailerDialog'

interface WatchTrailerProps {
  movieId: number
  movieTitle: string
  className?: string
}

export function WatchTrailer(props: WatchTrailerProps) {
  const { movieId, movieTitle, className } = props

  const [isOpen, setIsOpen] = useState(false)

  const trailerButtonRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <Button
        className={className}
        variant="outline"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
        ref={trailerButtonRef}
      >
        Трейлер
      </Button>

      {isOpen && (
        <TrailerDialog
          movieId={movieId}
          movieTitle={movieTitle}
          onClose={() => setIsOpen(false)}
          returnFocusRef={trailerButtonRef}
        />
      )}
    </>
  )
}
