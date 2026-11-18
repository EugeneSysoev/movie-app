import { useEffect } from 'react'
import { useImmer } from 'use-immer'
import type { LocalComment, ReviewFeedback } from './reviewFeedback'
import { loadReviewFeedback, saveReviewFeedback } from './reviewFeedbackStorage'

export function useReviewFeedback(movieId: number) {
  const [feedbackByReview, setFeedbackByReview] = useImmer<
    Record<string, ReviewFeedback>
  >(() => loadReviewFeedback(movieId))
  useEffect(() => {
    saveReviewFeedback({ movieId, feedbackByReview })
  }, [movieId, feedbackByReview])

  function handleReaction(reviewKey: string, reaction: 'like' | 'dislike') {
    setFeedbackByReview((draft) => {
      if (!draft[reviewKey]) {
        draft[reviewKey] = { reaction: null, comments: [] }
      }

      const feedback = draft[reviewKey]
      feedback.reaction = feedback.reaction === reaction ? null : reaction
    })
  }

  function handleAddComment(reviewKey: string, comment: LocalComment) {
    setFeedbackByReview((draft) => {
      if (!draft[reviewKey]) {
        draft[reviewKey] = { reaction: null, comments: [] }
      }

      draft[reviewKey].comments.push(comment)
    })
  }

  return {
    feedbackByReview,
    handleReaction,
    handleAddComment
  }
}
