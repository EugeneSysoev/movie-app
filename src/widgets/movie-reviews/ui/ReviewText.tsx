import styles from './MovieReviews.module.css'
import { getReviewHtml } from '../model/getReviewHtml'

interface ReviewTextProps {
  content?: string
  rating?: number
}

export function ReviewText({ content, rating }: ReviewTextProps) {
  const { title, html } = getReviewHtml(content)
  const hasRating = rating !== undefined

  return (
    <>
      {(hasRating || title) && (
        <div className={styles.reviewSummary}>
          {hasRating && (
            <span className={styles.rating} title={`Оценка автора: ${rating} из 10`}>
              <span className={styles.visuallyHidden}>Оценка автора: </span>
              {rating}
              <span className={styles.visuallyHidden}> из 10</span>
            </span>
          )}
          {hasRating && title && <span aria-hidden="true">•</span>}
          {title && <h3 className={styles.reviewTitle}>{title}</h3>}
        </div>
      )}
      {html && <div className={styles.text} dangerouslySetInnerHTML={{ __html: html }} />}
    </>
  )
}
