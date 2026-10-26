import { Button } from '@/shared/ui/button'
import styles from './HeroFeedback.module.css'

interface HeroFeedbackProps {
  isPending: boolean
  isError: boolean
  isFetching: boolean
  onRetry: () => void
}

export function HeroFeedback({
  isPending,
  isError,
  isFetching,
  onRetry,
}: HeroFeedbackProps) {
  return (
    <div className={styles.feedback} role="status">
      {isError && (
        <>
          <p>Не удалось загрузить премьеры.</p>
          <Button variant="outline" onClick={onRetry} disabled={isFetching}>
            Повторить
          </Button>
        </>
      )}

      {!isPending && !isError && <p>Нет доступных премьер.</p>}
    </div>
  )
}
