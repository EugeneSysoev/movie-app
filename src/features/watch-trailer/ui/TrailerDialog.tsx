import { lazy, Suspense, type RefObject } from 'react'
import { Dialog } from '@/shared/ui/dialog'
import { Loader } from '@/shared/ui/loader'
import styles from './TrailerDialog.module.css'

const TrailerContent = lazy(() => import('./TrailerContent'))

interface TrailerDialogProps {
  movieId: number
  movieTitle: string
  returnFocusRef: RefObject<HTMLButtonElement | null>
  onClose: () => void
}

export function TrailerDialog(props: TrailerDialogProps) {
  const { movieId, movieTitle, returnFocusRef, onClose } = props

  return (
    <Dialog
      className={styles.dialog}
      label="Просмотр трейлера"
      closeLabel="Закрыть трейлер"
      returnFocusRef={returnFocusRef}
      onClose={onClose}
    >
      <div className={styles.content}>
        <Suspense fallback={<Loader label="Загрузка трейлера" className={styles.loading} />}>
          <TrailerContent movieId={movieId} movieTitle={movieTitle} />
        </Suspense>
      </div>
    </Dialog>
  )
}
