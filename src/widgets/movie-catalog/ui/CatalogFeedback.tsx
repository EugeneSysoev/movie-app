import { Button } from '@/shared/ui/button'
import styles from './CatalogFeedback.module.css'

interface CatalogFeedbackProps {
  message: string
  onRetry?: () => void
  isFetching?: boolean
}

export function CatalogFeedback({
  message,
  onRetry,
  isFetching = false,
}: CatalogFeedbackProps) {
  return (
    <div className={styles.feedback} role="status">
      <p>{message}</p>
      {onRetry && (
        <Button variant="outline" onClick={onRetry} disabled={isFetching}>
          {isFetching ? 'Загружаем…' : 'Повторить'}
        </Button>
      )}
    </div>
  )
}
