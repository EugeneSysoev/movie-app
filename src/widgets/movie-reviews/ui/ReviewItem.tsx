import type { MovieReviews200ResultsItem } from '@/shared/api/generated/model'
import { useState } from 'react'
import {
  getReviewAuthor,
  getReviewAvatarUrl,
  getReviewDate
} from '../model/reviewDetails'
import { ReviewText } from './ReviewText'
import { ReviewComments } from './ReviewComments'
import type { LocalComment, ReviewFeedback } from '../model/reviewFeedback'
import styles from './MovieReviews.module.css'

interface ReviewItemProps {
  review: MovieReviews200ResultsItem
  feedback: ReviewFeedback
  onReact: (reaction: 'like' | 'dislike') => void
  onAddComment: (comment: LocalComment) => void
}

export function ReviewItem({
  review,
  feedback,
  onReact,
  onAddComment
}: ReviewItemProps) {
  const [failedAvatarUrl, setFailedAvatarUrl] = useState<string | null>(null)
  const author = getReviewAuthor(review)
  const date = getReviewDate(review.created_at)
  const avatarUrl = getReviewAvatarUrl(review.author_details?.avatar_path)

  return (
    <article className={styles.review}>
      <header className={styles.reviewHeader}>
        {avatarUrl && avatarUrl !== failedAvatarUrl ? (
          <img
            className={styles.avatar}
            src={avatarUrl}
            alt=""
            width={50}
            height={50}
            loading="lazy"
            onError={() => setFailedAvatarUrl(avatarUrl)}
          />
        ) : (
          <span className={styles.avatar} aria-hidden="true">
            {author.charAt(0).toUpperCase()}
          </span>
        )}
        <div className={styles.authorDetails}>
          <h3 className={styles.author}>{author}</h3>
          {date ? (
            <time className={styles.date} dateTime={review.created_at}>
              {date}
            </time>
          ) : (
            <p className={styles.date}>Дата не указана</p>
          )}
        </div>
      </header>
      <ReviewText content={review.content} />
      <div className={styles.reactions} role="group" aria-label="Ваша реакция на рецензию">
        <button
          className={styles.reactionButton}
          type="button"
          aria-pressed={feedback.reaction === 'like'}
          onClick={() => onReact('like')}
        >
          Нравится
        </button>
        <button
          className={styles.reactionButton}
          type="button"
          aria-pressed={feedback.reaction === 'dislike'}
          onClick={() => onReact('dislike')}
        >
          Не нравится
        </button>
      </div>
      <ReviewComments comments={feedback.comments} onAddComment={onAddComment} />
    </article>
  )
}
