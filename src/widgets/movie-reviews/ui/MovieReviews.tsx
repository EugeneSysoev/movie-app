import { useMovieReviews } from '@/shared/api/generated/endpoints'
import { Button } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'
import { useState } from 'react'
import styles from './MovieReviews.module.css'
import { ReviewItem } from './ReviewItem'
import type { LocalComment, ReviewFeedback } from '../model/reviewFeedback'

interface MovieReviewsProps {
  movieId: number
}

export function MovieReviews({ movieId }: MovieReviewsProps) {
  const [page, setPage] = useState(1)
  const [feedbackByReview, setFeedbackByReview] = useState<Record<string, ReviewFeedback>>({})
  const { data, isPending, isFetching, isError, refetch } = useMovieReviews(
    movieId,
    { language: 'ru-RU', page }
  )

  const reviews = data?.results ?? []
  const totalPages = data?.total_pages ?? 0
  const showPagination = page > 1 || totalPages > 1
  let reviewsContent

  function handleReaction(reviewKey: string, reaction: 'like' | 'dislike') {
    setFeedbackByReview((current) => {
      const feedback = current[reviewKey] ?? { reaction: null, comments: [] }
      return {
        ...current,
        [reviewKey]: {
          ...feedback,
          reaction: feedback.reaction === reaction ? null : reaction
        }
      }
    })
  }

  function handleAddComment(reviewKey: string, comment: LocalComment) {
    setFeedbackByReview((current) => {
      const feedback = current[reviewKey] ?? { reaction: null, comments: [] }
      return {
        ...current,
        [reviewKey]: { ...feedback, comments: [...feedback.comments, comment] }
      }
    })
  }

  if (isPending) {
    reviewsContent = (
      <p className={styles.message} role="status">
        Загружаем рецензии…
      </p>
    )
  } else if (isError) {
    reviewsContent = (
      <div className={styles.error}>
        <p role="alert">Не удалось загрузить рецензии.</p>
        <Button
          variant="outline"
          disabled={isFetching}
          onClick={() => void refetch()}
        >
          {isFetching ? 'Повторяем запрос…' : 'Повторить запрос'}
        </Button>
      </div>
    )
  } else if (reviews.length === 0) {
    reviewsContent = (
      <p className={styles.message}>Рецензий на русском пока нет</p>
    )
  } else {
    reviewsContent = (
      <ul className={styles.list}>
        {reviews.map((review, index) => {
          const reviewKey = review.id ?? review.url ?? `${page}-${index}`
          const feedback = feedbackByReview[reviewKey] ?? { reaction: null, comments: [] }
          return (
            <li key={reviewKey}>
              <ReviewItem
                review={review}
                feedback={feedback}
                onReact={(reaction) => handleReaction(reviewKey, reaction)}
                onAddComment={(comment) => handleAddComment(reviewKey, comment)}
              />
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <section className={styles.reviews} aria-labelledby="movie-reviews-title">
      <Container>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h2 className={styles.title} id="movie-reviews-title">
              Рецензии
            </h2>
            <button
              className={styles.writeButton}
              type="button"
              disabled
              title="Написание рецензий пока недоступно"
            >
              Написать рецензию
            </button>
          </div>
          {reviews.length > 0 && !isError && (
            <p className={styles.localNotice}>
              Ваши реакции и комментарии — локальная демонстрация. Они сбросятся после обновления или ухода со страницы фильма.
            </p>
          )}
          <div aria-busy={isFetching}>{reviewsContent}</div>
          {showPagination && (
            <nav className={styles.pagination} aria-label="Страницы рецензий">
              <Button
                variant="outline"
                disabled={page === 1 || isPending || isFetching}
                aria-label="Предыдущая страница рецензий"
                onClick={() => setPage(page - 1)}
              >
                Назад
              </Button>
              <p className={styles.pageNumber} role="status">
                Страница {page}
                {totalPages > 0 && ` из ${totalPages}`}
              </p>
              <Button
                variant="outline"
                disabled={
                  isPending || isFetching || isError || page >= totalPages
                }
                aria-label="Следующая страница рецензий"
                onClick={() => setPage(page + 1)}
              >
                Далее
              </Button>
            </nav>
          )}
        </div>
      </Container>
    </section>
  )
}
