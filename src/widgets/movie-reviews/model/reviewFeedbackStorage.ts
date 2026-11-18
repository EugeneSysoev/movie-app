import { isValid, parseISO } from 'date-fns'
import { validateComment } from './reviewFeedback'
import type { LocalComment, ReviewFeedback } from './reviewFeedback'

interface ReviewFeedbackStorage {
  movieId: number
  feedbackByReview: Record<string, ReviewFeedback>
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function isPersistentReviewKey(key: string): boolean {
  return key.startsWith('id:') || key.startsWith('url:')
}

function isLocalComment(value: unknown): value is LocalComment {
  if (!isRecord(value)) return false

  return (
    typeof value.id === 'string' &&
    value.id.length > 0 &&
    typeof value.content === 'string' &&
    validateComment(value.content) === null &&
    typeof value.createdAt === 'string' &&
    isValid(parseISO(value.createdAt))
  )
}

function isReviewFeedback(value: unknown): value is ReviewFeedback {
  if (!isRecord(value)) return false

  return (
    (value.reaction === null ||
      value.reaction === 'like' ||
      value.reaction === 'dislike') &&
    Array.isArray(value.comments) &&
    value.comments.every(isLocalComment)
  )
}

export function saveReviewFeedback(props: ReviewFeedbackStorage): void {
  const { movieId, feedbackByReview } = props
  const key = `movie-app:review-feedback:${movieId}`

  try {
    const persistentFeedback = Object.fromEntries(
      Object.entries(feedbackByReview).filter(([reviewKey]) =>
        isPersistentReviewKey(reviewKey)
      )
    )

    localStorage.setItem(key, JSON.stringify(persistentFeedback))
  } catch {
    return
  }
}

export function loadReviewFeedback(
  movieId: number
): Record<string, ReviewFeedback> {
  const key = `movie-app:review-feedback:${movieId}`

  try {
    const saved = localStorage.getItem(key)

    if (saved === null) return {}

    const parsed: unknown = JSON.parse(saved)
    if (!isRecord(parsed)) return {}

    const feedbackByReview: Record<string, ReviewFeedback> = {}

    for (const [reviewKey, feedback] of Object.entries(parsed)) {
      if (isPersistentReviewKey(reviewKey) && isReviewFeedback(feedback)) {
        feedbackByReview[reviewKey] = feedback
      }
    }

    return feedbackByReview
  } catch {
    return {}
  }
}
