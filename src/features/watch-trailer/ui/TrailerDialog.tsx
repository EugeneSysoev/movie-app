import { Button } from '@/shared/ui/button/Button'
import { useEffect, useRef } from 'react'
import { type SyntheticEvent, type RefObject } from 'react'
import styles from './TrailerDialog.module.css'

interface TrailerDialogProps {
  trailerKey: string
  movieTitle: string
  onClose: () => void
  returnFocusRef: RefObject<HTMLButtonElement | null>
}

export function TrailerDialog(props: TrailerDialogProps) {
  const { trailerKey, movieTitle, onClose, returnFocusRef } = props

  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const returnFocusButton = returnFocusRef.current

    dialog.showModal()

    return () => {
      dialog.close()
      returnFocusButton?.focus()
    }
  }, [returnFocusRef])

  function handleCancel(event: SyntheticEvent<HTMLDialogElement>) {
    event.preventDefault()
    dialogRef.current?.close()
    onClose()
  }

  function handleClickCancel(event: SyntheticEvent<HTMLElement>) {
    if (event.target === event.currentTarget) {
      dialogRef.current?.close()
      onClose()
    }
  }

  return (
    <dialog
      className={styles.dialog}
      ref={dialogRef}
      onClick={handleClickCancel}
      onCancel={handleCancel}
      aria-label="Просмотр трейлера фильма"
    >
      <div className={styles.content}>
        <Button className={styles.button} onClick={onClose}>
          Закрыть
        </Button>

        <iframe
          className={styles.player}
          title={movieTitle}
          src={`https://www.youtube.com/embed/${trailerKey}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <a
          className={styles.youtubeLink}
          href={`https://www.youtube.com/watch?v=${encodeURIComponent(trailerKey)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Смотреть на YouTube
        </a>
      </div>
    </dialog>
  )
}
