import type { MovieReviews200ResultsItem } from '@/shared/api/generated/model'
import { lazy, Suspense, useId, useState } from 'react'
import { Loader } from '@/shared/ui/loader'
import {
  getReviewAuthor,
  getReviewAvatarUrl,
  getReviewDate,
  getReviewRating
} from '../model/reviewDetails'
import { ReviewText } from './ReviewText'
import commentIcon from '../assets/comment.svg'
import likeIcon from '../assets/like.svg'
import dislikeIcon from '../assets/dislike.svg'
import type { LocalComment, ReviewFeedback } from '../model/reviewFeedback'
import styles from './MovieReviews.module.css'

const ReviewComments = lazy(() => import('./ReviewComments'))
const reactions = [
  { value: 'like', label: 'Нравится', icon: likeIcon },
  { value: 'dislike', label: 'Не нравится', icon: dislikeIcon }
] as const

interface ReviewItemProps {
  review: MovieReviews200ResultsItem
  feedback: ReviewFeedback
  onReact: (reaction: 'like' | 'dislike') => void
  onAddComment: (comment: LocalComment) => void
}

export function ReviewItem(props: ReviewItemProps) {
  const { review, feedback, onReact, onAddComment } = props
  const [failedAvatarUrl, setFailedAvatarUrl] = useState<string | null>(null)
  const [commentsState, setCommentsState] = useState<'unopened' | 'open' | 'closed'>('unopened')
  const commentsId = useId()
  const commentsOpen = commentsState === 'open'
  const author = getReviewAuthor(review)
  const date = getReviewDate(review.created_at)
  const avatarUrl = getReviewAvatarUrl(review.author_details?.avatar_path)

  return (
    <article>
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
          <p className={styles.author}>{author}</p>
          {date ? (
            <time className={styles.date} dateTime={review.created_at}>
              {date}
            </time>
          ) : (
            <p className={styles.date}>Дата не указана</p>
          )}
        </div>
      </header>
      <ReviewText content={review.content} rating={getReviewRating(review)} />
      <div className={styles.reviewFooter}>
        <div className={styles.reactions} role="group" aria-label="Комментарии и реакции">
          <button
            className={styles.reactionButton}
            type="button"
            aria-label={`Комментарии: ${feedback.comments.length}`}
            title={commentsOpen ? 'Свернуть комментарии' : 'Открыть комментарии'}
            aria-expanded={commentsOpen}
            aria-controls={commentsId}
            onClick={() => setCommentsState(commentsOpen ? 'closed' : 'open')}
          >
            <img src={commentIcon} alt="" />
            <span>{feedback.comments.length}</span>
          </button>
          {reactions.map(({ value, label, icon }) => {
            const selected = feedback.reaction === value
            return (
              <button
                key={value}
                className={styles.reactionButton}
                type="button"
                aria-label={label}
                title={label}
                aria-pressed={selected}
                onClick={() => onReact(value)}
              >
                <img src={icon} alt="" />
                {selected && <span>1</span>}
              </button>
            )
          })}
        </div>
      </div>
      <div id={commentsId} hidden={!commentsOpen} className={styles.thread}>
        {commentsState !== 'unopened' && (
          <Suspense fallback={<Loader className={styles.commentsLoader} label="Загрузка формы комментариев" />}>
            <ReviewComments comments={feedback.comments} onAddComment={onAddComment} />
          </Suspense>
        )}
      </div>
    </article>
  )
}
