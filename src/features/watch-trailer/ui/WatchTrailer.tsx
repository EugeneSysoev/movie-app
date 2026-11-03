import { Button } from '@/shared/ui/button'
import { useRef, useState } from 'react'
import { useMovieTrailer } from '../model/useMovieTrailer'
import { TrailerDialog } from './TrailerDialog'

interface WatchTrailerProps {
  movieId: number
  movieTitle: string
}

export function WatchTrailer(props: WatchTrailerProps) {
  const { movieId, movieTitle } = props

  const [isOpen, setIsOpen] = useState(false)

  const { trailerKey, isPending, isError, refetch } = useMovieTrailer(movieId)

  const trailerButtonRef = useRef<HTMLButtonElement>(null)

  function handleOpen() {
    setIsOpen(true)
  }

  function handleClose() {
    setIsOpen(false)
  }

  if (isPending) {
    return (
      <Button
        variant="outline"
        disabled
        aria-busy="true"
        ref={trailerButtonRef}
      >
        Загружаем трейлер…
      </Button>
    )
  }

  if (isError) {
    return (
      <Button
        variant="outline"
        title="Не удалось загрузить трейлер"
        onClick={() => void refetch()}
        ref={trailerButtonRef}
      >
        Повторить загрузку трейлера
      </Button>
    )
  }

  if (!trailerKey) {
    return (
      <Button
        variant="outline"
        disabled
        title="Трейлер недоступен"
        ref={trailerButtonRef}
      >
        Трейлер
      </Button>
    )
  }

  return (
    <>
      <Button
        variant="outline"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={handleOpen}
        ref={trailerButtonRef}
      >
        Трейлер
      </Button>

      {isOpen && (
        <TrailerDialog
          trailerKey={trailerKey}
          movieTitle={movieTitle}
          onClose={handleClose}
          returnFocusRef={trailerButtonRef}
        />
      )}
    </>
  )
}
