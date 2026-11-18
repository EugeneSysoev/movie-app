import { useState } from 'react'
import { useQueries } from '@tanstack/react-query'
import { getMovieReviewsQueryOptions } from '@/shared/api/generated/endpoints'
import { TMDB_LANGUAGE, TMDB_LANGUAGE_EN } from '@/shared/config/tmdb'
import type { MovieReviews200ResultsItem } from '@/shared/api/generated/model'
import {
  getReviewApiPageCount,
  getReviewGroup,
  getReviewPageParams,
  getReviewPagePositions
} from './reviewPagination'

function getReviewFeedbackKey(
  review: MovieReviews200ResultsItem,
  source: { language: string; page: number },
  index: number
): string {
  if (review.id) return `id:${review.id}`
  if (review.url) return `url:${review.url}`

  return `temporary:${source.language}:${source.page}:${index}`
}

export function useMovieReviewsData(movieId: number, isValidMovieId: boolean) {
  const [selectedPage, setSelectedPage] = useState(1)
  const [requestedPages, setRequestedPages] = useState([
    { language: TMDB_LANGUAGE, page: 1 },
    { language: TMDB_LANGUAGE_EN, page: 1 }
  ])

  const queryOptions = { query: { enabled: isValidMovieId } }
  const queries = useQueries({
    queries: requestedPages.map((params) =>
      getMovieReviewsQueryOptions(movieId, params, queryOptions)
    )
  })

  const ruQueries = queries.filter(
    (_, index) => requestedPages[index].language === TMDB_LANGUAGE
  )
  const enQueries = queries.filter(
    (_, index) => requestedPages[index].language === TMDB_LANGUAGE_EN
  )
  const ruFirst = ruQueries[0]
  const enFirst = enQueries[0]
  const ruTotalPages = getReviewApiPageCount(ruFirst.data)
  const enTotalPages = getReviewApiPageCount(enFirst.data)

  const openedQueries = ruQueries.slice(0, ruTotalPages)
  if (openedQueries.length === ruTotalPages) {
    openedQueries.push(...enQueries.slice(0, enTotalPages))
  }

  const hasMoreApiPages =
    Boolean(ruFirst.data) && openedQueries.length < ruTotalPages + enTotalPages
  const positions = getReviewPagePositions(
    openedQueries.map((query) => query.data),
    hasMoreApiPages
  )
  const pageCount = positions.length
  const page = pageCount > 0 ? Math.min(selectedPage, pageCount) : 1
  const { apiPage, startIndex } = positions[page - 1] ?? {
    apiPage: 1,
    startIndex: 0
  }
  const activeQuery = openedQueries[apiPage - 1]
  const sourcePage = getReviewPageParams({ page: apiPage, ruTotalPages })
  const reviews = getReviewGroup(activeQuery?.data?.results ?? [], startIndex)

  function changePage(nextPage: number) {
    const position = positions[nextPage - 1]
    if (!position) return

    if (position.apiPage > openedQueries.length) {
      const params = getReviewPageParams({ page: position.apiPage, ruTotalPages })
      setRequestedPages([...requestedPages, params])
    }
    setSelectedPage(nextPage)
  }

  const reviewsQueries = [ruFirst, enFirst]
  if (activeQuery && !reviewsQueries.includes(activeQuery)) {
    reviewsQueries.push(activeQuery)
  }

  function retryReviews() {
    reviewsQueries.forEach((query) => void query.refetch())
  }

  return {
    isInitialFetched: ruFirst.isFetched && enFirst.isFetched,
    reviewsProps: {
      movieId,
      reviews: reviews.map((review, index) => ({
        review,
        reviewKey: getReviewFeedbackKey(review, sourcePage, startIndex + index)
      })),
      page,
      pageCount,
      onPageChange: changePage,
      isError: reviewsQueries.some((query) => query.isError),
      isFetching: reviewsQueries.some((query) => query.isFetching),
      isPending: activeQuery?.isPending ?? false,
      onRetry: retryReviews
    }
  }
}
