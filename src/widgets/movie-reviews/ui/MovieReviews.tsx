import { useRef } from 'react'
import type { MovieReviews200ResultsItem } from '@/shared/api/generated/model'
import { useReviewFeedback } from '../model/useReviewFeedback'
import paginateExport from 'react-paginate'
import { ReviewItem } from './ReviewItem'
import { Feedback } from '@/shared/ui/feedback'
import { Loader } from '@/shared/ui/loader'
import styles from './MovieReviews.module.css'

const ReactPaginate =
  'default' in paginateExport
    ? (paginateExport.default as typeof paginateExport)
    : paginateExport

interface MovieReviewsProps {
  movieId: number
  reviews: { review: MovieReviews200ResultsItem; reviewKey: string }[]
  page: number
  pageCount: number
  isPending: boolean
  isError: boolean
  isFetching: boolean
  onPageChange: (page: number) => void
  onRetry: () => void
}

export function MovieReviews(props: MovieReviewsProps) {
  const {
    movieId,
    reviews,
    page,
    pageCount,
    isPending,
    isError,
    isFetching,
    onPageChange,
    onRetry
  } = props

  const headingRef = useRef<HTMLHeadingElement>(null)
  const { feedbackByReview, handleReaction, handleAddComment } =
    useReviewFeedback(movieId)

  const hasReviews = reviews.length > 0
  const showPagination = pageCount > 1

  return (
    <section aria-labelledby="movie-reviews-title">
      <div className={styles.heading}>
        <h2 ref={headingRef} className={styles.title} id="movie-reviews-title">
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

      <div aria-busy={isFetching}>
        {!hasReviews && isPending && <Loader label="Загрузка рецензий" />}

        {isError && <Feedback isFetching={isFetching} onRetry={onRetry} />}

        {!hasReviews && !isPending && !isError && (
          <Feedback message="Рецензий пока нет" />
        )}

        {hasReviews && (
          <ul className={styles.list}>
            {reviews.map(({ review, reviewKey }) => {
              const feedback = feedbackByReview[reviewKey] ?? {
                reaction: null,
                comments: []
              }
              return (
                <li key={reviewKey}>
                  <ReviewItem
                    review={review}
                    feedback={feedback}
                    onReact={(reaction) =>
                      handleReaction(reviewKey, reaction)
                    }
                    onAddComment={(comment) =>
                      handleAddComment(reviewKey, comment)
                    }
                  />
                </li>
              )
            })}
          </ul>
        )}
      </div>
      {showPagination && (
        <ReactPaginate
          pageCount={pageCount}
          forcePage={page - 1}
          className={styles.pagination}
          onPageChange={({ selected }) => {
            onPageChange(selected + 1)
            headingRef.current?.scrollIntoView({ block: 'start' })
          }}
          previousLabel="←"
          nextLabel="→"
          previousAriaLabel="Предыдущая страница рецензий"
          nextAriaLabel="Следующая страница рецензий"
          ariaLabelBuilder={(number) => `Страница рецензий ${number}`}
          breakAriaLabels={{ forward: 'Перейти вперёд', backward: 'Перейти назад' }}
          pageLinkClassName={styles.pageLink}
          activeLinkClassName={styles['pageLink--active']}
        />
      )}
    </section>
  )
}
