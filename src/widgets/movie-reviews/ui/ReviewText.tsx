import styles from './MovieReviews.module.css'
import { parseAndSanitizeMarkdown } from '../model/getReviewHtml'

interface ReviewTextProps {
  content?: string
}

export const ReviewText: React.FC<ReviewTextProps> = ({ content }) => {
  if (!content) {
    return <p className={styles.text}>Отзыв отсутствует</p>
  }

  const cleanHtml = parseAndSanitizeMarkdown(content)

  return (
    <div
      className={styles.text}
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  )
}
