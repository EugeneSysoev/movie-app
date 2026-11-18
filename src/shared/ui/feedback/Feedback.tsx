import { IconButton } from '@/shared/ui/icon-button'
import styles from './Feedback.module.css'

interface FeedbackProps {
  className?: string
  message?: string
  onRetry?: () => void
  isFetching?: boolean
}

export function Feedback(props: FeedbackProps) {
  const {
    className = '',
    message = 'Не удалось загрузить данные',
    isFetching = false,
    onRetry
  } = props

  return (
    <div className={`${styles.feedback} ${className}`} role="status">
      <p>{message}</p>
      {onRetry && (
        <IconButton
          className={styles.retry}
          aria-label="Повторить запрос"
          title="Повторить запрос"
          onClick={onRetry}
          disabled={isFetching}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 4v6h-6M20 10a8 8 0 1 0 .1 4" />
          </svg>
        </IconButton>
      )}
    </div>
  )
}
